import style from '@style/reset.module.css';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Mission from './components/Mission';
import ClientReview from './components/ClientReview';
import Process from './components/Process';
import Contact from './components/Contact';

function App() {
  return (
    <div className={style.wrap}>
      <Header />
      <div className={style.contents}>
        <Mission />
        <ClientReview />
        <Process />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
