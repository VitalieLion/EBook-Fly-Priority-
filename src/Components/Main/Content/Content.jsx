import style from "./Content.module.css";
import { Route } from "react-router-dom";
import Directory from "../../NavBar/Pages/Directory/Directory";
import Learning from "../../NavBar/Pages/Learning/Learning";
import Instruction from "../../NavBar/Pages/Instruction";
import Interesting from "../../NavBar/Pages/Interesting";
import Notes from "../../NavBar/Pages/Notes";
import Comments from "../../NavBar/Pages/Comments";
import Records from "../../NavBar/Pages/Records";

const Main = () => {
  return (
    <div className={style.content}>
      <Route path="/Directory" component={Directory} />
      <Route path="/Learning" component={Learning} />
      <Route path="/Instruction" component={Instruction} />
      <Route path="/Interesting" component={Interesting} />
      <Route path="/Notes" component={Notes} />
      <Route path="/Comments" component={Comments} />
      <Route path="/Records" component={Records} />
    </div>
  );
};

export default Main;
