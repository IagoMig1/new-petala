import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createPost, getPost, updatePost, supabase } from '../utils/supabase';
import { Save, ArrowLeft } from 'lucide-react';

const AdminEditor = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [published, setPublished] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      setLoading(true);
      const post = await getPost(id);
      if (post) {
        setTitle(post.title);
        setContent(post.content);
        setImageUrl(post.image_url || '');
        setExcerpt(post.excerpt || '');
        setPublished(post.published);
      }
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  // Upload da imagem para Supabase Storage com debug
  const uploadImage = async (file: File) => {
    setSaving(true);
    setError(null);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `uploads/${fileName}`; // Sem barra no início

      console.log('uploadImage: filePath =', filePath);
      console.log('uploadImage: file.type =', file.type);

      const { data, error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
          contentType: file.type,
        });

      if (uploadError) {
        console.error('uploadImage: uploadError =', uploadError);
        throw uploadError;
      }

      console.log('uploadImage: upload data =', data);

      const { data: urlData, error: urlError } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      if (urlError) {
        console.error('uploadImage: urlError =', urlError);
        throw urlError;
      }

      console.log('uploadImage: publicURL =', urlData.publicUrl);

      setImageUrl(urlData.publicUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao fazer upload da imagem');
    } finally {
      setSaving(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    uploadImage(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent, publishStatus?: boolean) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const postData = {
        title,
        content,
        image_url: imageUrl,
        excerpt: excerpt || content.substring(0, 160),
        published: publishStatus !== undefined ? publishStatus : published,
      };
      if (id) {
        await updatePost(id, postData);
      } else {
        await createPost(postData);
      }
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao salvar o post');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <button onClick={() => navigate('/admin/dashboard')} className="mr-4 p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">{id ? 'Editar Post' : 'Novo Post'}</h1>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={e => handleSubmit(e, false)}
            disabled={saving}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          >
            Salvar como rascunho
          </button>
          <button
            onClick={e => handleSubmit(e, true)}
            disabled={saving}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {saving ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Salvando...
              </span>
            ) : (
              <span className="flex items-center">
                <Save size={16} className="mr-2" />
                Publicar
              </span>
            )}
          </button>
        </div>
      </div>
      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
          <p>{error}</p>
        </div>
      )}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="mb-6">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Título
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            placeholder="Digite o título do post"
          />
        </div>

        {/* Input para upload da imagem */}
        <div className="mb-6">
          <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700 mb-1">
            Imagem de Capa (Upload)
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleFileChange}
            disabled={saving}
            className="block w-full text-sm text-gray-700"
          />
          {imageUrl && (
            <div className="mt-2 h-40 w-full overflow-hidden rounded-md border border-gray-200">
              <img
                src={imageUrl}
                alt="Preview"
                className="object-contain h-full w-full"
                onError={e => {
                  e.currentTarget.src = 'https://via.placeholder.com/150?text=Error';
                }}
              />
            </div>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
            Resumo
          </label>
          <textarea
            id="excerpt"
            rows={2}
            value={excerpt}
            onChange={e => setExcerpt(e.target.value)}
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            placeholder="Um breve resumo do post (opcional)"
          ></textarea>
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Conteúdo
          </label>
          <textarea
            id="content"
            rows={12}
            value={content}
            onChange={e => setContent(e.target.value)}
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            placeholder="Escreva o conteúdo do post aqui..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AdminEditor;
