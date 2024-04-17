import UseAuth from '../Hooks/UseAuth';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa6';
const Google = () => {
  const { googleLogin, githubLogin } = UseAuth();
  const handleGoogleLogin = () => {
    googleLogin()
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then(res => console.log(res))
      .catch(error => console.log(error));
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
