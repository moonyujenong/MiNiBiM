import React, { useEffect } from 'react';
import style from './index.module.css';
import useResponsive from '../../../common/hook/Responsive';
import { service } from './service';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Service() {
  const screenSize = useResponsive();

  useEffect(() => {
    AOS.init();
  }, [screenSize]);

  return (
    <div className={style.container}>
      <h2 className={style.title} {...(screenSize < 1280 && { 'data-aos': 'fade-up' })}>
        Service
      </h2>
      <div className={style.service_list}>
        {service.map((item) => (
          <div
            className={style.list_item}
            key={item.id}
            {...(screenSize < 1280 && {
              'data-aos': 'fade-up',
              'data-aos-offset': '200',
              'data-aos-duration': `${item.duration}`,
            })}
          >
            <h3 className={style.item_title}>{item.title}</h3>
            <p className={style.item_desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
