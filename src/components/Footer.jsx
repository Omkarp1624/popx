// src/components/Footer.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import new icons
import styles from '../styles/Footer.module.css'; // Make sure this path is correct

const pages = ['/', '/login', '/signup', '/profile'];

const Footer = () => {
  const location = useLocation();
  const currentPageIndex = pages.indexOf(location.pathname);
  const totalPages = pages.length;

  // Determine the paths for the previous and next pages
  const prevPage = currentPageIndex > 0 ? pages[currentPageIndex - 1] : '#';
  const nextPage = currentPageIndex < totalPages - 1 ? pages[currentPageIndex + 1] : '#';

  // Check if the page is part of the main flow
  if (currentPageIndex === -1) {
    return null; // Don't show the footer on unknown pages
  }

  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.homeIcon}>
        <FaHome size={24} />
      </Link>

      <div className={styles.pageCounter}>
        <Link
          to={prevPage}
          className={`${styles.arrow} ${currentPageIndex === 0 ? styles.disabled : ''}`}
        >
          <FaChevronLeft />
        </Link>

        <span className={styles.counterText}>
          {currentPageIndex + 1} of {totalPages}
        </span>

        <Link
          to={nextPage}
          className={`${styles.arrow} ${currentPageIndex === totalPages - 1 ? styles.disabled : ''}`}
        >
          <FaChevronRight />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;