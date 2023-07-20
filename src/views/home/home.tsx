import './home.css';
import { Link } from 'react-router-dom';
import Page from '@components/page/page.tsx';

const Home = () => {
    return (
        <Page title='Home'>
            <div className='tile-container'>
                <Link to={"communities"} className='tile'>Communities</Link>
                <Link to={"my-data"} className='tile'>My Data</Link>
                <Link to={"settings"} className='tile'>Settings</Link>
            </div>
        </Page>
    );
};

export default Home;