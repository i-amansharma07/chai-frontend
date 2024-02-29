import { Routes, Route } from 'react-router-dom';
import Login from "../pages/open/Login";
import Register from '../pages/open/Register';
import NotFoundPage from '../pages/NotFoundPage';

const OpenRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFoundPage />}/>
        </Routes>
    );
};

export default OpenRoutes;