import styles from './App.module.css';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className={styles.App}>
      <h2>Portfolio</h2>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
