import React from 'react';
import styles from './Sidebar.module.scss';
import { useAppState } from '../AppContext';

const Sidebar = () => {
  const { state, dispatch } = useAppState();

  return (
    <div className={`${styles.Sidebar} ${state.menuIsOpen ? styles.SidebarIsOpen : ''}`}>
      <div></div>
      <button type="button" className={styles.SidebarBurger} onClick={() => dispatch({ type: 'toggleMenu' })}>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Sidebar;
