import { useState, useEffect } from 'react';
import "../styles/Home.module.css"

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
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

  useEffect(() => {
    async function fetchData() {
      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const postsData = await postsResponse.json();
      setPosts(postsData);

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
      <h1>Posts</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {' '}
            <button onClick={() => setSelectedPost(post.id)}>Comments</button>
            {selectedPost === post.id && (
              <>
                <div>
                  {comments.map((comment) => (
                    comment.postId === post.id && (
                      <div key={comment.id}>
                        <p>
                          {users.find((user) => user.id === comment.userId)?.name}
                          {' - '}
                          {comment.email}
                        </p>
                        <h4>{comment.name}</h4>
                        <p>{comment.body}</p>
                      </div>
                    )
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
