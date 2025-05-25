import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, deletePost, BlogPost } from '../utils/supabase';
import { Edit, Trash2, Plus, Eye, EyeOff } from 'lucide-react';
const AdminDashboard = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const allPosts = await getPosts(false); // Get all posts including unpublished
      setPosts(allPosts);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const handleDelete = async (id: string) => {
    const success = await deletePost(id);
    if (success) {
      setPosts(posts.filter(post => post.id.toString() !== id));
    }
  };
  return <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <Link to="/admin/editor" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:opacity-90 transition-opacity">
          <Plus size={18} className="mr-2" />
          Novo Post
        </Link>
      </div>
      {loading ? <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
        </div> : <div className="bg-white shadow overflow-hidden sm:rounded-md">
          {posts.length > 0 ? <ul className="divide-y divide-gray-200">
              {posts.map(post => <li key={post.id}>
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                      {post.published ? <Eye size={18} className="text-green-500 mr-3" /> : <EyeOff size={18} className="text-gray-400 mr-3" />}
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {new Date(post.created_at).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  })}
                          {post.published ? ' • Publicado' : ' • Rascunho'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link to={`/admin/editor/${post.id}`} className="p-2 text-blue-600 hover:text-blue-800">
                        <Edit size={18} />
                        <span className="sr-only">Editar</span>
                      </Link>
                      {deleteConfirm === post.id ? <div className="flex items-center space-x-2">
                          <button onClick={() => handleDelete(post.id.toString())} className="p-2 text-red-600 hover:text-red-800">
                            Confirmar
                          </button>
                          <button onClick={() => setDeleteConfirm(null)} className="p-2 text-gray-600 hover:text-gray-800">
                            Cancelar
                          </button>
                        </div> : <button onClick={() => setDeleteConfirm(post.id)} className="p-2 text-red-600 hover:text-red-800">
                          <Trash2 size={18} />
                          <span className="sr-only">Excluir</span>
                        </button>}
                    </div>
                  </div>
                </li>)}
            </ul> : <div className="text-center py-12">
              <p className="text-gray-500">
                Nenhum post encontrado. Crie um novo post!
              </p>
            </div>}
        </div>}
    </div>;
};
export default AdminDashboard;