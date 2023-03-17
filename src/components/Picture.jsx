import styles from "./css/Picture.module.css";

import background from "../images/readme/wireframe mvp.png";

const Picture = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={background} />
        <img src={background} alt="background" />
      </picture>
      <h1 className={styles.header}>React Is Awesome</h1>
    </article>
  );
};

export default Picture;
