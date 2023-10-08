import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom';
import { AuthProvider, useAuthContext } from '../Contexts/AuthContext';

import HomeScreen from '../Features/Home/DefaultScreen';
import LoginScreen from '../Features/Login/DefaultScreen';
import UsersScreen from '../Features/Users/DefaultScreen';

const AppRoute = () => {

    const Private = ({ children }: { children: JSX.Element }) => {
        const { authenticated, loading } = useAuthContext()

        if (loading) return <p>carregando...</p>

        return authenticated ? children : <Navigate to={'/login'} />
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/home" element={<Private><HomeScreen /></Private>} />
                    <Route path="/users" element={<Private><UsersScreen /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoute;