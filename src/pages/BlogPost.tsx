import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPost, BlogPost } from '../utils/supabase';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
const BlogPostPage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        navigate('/blog');
        return;
      }
      setLoading(true);
      const postData = await getPost(id);
      if (postData) {
        setPost(postData);
      } else {
        navigate('/blog');
      }
      setLoading(false);
    };
    fetchPost();
  }, [id, navigate]);
  if (loading) {
    return <div className="flex justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>;
  }
  if (!post) {
    return null;
  }
  // Calculate reading time (rough estimate)
  const readingTime = Math.max(1, Math.ceil(post.content.split(' ').length / 200));
  return <div className="bg-white w-full">
      {post.image_url && <div className="w-full h-72 md:h-96 bg-gray-100 relative">
          <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />
        </div>}
      <div className="container mx-auto px-4 py-12">
        <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft size={18} className="mr-2" /> Voltar para o blog
        </Link>
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-500 mb-8 space-x-4">
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              {new Date(post.created_at).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
            })}
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              {readingTime} min de leitura
            </div>
          </div>
          <div className="prose prose-lg max-w-none">
            {/* This is a simplified approach. In a real app, you would use a markdown renderer */}
            {post.content.split('\n\n').map((paragraph, index) => <p key={index} className="mb-6 text-gray-700">
                {paragraph}
              </p>)}
          </div>
        </article>
      </div>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Gostou do conteúdo?
            </h2>
            <p className="text-gray-600 mb-8">
              Continue explorando mais artigos no blog ou conheça mais sobre o
              trabalho da Pétala Lacerda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/blog" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:opacity-90 transition-opacity">
                Mais artigos
              </Link>
              <Link to="/about" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                Sobre Pétala
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default BlogPostPage;