import style from "./FirstBlock.module.css";

const DirectoryAside = () => {
  return (
    <div className={style.firstBlock}>
      <div className={style.firstBlock__title}>Directory</div>
      <ul>
        <li>
          <a href="#">What the f### ??</a>
        </li>
        <li>
          <a href="#">Our Teams</a>
        </li>
        <li>
          <a href="#">Books</a>
        </li>
        <li>
          <a href="#">Instructions</a>
        </li>
        <li>
          <a href="#">AirCompany's Checkout </a>
        </li>
        <li>
          <a href="#">Learning from mistakes</a>
        </li>
        <li>
          <a href="#">On-line Check-In</a>
        </li>
        <li>
          <a href="#">Advice & Tricks</a>
        </li>
      </ul>
    </div>
  );
};

export default DirectoryAside;
