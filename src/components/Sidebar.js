import React from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <button type="button" className={styles.SidebarBurger}>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Sidebar;
