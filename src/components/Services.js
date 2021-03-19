import React, { useEffect, useRef } from 'react';
import styles from './Services.module.scss';
import gsap from 'gsap';
import servicesStyles from './Services.module.scss';

const Services = () => {
  const servicesRef = useRef();

  useEffect(() => {
    if (servicesRef.current) {
      gsap.to(servicesRef.current, {
        scrollTrigger: {
          trigger: servicesRef.current,
          pin: false, // pin the trigger element while active
          start: 'top center', // when the top of the trigger hits the bottom of the viewport
          end: 'bottom top', // end after scrolling 500px beyond the start
          // toggleClass: servicesStyles.ThemeDark,
          toggleClass: { targets: 'body', className: 'theme-dark' /*servicesStyles.ThemeDark */ },
          markers: true
        }
      });
    }
  }, []);

  return (
    <article ref={servicesRef} className={styles.Services}>
      <div>
        <h1>Lorem Ipsum sin ut dolorem</h1>
        <footer>
          <p>Vero omnis sed recusandae voluptas repellat in omnis. Et maiores cumque incidunt voluptatum est.</p>
          <p>Vero omnis sed recusandae voluptas repellat in omnis. Et maiores cumque incidunt voluptatum est.</p>
          <p>Vero omnis sed recusandae voluptas repellat in omnis. Et maiores cumque incidunt voluptatum est.</p>
        </footer>
      </div>
    </article>
  );
};

export default Services;
