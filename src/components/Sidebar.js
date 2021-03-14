import React from 'react';
import styles from './Sidebar.module.scss';
import { useAppDispatch, useAppState } from '../AppContext';

const Sidebar = () => {
  const { menuIsOpen } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <div className={`${styles.Sidebar} ${menuIsOpen ? styles.SidebarIsOpen : ''}`}>
      <button type="button" className={styles.SidebarBurger} onClick={() => dispatch({ type: 'toggleMenu' })}>
        <span />
        <span />
      </button>
    </div>
  );
};

export default Sidebar;
