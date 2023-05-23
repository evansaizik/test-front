import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axiosClient from '../utils/axiosInstance';

const Feeds = () => {
  const [data, setData] = useState([]);

  const getFeeds = async () => {
    try {
      const response = await axiosClient.get('api/v1/posts');
      setData(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFeeds();
  }, []);

  return (
    <section className="feeds">
      <Navbar />
      <button onClick={() => getFeeds()}>Refresh Posts</button>
      <div className="posts">
        {data?.posts?.length > 0
          ? data.posts.map((post, i) => {
              return (
                <div key={i}>
                  <p>{post.comment}</p>
                  <p>{post.author}</p>
                </div>
              );
            })
          : 'no post found'}
      </div>
    </section>
  );
};

export default Feeds;
