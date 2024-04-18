import UseAuth from '../Hooks/UseAuth';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Google = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || '/';
  const { googleLogin, githubLogin } = UseAuth();
  const handleGoogleLogin = () => {
    toast('Wow logIn successfully');
    googleLogin().then(result => {
      if (result.user) {
        navigate(form);
      }
    });
  };

  const handleGithubLogin = () => {
    githubLogin().then(result => {
      if (result.user) {
        navigate(form);
      }
    });
  };
  return (
    <div>
      <div className="flex gap-8 text-2xl ml-14 mb-3 mt-2">
        <button onClick={handleGoogleLogin}>
          <FcGoogle></FcGoogle>
          <ToastContainer />
        </button>
        <button onClick={handleGithubLogin}>
          <FaGithub></FaGithub>
          <ToastContainer />
        </button>
      </div>
    </div>
  );
};

export default Google;
