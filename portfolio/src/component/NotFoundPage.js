import { Link } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext';
import '../NotFound.css';

const NotFoundPage = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    return (
         <div className={`not-found ${isDarkMode ? 'dark-mode' : 'light-mode'}`}> 
         <h1 className="top-header">404 Not Found</h1> 
        <Link to="/"> Click Here to go back to Home </Link>
         </div>
    );
}

export default NotFoundPage;