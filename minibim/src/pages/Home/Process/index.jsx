import style from './index.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useResponsive from '../../../common/hook/Responsive';
import { useEffect } from 'react';
import { process } from './process';

function Process() {
  const screenSize = useResponsive();

  useEffect(() => {
    AOS.init();
  }, [screenSize]);

  return (
    <div className={style.container}>
      <h2 className={style.title} {...(screenSize < 1280 ? { 'data-aos': 'fade-up' } : {})}>
        Process
      </h2>
      {screenSize >= 1280 ? <PcProcess /> : <MobileProcess />}
    </div>
  );
}

export default Process;

export function MobileProcess() {
  const screenSize = useResponsive();

  useEffect(() => {
    AOS.init();
  }, [screenSize]);

  return (
    <div className={style.process_list_wrap}>
      {process.map((item) => (
        <div className={style.list_item} key={item.id} {...(screenSize < 1280 ? { 'data-aos': 'fade-up' } : {})}>
          <img alt="process img" src={item.img} />
          <div className={style.contents}>
            <h3 className={style.item_title}>
              <p>{item.num}</p>
              <p>{item.title}</p>
            </h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PcProcess() {
  return <div className={style.process_list}></div>;
}
