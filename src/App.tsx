import Button from "./components/Buttons/Button";
import "./GlobalStyles/index.module.css";
import styles from "./components/Buttons/css/button.module.css";

const App = () => {
  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <div>
      <Button
        btnClass={`${styles.btn} ${styles.btnGreen}`}
        value="Click me"
        clickEvent={handleClick}
      />
    </div>
  );
};

export default App;
