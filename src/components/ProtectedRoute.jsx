import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import AuthProvider from '../../context/AuthContext';
import AuthProvider from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { useAuth } = AuthProvider;
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
