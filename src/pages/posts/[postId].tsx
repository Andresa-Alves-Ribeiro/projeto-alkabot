import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import ColumnLeft from '@/components/columnLeft/columnRight';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Newsletter from '@/components/newsletter/newsletter';

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
                <p className='date-post'>1 year ago in Journey</p>
                <h1 className="card-title card-header">{post.title}</h1>
                <img src="https://picsum.photos/680/511" alt={post.title} className="post-image" />
                <div className="card-body">
                    <p className="post-body small-text">{post.body}</p>
                </div>

                <h2 className='comment-title'>{comments.length} Comments</h2>

                {comments.map((comment) => (
                    <div key={comment.id} className="comments">
                        <div>
                            <div className='users-comments'>
                                <img className="me-3 rounded-circle" src="https://picsum.photos/200?grayscale&category=people" alt="user" width="100" height="100" />
                                <h6>{comment.email}</h6>
                            </div>
                        </div>
                        <div className="comment-body">
                            <p className="comment-text">{comment.body}</p>
                            <p className='time-ago'>1 year ago</p>
                            <a className='float-end'>
                                <svg className="svg-inline--fa fa-reply fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="reply" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"></path></svg>
                                <span>Reply</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <ColumnLeft />

            <Newsletter />

            <Footer />
        </div>

    );
};

export default PostPage;