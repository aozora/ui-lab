import React, { useRef, useEffect, useMemo } from 'react';
import gsap from 'gsap';
import styles from './MenuPanel.module.scss';
import { useAppState } from '../AppContext';

const MenuPanel = () => {
  const { state } = useAppState();
  const menuPanelRef = useRef();

  const timeline = useMemo(() => {
    return gsap.timeline({ paused: true });
  }, []);

  useEffect(() => {
    timeline.fromTo(
      menuPanelRef.current,
      {
        x: '-100%'
        // y: 0
      },
      {
        x: 0,
        // y: 0,
        duration: 1.2,
        ease: 'expo.inOut'
      }
    );
  }, [timeline]);

  useEffect(() => {
    if (menuPanelRef.current) {
      if (state.menuIsOpen) {
        timeline.play();
      } else {
        timeline.reverse();
      }
    }
  }, [menuPanelRef, state.menuIsOpen, timeline]);

  return (
    <section ref={menuPanelRef} className={`${styles.MenuPanel} ${state.menuIsOpen ? styles.MenuPanelIsOpen : ''}`}>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default MenuPanel;
