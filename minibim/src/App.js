import style from '@style/reset.module.css';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Mission from './components/Mission';

function App() {
  return (
    <div className={style.wrap}>
      <Header />
      <div className={style.contents}>
        <Mission />
      </div>
      <Footer />
    </div>
  );
}

export default App;
