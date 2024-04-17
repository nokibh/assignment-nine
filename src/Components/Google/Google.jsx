import UseAuth from '../Hooks/UseAuth';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
const Google = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || '/';
  const { googleLogin, githubLogin } = UseAuth();
  const handleGoogleLogin = () => {
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
        </button>
        <button onClick={handleGithubLogin}>
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default Google;
