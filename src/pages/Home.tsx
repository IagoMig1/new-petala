import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mic, Heart, BookOpen } from 'lucide-react';
import { BlogPost, getPosts } from '../utils/supabase';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      setLoading(true);
      const posts = await getPosts(true);
      setLatestPosts(posts.slice(0, 3));
      setLoading(false);
    };
    fetchLatestPosts();
  }, []);

  return (
    <div className="w-full">
     <Hero />


      {/* Achievements Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fundadora</h3>
              <p className="text-gray-600">
                Associação Conviver - nascida da experiência como mãe do Augusto
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Idealizadora</h3>
              <p className="text-gray-600">
                Projetos Desapega Conviver e Conviver Mimo Solidário
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Liderança</h3>
              <p className="text-gray-600">
                Presidente do Republicanos Mulher e membro de diretorias importantes
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Podcast Section */}
      <FadeInSection>
        <section className="py-16 bg-white" id="podcast">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="bg-gray-100 p-1 rounded-xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Podcast Cá Entre Nós"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Mic className="text-pink-500" size={28} />
                  <h2 className="text-3xl font-bold text-gray-800">Podcast Cá Entre Nós</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Um espaço de diálogo aberto e sincero sobre temas relevantes da sociedade, com
                  convidados especiais e discussões que vão te fazer refletir.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h3 className="font-semibold text-gray-800 mb-2">Disponível no</h3>
                    <p className="text-gray-600">YouTube e Instagram</p>
                  </div>
                </div>
<a
  href="https://www.youtube.com/@CáEntreNósPodcast-s1z"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center text-pink-500 hover:text-pink-700 font-medium"
>
  Ouça agora <ArrowRight size={18} className="ml-2" />
</a>

              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Associação Conviver */}
      <FadeInSection delay={0.2}>
        <section className="py-16 bg-gray-50" id="conviver">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="bg-white p-1 rounded-xl shadow-lg">
                  <img
                    src="assets/gallery-02.jpg"
                    alt="Associação Conviver"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="text-pink-500" size={28} />
                  <h2 className="text-3xl font-bold text-gray-800">Associação Conviver</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Uma iniciativa dedicada ao apoio e desenvolvimento de crianças com necessidades
                  especiais, oferecendo suporte, recursos e um ambiente acolhedor para que possam
                  alcançar seu pleno potencial.
                </p>
                <div className="bg-white p-5 rounded-lg border border-gray-100 mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Nossa Missão</h3>
                  <p className="text-gray-600">
                    Proporcionar um ambiente inclusivo e estimulante onde cada criança é valorizada e
                    recebe o apoio necessário para seu desenvolvimento físico, emocional e social.
                  </p>
                </div>
                <Link
                  to="/about#conviver"
                  className="inline-flex items-center text-pink-500 hover:text-pink-700 font-medium"
                >
                  Saiba mais sobre o projeto <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Latest Blog Posts */}
      <FadeInSection delay={0.3}>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <BookOpen className="text-pink-500" size={28} />
                <h2 className="text-3xl font-bold text-gray-800">Blog</h2>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center text-pink-500 hover:text-pink-700 font-medium"
              >
                Ver todos os posts <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestPosts.length > 0 ? (
                  latestPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      {post.image_url && (
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">{post.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-pink-500 hover:text-pink-700 font-medium"
                        >
                          Ler mais <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-12">
                    <p className="text-gray-500">Nenhum post encontrado. Volte em breve!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </FadeInSection>

      {/* Call to Action */}
      <FadeInSection delay={0.4}>
        <motion.section
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg mx-4 my-8"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Vamos trabalhar juntos?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato para colaborações, palestras ou para saber mais sobre a Associação
              Conviver.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-pink-500 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Entre em contato
            </Link>
          </div>
        </motion.section>
      </FadeInSection>
    </div>
  );
};

export default Home;
