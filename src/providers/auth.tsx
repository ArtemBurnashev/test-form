/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../layouts/pages-routes/public-routes';
import authService from '../services/auth.service';
import tokenService from '../services/token.service';

interface IAuthState {
	isAuthenticated: boolean;
	setAuth: (state: boolean) => void;
}

const initialState: IAuthState = {
	isAuthenticated: !!tokenService.getToken(),
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setAuth(state) {},
};

const AuthContext = React.createContext<IAuthState>(initialState);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = React.useState(initialState.isAuthenticated);
	const navigate = useNavigate()
	React.useEffect(() => {
		const token = tokenService.getToken();

		if (token) {
			setIsAuthenticated(true);
		}

		authService.on('logout', () => {
			setIsAuthenticated(false);
			navigate('/auth');
		});
		return () => {
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			authService.removeListener('logout', () => {});
		};
	}, []);

	return (
		<AuthContext.Provider value={{ isAuthenticated, setAuth: setIsAuthenticated }}>
			{isAuthenticated ? children : <PublicRoutes />}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const authContext = React.useContext(AuthContext);
	if (!authContext) {
		throw new Error('useAuth context is not wrapped with AuthProvider');
	}
	return authContext;
};
 */