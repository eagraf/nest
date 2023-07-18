import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (<div className='tile-container'>
        <Link to={"communities"} className='tile'>Communities</Link>
        <Link to={"my-data"} className='tile'>My Data</Link>
        <Link to={"settings"} className='tile'>Settings</Link>
    </div>);
};

export default Home;