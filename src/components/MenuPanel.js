/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, useMemo } from 'react';
import gsap from 'gsap';
import styles from './MenuPanel.module.scss';
import { useAppState } from '../AppContext';

const clearOpacity = node => {
  gsap.set(node, { clearProps: 'opacity, visibility' });
};

const MenuPanel = () => {
  const { menuIsOpen } = useAppState();
  const menuPanelRef = useRef();
  const menuToRevealAndStagger = useRef();
  const content1ToReveal = useRef();

  const timeline = useMemo(() => {
    return gsap.timeline({ paused: true });
  }, []);

  useEffect(() => {
    // animate menu panel
    timeline.fromTo(
      menuPanelRef.current,
      {
        x: '-100%',
        zIndex: -1
      },
      {
        x: 0,
        zIndex: 10,
        duration: 1.2,
        ease: 'expo.inOut'
      }
    );

    // animate menu links
    const elements = menuToRevealAndStagger.current.querySelectorAll('li');
    timeline.fromTo(
      elements,
      {
        autoAlpha: 0,
        x: '-50px',
        y: '0%'
      },
      {
        autoAlpha: 1,
        x: '0%',
        y: '0%',
        duration: 0.7,
        stagger: 0.05,
        onComplete() {
          clearOpacity(elements);
        }
      }
    );

    // animate content 1
    const contents = content1ToReveal.current.querySelectorAll('*');
    timeline.fromTo(
      contents,
      {
        x: '-100%'
      },
      {
        x: 0,
        duration: 0.5
      },
      '<'
    );
  }, [timeline]);

  useEffect(() => {
    if (menuPanelRef.current) {
      if (menuIsOpen) {
        timeline.play();
      } else {
        timeline.reverse();
      }
    }
  }, [menuPanelRef, menuIsOpen, timeline]);

  return (
    <section ref={menuPanelRef} className={`${styles.MenuPanel} ${menuIsOpen ? styles.MenuPanelIsOpen : ''}`}>
      <header>
        <nav>
          <ul ref={menuToRevealAndStagger}>
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
        <aside ref={content1ToReveal}>
          <h6>Lorem ipsum sin ut dolorem</h6>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </aside>
      </header>
    </section>
  );
};

export default MenuPanel;
