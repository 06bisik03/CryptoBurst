import Navbar from "./Components/Navbar/Navbar";
import IntroPage from "./Pages/Intro/IntroPage";
import styles from "./Styles/App.module.css";
function App() {
  return (
    <body>
      <div className={styles.appContainer}>
        <Navbar />
        <div className={styles.pageContainer}>
          <IntroPage />
        </div>
      </div>
    </body>
  );
}

export default App;
