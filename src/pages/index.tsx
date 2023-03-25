import ColumnLeft from '@/components/columnLeft/columnLeft';
import Header from '@/components/header/header';
import { useState, useEffect } from 'react';
import "../styles/Home.module.css"

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  imageUrl: string;
}

interface Comment {
  id: number;
  userId: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [showOtherPosts, setShowOtherPosts] = useState(true);

  const imageSizes = [
    { width: 500, height: 700 },
    { width: 500, height: 334 },
    { width: 500, height: 600 },
    // adicione mais tamanhos aqui, se desejar
  ];

  useEffect(() => {
    async function fetchData() {
      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const postsData = await postsResponse.json();
      const updatedPostsData = postsData.map((post: Post, index: number) => ({
        ...post,
        imageUrl: `https://picsum.photos/seed/${post.id}/${imageSizes[index % imageSizes.length].width}/${imageSizes[index % imageSizes.length].height}`,
      }));
      setPosts(updatedPostsData);

      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const usersData = await usersResponse.json();
      setUsers(usersData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchComments() {
      if (selectedPost !== null) {
        const commentsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${selectedPost}/comments`
        );
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      }
    }
    fetchComments();
  }, [selectedPost]);

  return (
    <div className="container">
      <Header />

      <div className="col-left">
        {posts.map((post) => (
          <div className="card mb-4" key={post.id}>
            <h2 className="card-title card-header">{post.title}</h2>
            <a>
              <img src={post.imageUrl} alt={post.title} className="post-cover-image" />
            </a>
            <div className="card-body">
              <p className="post-body small-text">{post.body}</p>
            </div>
            <a href={`/posts/${encodeURIComponent(post.id)}`} className="button">
              Comments
            </a>
          </div>
        ))}
      </div>

      <ColumnLeft />

      <div className='newsletter'>
        <h3 className='title-newsletter'>Subscribe to Newsletter</h3>
        <p className="text-muted">Join our monthly newsletter and never miss out on new stories and promotions.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <footer className='site-footer bg-dark'>
        <div className='container line-footer'>
          <ul className='nav justify-content-center'>
            <li className='nav-item'>
              <p className='nav-link'>Privacy policy</p>
            </li>
            <li className='nav-item'>
              <p className='nav-link'> Terms</p>
            </li>
            <li className='nav-item'>
              <p className='nav-link'>Feedback</p>
            </li>
            <li className='nav-item'>
              <p className='nav-link'>Advertise</p>
            </li>
            <li className='nav-item '>
              <p className='contact-line'>Contact</p>
            </li>
          </ul>
        </div>

        <div className='site-footer copy'>
          © Alfabot 2023
          <br></br>
          All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Posts;
