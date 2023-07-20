import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link className='title' to='/'>Habitat</Link>
        </nav>
    );
};

export default Navbar;