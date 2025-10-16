import { Link } from 'react-router-dom';
import styles from '../styles/Welcome.module.css';

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to PopX</h1>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <div className={styles.buttons}>
        <Link to="/signup" className={styles.createBtn}>Create Account</Link>
        <Link to="/login" className={styles.loginBtn}>Already Registered? Login</Link>
      </div>
    </div>
  );
};

export default Welcome;