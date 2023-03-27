export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  imageUrl: string;
}

export interface Comment {
  id: number;
  userId: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const imageSizes = [
  { width: 500, height: 700 },
  { width: 500, height: 334 },
  { width: 500, height: 600 },
];

const api = {
  fetchPosts: async (): Promise<Post[]> => {
      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const postsData = await postsResponse.json();
      const updatedPostsData = postsData.map((post: Post, index: number) => ({
          ...post,
          imageUrl: `https://picsum.photos/seed/${post.id}/${imageSizes[index % imageSizes.length].width}/${imageSizes[index % imageSizes.length].height}`,
      }));
      return updatedPostsData;
  },

  fetchUsers: async (): Promise<User[]> => {
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const usersData = await usersResponse.json();
      return usersData;
  },

  fetchComments: async (postId: number): Promise<Comment[]> => {
      const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      const commentsData = await commentsResponse.json();
      return commentsData;
  }
};

export default api;