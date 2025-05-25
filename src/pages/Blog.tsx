import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, getPosts } from '../utils/supabase';
import { ArrowRight, Calendar, Search } from 'lucide-react';
const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const allPosts = await getPosts();
      setPosts(allPosts);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.content.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div className="bg-white w-full">
      <div className="py-16 bg-gradient-to-r from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Reflexões, histórias e aprendizados sobre comunicação, inclusão
            social e os bastidores do podcast Cá Entre Nós.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={20} className="text-gray-400" />
          </div>
          <input type="text" placeholder="Buscar posts..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500" />
        </div>
        {loading ? <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
          </div> : <div>
            {filteredPosts.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => <div key={post.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {post.image_url && <Link to={`/blog/${post.id}`}>
                        <img src={post.image_url} alt={post.title} className="w-full h-48 object-cover hover:opacity-90 transition-opacity" />
                      </Link>}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={16} className="mr-1" />
                        {new Date(post.created_at).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                })}
                      </div>
                      <h2 className="text-xl font-semibold mb-3 text-gray-800">
                        <Link to={`/blog/${post.id}`} className="hover:text-pink-500 transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link to={`/blog/${post.id}`} className="inline-flex items-center text-pink-500 hover:text-pink-700 font-medium">
                        Ler mais <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>)}
              </div> : <div className="text-center py-12">
                <p className="text-gray-500">
                  Nenhum post encontrado com o termo "{searchTerm}"
                </p>
                {searchTerm && <button onClick={() => setSearchTerm('')} className="mt-4 text-pink-500 hover:text-pink-700">
                    Limpar busca
                  </button>}
              </div>}
          </div>}
      </div>
    </div>;
};
export default Blog;