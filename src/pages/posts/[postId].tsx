import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Header from '@/components/header/header';

interface PostData {
    id: number;
    title: string;
    body: string;
    imageUrl: string;
}

interface CommentData {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

interface PostProps {
    post: PostData;
    comments: CommentData[];
}

export const getStaticPaths: GetStaticPaths = async () => {
    // Busca a lista de posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    // Cria os caminhos para cada post
    const paths = posts.map((post: PostData) => ({
        params: { postId: post.id.toString() },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
    const postId = params?.postId;

    // Busca o post pelo id
    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post: PostData = await postRes.json();

    // Busca os comentários do post
    const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const comments: CommentData[] = await commentsRes.json();

    return {
        props: {
            post,
            comments,
        },
    };
};

const PostPage: React.FC<PostProps> = ({ post, comments }) => {
    const router = useRouter();

    // Renderiza uma mensagem de carregamento enquanto os dados são carregados
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container'>
            <Header />
            <div className="post-page">
            <h1 className="card-title card-header">{post.title}</h1>
            <img src="https://picsum.photos/680/511" alt={post.title} className="post-cover-image" />
            <div className="card-body">
              <p className="post-body small-text">{post.body}</p>
            </div>

            <h2>Comments</h2>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <p className="comment-name">{comment.name}</p>
                    <p>{comment.email}</p>
                    <p className="comment-body">{comment.body}</p>
                </div>
            ))}
        </div>
        </div>
        
    );
};

export default PostPage;