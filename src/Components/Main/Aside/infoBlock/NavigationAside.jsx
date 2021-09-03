import style from "./FirstBlock.module.css";

const NavigationAside = () => {
  return (
    <div className={style.firstBlock}>
      <div className={style.firstBlock__title}>Navigation Site</div>
      <ul>
        <li>
          <a href="#">Start Work</a>
        </li>
        <li>
          <a href="#">Control</a>
          <ul>
            <li>
              <a href="#">Commision</a>
            </li>
            <li>
              <a href="#">AirCompany's</a>
            </li>
            <li>
              <a href="#">Last Updates</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Galery</a>
            </li>
          </ul>
          <li>
            <a href="#">Work Program CS</a>
          </li>
          <li>
            <a href="#">Supervaiser's Zone</a>
          </li>
          <li>
            <a href="#">Our Forum</a>
          </li>
          <li>
            <a href="#">Humor</a>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default NavigationAside;
