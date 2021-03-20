import React, { useEffect, useRef } from 'react';
import styles from './Services.module.scss';
import gsap from 'gsap';

const Services = () => {
  const servicesRef = useRef();
  const p1Ref = useRef();
  const p2Ref = useRef();
  const p3Ref = useRef();

  useEffect(() => {
    if (servicesRef.current) {
      gsap.fromTo(
        [p1Ref.current, p2Ref.current, p3Ref.current],
        {
          autoAlpha: 0,
          y: '150%'
        },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          stagger: 0.5,
          ease: 'circ.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top center', // when the top of the trigger hits the bottom of the viewport
            end: 'bottom center', // end when the bottom of the trigger hits the top of the viewport
            toggleClass: { targets: 'body', className: 'theme-dark' }
            // markers: true
          }
        }
      );
    }
  }, []);

  return (
    <article ref={servicesRef} className={styles.Services}>
      <div>
        <h1>Lorem Ipsum sin ut dolorem</h1>
        <footer>
          <p ref={p1Ref}>Vero omnis sed recusandae voluptas repellat in omnis. Et maiores cumque incidunt voluptatum est.</p>
          <p ref={p2Ref}>Vero omnis sed recusandae voluptas repellat in omnis. Et maiores cumque incidunt voluptatum est.</p>
          <p ref={p3Ref}>Vero omnis sed recusandae voluptas repellat in omnis. Et maiores cumque incidunt voluptatum est.</p>
        </footer>
      </div>
    </article>
  );
};

export default Services;
