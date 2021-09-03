import style from "./Aside.module.css";
import NavigationAside from "./infoBlock/NavigationAside";
import DirectoryAside from "./infoBlock/DirectoryAside";
import LearningAside from "./infoBlock/LearningAside";

const Aside = () => {
  return (
    <div className={style.asideBar}>
      <NavigationAside />
      <DirectoryAside />
      <LearningAside />
    </div>
  );
};

export default Aside;
