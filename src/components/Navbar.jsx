import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='title'>User Access</div>
      <div className='nav'>
        <Link to={'/'}>home</Link>
        <button className='btn-logout'>logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
