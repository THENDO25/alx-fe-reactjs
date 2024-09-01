import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

const PostsComponent = () => {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery(
    'posts', // key
    fetchPosts, // function to fetch data
    {
      // Options
      cacheTime: 10000, // cache for 10 seconds
      staleTime: 30000, // consider data stale after 30 seconds
      refetchOnWindowFocus: true, // refetch when window regains focus
      keepPreviousData: true, // keep previous data while refetching
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default PostsComponent