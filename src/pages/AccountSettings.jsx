import styles from '../styles/AccountSettings.module.css';
import profilePic from '../assets/profile-pic.png';

const AccountSettings = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Account Settings</h2>
      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <img src={profilePic} alt="Profile" className={styles.profileImage} />
          <div className={styles.profileInfo}>
            <p className={styles.name}>Marry Doe</p>
            <p className={styles.email}>Marry@Gmail.com</p>
          </div>
        </div>
        <p className={styles.description}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;