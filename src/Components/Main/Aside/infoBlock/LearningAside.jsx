import style from "./FirstBlock.module.css";

const LearningAside = () => {
  return (
    <div className={style.firstBlock}>
      <div className={style.firstBlock__title}>Learning</div>
      <ul>
        <li>
          <a href="#">Audio Lessons</a>
        </li>
        <li>
          <a href="#">Best Calls</a>
        </li>
        <li>
          <a href="#">Video Trainings</a>
        </li>
        <li>
          <a href="#">Sabre Training</a>
        </li>
        <li>
          <a href="#">Internal Trainings </a>
        </li>
        <li>
          <a href="#">Articles about Sales</a>
        </li>
        <li>
          <a href="#">Books about Sales</a>
        </li>
        <li>
          <a href="#">Movies about Sales</a>
        </li>
        <li>
          <a href="#">Motivational Movies</a>
        </li>
      </ul>
    </div>
  );
};

export default LearningAside;
