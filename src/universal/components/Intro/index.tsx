import logo from "@assets/fakelogo.png";
import classes from "./intro.module.scss";

export function Intro() {
  return (
    <div className={classes.main}>
      <div className={classes["intro-container"]}>
        <img src={logo} alt="Slogo" />
        <a href="/form">Connect</a>
      </div>
    </div>
  );
}
