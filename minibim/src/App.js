import style from '@style/reset.module.css';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

function App() {
  return (
    <div className={style.wrap}>
      <Header />
      <div className={style.contents}></div>
      <Footer />
    </div>
  );
}

export default App;
