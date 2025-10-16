import { Link } from 'react-router-dom';
import formStyles from '../styles/Form.module.css';

const Login = () => {
  return (
    <div className={formStyles.container}>
      <h2 className={formStyles.title}>Signin to your PopX account</h2>
      <p className={formStyles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <form>
        <div className={formStyles.inputGroup}>
          <input type="email" id="email" required placeholder=" " />
          <label htmlFor="email">Email Address</label>
        </div>
        <div className={formStyles.inputGroup}>
          <input type="password" id="password" required placeholder=" "/>
          <label htmlFor="password">Password</label>
        </div>
        <Link to="/profile" className={formStyles.submitBtn}>Login</Link>
      </form>
    </div>
  );
};

export default Login;