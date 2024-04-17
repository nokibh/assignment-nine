import UseAuth from '../Hooks/UseAuth';
import Login from '../Login/Login';

const PrivateRoute = ({ children }) => {
  const { user } = UseAuth();

  if (!user) {
    return <Login></Login>;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
