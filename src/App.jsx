import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className={styles.App}>
      <h2>Portfolio</h2>
      <Navbar />
    </div>
  );
}

export default App;
