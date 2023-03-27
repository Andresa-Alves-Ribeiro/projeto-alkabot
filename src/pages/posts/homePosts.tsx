import { useState, useEffect } from 'react';
import api, { Post, Comment, User } from '../../api/api'

const HomePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedPost, setSelectedPost] = useState<number | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [showOtherPosts, setShowOtherPosts] = useState(true);

    useEffect(() => {
        async function fetchData() {
          const postsData = await api.fetchPosts();
          setPosts(postsData);
    
          const usersData = await api.fetchUsers();
          setUsers(usersData);
        }
        fetchData();
      }, []);
    
      useEffect(() => {
        async function fetchSelectedPostComments() {
          if (selectedPost !== null) {
            const commentsData = await api.fetchComments(selectedPost);
            setComments(commentsData);
          }
        }
        fetchSelectedPostComments();
      }, [selectedPost]);

    return (
        <div>
            <div className="col-left">
                {posts.map((post) => (
                    <div className="card mb-4" key={post.id}>
                        <a href={`/posts/${encodeURIComponent(post.id)}`}>
                            <h2 className="card-title card-header">{post.title}</h2>
                        </a>

                        <a href={`/posts/${encodeURIComponent(post.id)}`}>
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
        </div>
    )
}

export default HomePosts