import { useEffect } from 'react';
import Navbar from './Navbar';
import axiosClient from '../utils/axiosInstance';

const Feeds = () => {
  // let mountRef = useRef(false);

  useEffect(() => {
    // if (mountRef.current === true) {
      const getFeeds = async () => {
        try {
          const response = await axiosClient.get('/posts');
          console.log(response?.data);
        } catch (error) {
          console.error(error);
        }
      };
      getFeeds();
    // }
    // return () => (mountRef.current = true);
  }, []);

  return (
    <section className="feeds">
      <Navbar />
      <div className="posts">
        <p>this is my first post</p>
        <p>Isaiah</p>
      </div>
    </section>
  );
};

export default Feeds;
