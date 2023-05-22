import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import axiosClient from '../utils/axiosInstance';

const Feeds = () => {
  let mountRef = useRef(false);
  const [data, setData] = useState({});

  useEffect(() => {
    if (mountRef.current === true) {
      const getFeeds = async () => {
        try {
          const response = await axiosClient.get('/posts');
          setData(response?.data);
        } catch (error) {
          console.error(error);
        }
      };
      getFeeds();
    }
    return () => (mountRef.current = true);
  }, []);

  return (
    <section className="feeds">
      <Navbar />
      <div className="posts">
        {data?.data?.posts.map((post, i) => {
          return (
            <div key={i}>
              <p>{post.comment}</p>
              <p>{post.author}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feeds;
