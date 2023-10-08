import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userType } from "../Commons/types";
import { API, Authenticate } from "../Services/BaseAPI";

type contextPropsType = {
    authenticated: boolean,
    loading: boolean,
    user?: object,
    authenticate: (username: string, password: string) => object,
    logout: () => void
};

type authResponseType = {
    token: string,
    user: userType,
}

const AuthContext = createContext<contextPropsType>({} as contextPropsType);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState<object>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const tryRecoverData = async () => {
            const recoveredUser = localStorage.getItem('user');
            const recoveredToken = localStorage.getItem('token');

            if (recoveredUser && recoveredToken) {
                setUser(JSON.parse(recoveredUser));
                API.defaults.headers.Authorization = 'Bearer ' + recoveredToken;
            } else {
                navigate('/login');
            }
            await setLoading(false);
        }
        tryRecoverData();
    }, [])

    const authenticate = (username: string, password: string) => {
        Authenticate(username, password)
            .then((response) => {
                if (response.statusCode == 200) {

                    const { user, token } = response.data as authResponseType
                    setUser(user);

                    API.defaults.headers.Authorization = `Bearer " + ${token}`;
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('token', JSON.stringify(token));

                    setLoading(false);
                    navigate('/home');
                }
            })
        return {};
    }

    const logout = () => {
        setUser(null);
        API.defaults.headers.Authorization = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setLoading(false);
    }

    return (
        <AuthContext.Provider
            value={{
                authenticated: !!user,
                loading,
                user,
                authenticate,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthContextProvider');
    }
    return context;
};

export {
    AuthProvider, useAuthContext
};

