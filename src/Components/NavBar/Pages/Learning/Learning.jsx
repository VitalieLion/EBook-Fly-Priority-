import style from "./Learning.module.css";

const Learning = () => {
  return (
    <div className={style.learning}>
      <h1>Learning</h1>
      <div className={style.phrase}>
        "Live as if you were to die tomorrow. Learn as if you were to live
        forever..."
        <p> - Gandhi</p>
      </div>
      <div className={style.items}>
        <div className={style.itemCall}>
          <div className={style.itemCall_title}>Best Calls :</div>
          <ul>
            <li>Fight with Robot-Sites</li>
            <li>Mistrustful clients</li>
            <li>It is expensive</li>
            <li>I found cheaper ...</li>
            <li>I will think</li>
            <li>Full cycle</li>
            <li>Difficult clients</li>
            <li>Taken elsewhere</li>
            <li>Avoiding the answer about prices</li>
            <li>Let's pick up</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Learning;
