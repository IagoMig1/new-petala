import { createClient } from '@supabase/supabase-js';
// Replace with your Supabase URL and anon key
const supabaseUrl = 'https://yxjvxlwyvjntgihpxbsi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4anZ4bHd5dmpudGdpaHB4YnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMDIwNTgsImV4cCI6MjA2Mzc3ODA1OH0.NGMw_v6uYVffaqd3Jh_T_CP-ggAxSJryGc0kqDXqFhE';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export interface BlogPost {
  id: number;
  title: string;
  content: string;
  image_url: string;
  excerpt: string;
  created_at: string;
  updated_at: string;
  published: boolean;
}
export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image_url: string;
  link?: string;
  category: string;
}
// Blog post functions
export async function getPosts(isPublishedOnly = true) {
  const query = supabase.from('posts').select('*').order('created_at', {
    ascending: false
  });
  if (isPublishedOnly) {
    query.eq('published', true);
  }
  const {
    data,
    error
  } = await query;
  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
  return data as BlogPost[];
}
export async function getPost(id: string) {
  const {
    data,
    error
  } = await supabase.from('posts').select('*').eq('id', id).single();
  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }
  return data as BlogPost;
}
export async function createPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) {
  const {
    data,
    error
  } = await supabase.from('posts').insert([{
    ...post,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }]).select();
  if (error) {
    console.error('Error creating post:', error);
    return null;
  }
  return data?.[0] as BlogPost;
}
export async function updatePost(id: string, post: Partial<BlogPost>) {
  const {
    data,
    error
  } = await supabase.from('posts').update({
    ...post,
    updated_at: new Date().toISOString()
  }).eq('id', id).select();
  if (error) {
    console.error('Error updating post:', error);
    return null;
  }
  return data?.[0] as BlogPost;
}
export async function deletePost(id: string) {
  const {
    error
  } = await supabase.from('posts').delete().eq('id', id);
  if (error) {
    console.error('Error deleting post:', error);
    return false;
  }
  return true;
}
// Portfolio functions
export async function getPortfolioItems() {
  const {
    data,
    error
  } = await supabase.from('portfolio').select('*').order('id', {
    ascending: true
  });
  if (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }
  return data as PortfolioItem[];
}
// Authentication functions
export async function signIn(email: string, password: string) {
  const {
    data,
    error
  } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  return {
    data,
    error
  };
}
export async function signOut() {
  const {
    error
  } = await supabase.auth.signOut();
  return {
    error
  };
}
export async function getUser() {
  const {
    data
  } = await supabase.auth.getUser();
  return data?.user;
}