import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reviewList } from './reviewList';
import RadiusInText from '../common/RadiusInText';
import style from './index.module.css';

gsap.registerPlugin(ScrollTrigger);

function ClientReview() {
  const countEls = useRef([]);
  const countContainer = useRef();

  useGSAP(
    () => {
      reviewList.forEach((item, index) => {
        const countEl = countEls.current[index];
        gsap.to(countEl, {
          innerHTML: Math.ceil(Number(item.count)),
          duration: 4,
          scrollTrigger: {
            trigger: countContainer.current,
            start: 'bottm bottom ',
            end: 'bottom 50%',
            markers: true,
          },
        });
      });
    },
    { scope: countContainer }
  );

  return (
    <div className={style.container} ref={countContainer}>
      <RadiusInText content="미니빔에서 작업한 결과들을 데이터로 확인해 보세요!" />

      <h3 className={style.title}>
        미니빔 서비스를 추천하는 <br />
        고객의 목소리를 들어보세요
      </h3>

      <ul className={style.review_list}>
        {reviewList.map((item, index) => (
          <li className={style.review} key={item.id}>
            <h3 ref={(el) => (countEls.current[index] = el)} className={style.length}>
              0
            </h3>
            <span className={style.title}>{item.title}</span>
            <p className={style.explain}>{item.explain}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientReview;
