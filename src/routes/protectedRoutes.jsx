import { Routes, Route } from 'react-router-dom';
import Home from '../pages/protected/Home'
import Profile from '../pages/protected/Profile'
import Logout from '../pages/protected/Logout'
import NotFoundPage from '../pages/NotFoundPage';

const protectedRoutes = () => {
    return (
        <Routes>
            <Route path= '/' element={<Home />}/>
            <Route path='/Profile' element={<Profile />}/>
            <Route path='/logout' element={<Logout />}/>
            <Route path='*' element={<NotFoundPage />}/>
        </Routes>
    )
}

export default protectedRoutes