import { Link } from 'react-router-dom';
import formStyles from '../styles/Form.module.css';

const Signup = () => {
  return (
    <div className={formStyles.container}>
      <h2 className={formStyles.title}>Create your PopX account</h2>
      <form>
        <div className={formStyles.inputGroup}>
          <input type="text" id="fullName" required placeholder=" "/>
          <label htmlFor="fullName">Full Name*</label>
        </div>
        <div className={formStyles.inputGroup}>
          <input type="tel" id="phone" required placeholder=" "/>
          <label htmlFor="phone">Phone number*</label>
        </div>
        <div className={formStyles.inputGroup}>
          <input type="email" id="email" required placeholder=" "/>
          <label htmlFor="email">Email address*</label>
        </div>
        <div className={formStyles.inputGroup}>
          <input type="password" id="password" required placeholder=" "/>
          <label htmlFor="password">Password*</label>
        </div>
        <div className={formStyles.inputGroup}>
          <input type="text" id="company" placeholder=" "/>
          <label htmlFor="company">Company name</label>
        </div>
        <div className={formStyles.radioGroup}>
          <p>Are you an Agency?*</p>
          <input type="radio" id="yes" name="agency" value="Yes" />
          <label htmlFor="yes">Yes</label>
          <input type="radio" id="no" name="agency" value="No" />
          <label htmlFor="no">No</label>
        </div>
        <Link to="/profile" className={formStyles.submitBtn} style={{marginTop: '20px'}}>Create Account</Link>
      </form>
    </div>
  );
};

export default Signup;