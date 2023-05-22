import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Feeds from './components/Feeds';
import axiosClient from './utils/axiosInstance';

function App() {
  const navigate = useNavigate();

  const requestLogin = async (val) => {
    try {
      const response = await axiosClient.post('api/v1/users/login', val);
      console.log(response.data); //accessToken
      localStorage.setItem('accessToken', response.data.accessToken);
      navigate('/feeds');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Login requestLogin={requestLogin} />} />
      <Route path="/feeds" element={<Feeds />} />
    </Routes>
  );
}

export default App;
