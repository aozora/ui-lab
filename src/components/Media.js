import React from 'react';
import styles from './Media.module.scss';

const Media = () => {
  return (
    <div className={styles.MediaContainer}>
      <article className={styles.Media}>
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcSet="
/media/pexels-gabriel-crişan-2119953_uq92wr_c_scale,w_320.jpg 320w,
/media/pexels-gabriel-crişan-2119953_uq92wr_c_scale,w_977.jpg 977w,
/media/pexels-gabriel-crişan-2119953_uq92wr_c_scale,w_1400.jpg 1400w"
          src="/media/pexels-gabriel-crişan-2119953_uq92wr_c_scale,w_1400.jpg.jpg"
          alt=""
        />
      </article>

      <article className={styles.Media}>
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcSet="
/media/pexels-charles-pragnell-2524164_sjhz9v_c_scale,w_320.jpg 320w,
/media/pexels-charles-pragnell-2524164_sjhz9v_c_scale,w_1087.jpg 1087w,
/media/pexels-charles-pragnell-2524164_sjhz9v_c_scale,w_1400.jpg 1400w"
          src="/media/pexels-charles-pragnell-2524164_sjhz9v_c_scale,w_1400.jpg"
          alt=""
        />
      </article>

      <article className={styles.Media}>
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcSet="
/media/pexels-kirsten-bu%CC%88hne-1521304_sl7lyr_c_scale,w_320.jpg 320w,
/media/pexels-kirsten-bu%CC%88hne-1521304_sl7lyr_c_scale,w_967.jpg 967w,
/media/pexels-kirsten-bu%CC%88hne-1521304_sl7lyr_c_scale,w_1400.jpg 1400w"
          src="/media/pexels-kirsten-bu%CC%88hne-1521304_sl7lyr_c_scale,w_1400.jpg"
          alt=""
        />
      </article>

      <article className={styles.Media}>
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcSet="
/media/pexels-mermek-am-1573324_qhspye_c_scale,w_320.jpg 320w,
/media/pexels-mermek-am-1573324_qhspye_c_scale,w_1170.jpg 1170w,
/media/pexels-mermek-am-1573324_qhspye_c_scale,w_1400.jpg 1400w"
          src="/media/pexels-mermek-am-1573324_qhspye_c_scale,w_1400.jpg"
          alt=""
        />
      </article>

      <article className={styles.Media}>
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcSet="
/media/pexels-pixabay-57416_mogsye_c_scale,w_320.jpg 320w,
/media/pexels-pixabay-57416_mogsye_c_scale,w_991.jpg 991w,
/media/pexels-pixabay-57416_mogsye_c_scale,w_1400.jpg 1400w"
          src="/media/pexels-pixabay-57416_mogsye_c_scale,w_1400.jpg"
          alt=""
        />
      </article>

      <article className={styles.Media}>
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcSet="
/media/pexels-pixabay-357141_krjb5x_c_scale,w_320.jpg 320w,
/media/pexels-pixabay-357141_krjb5x_c_scale,w_1021.jpg 1021w,
/media/pexels-pixabay-357141_krjb5x_c_scale,w_1400.jpg 1400w"
          src="/media/pexels-pixabay-357141_krjb5x_c_scale,w_1400.jpg"
          alt=""
        />
      </article>
    </div>
  );
};

export default Media;
