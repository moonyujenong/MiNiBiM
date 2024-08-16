import { useRef } from 'react';
import { reviewList } from './reviewList';
import style from './index.module.css';
import iconPlus from 'images/common/icon-plus.svg';
import gsap from 'https://esm.sh/gsap';
import ScrollTrigger from 'https://esm.sh/gsap/ScrollTrigger';
import { useGSAP } from 'https://esm.sh/@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ClientReview() {
  const countEls = useRef([]);
  const countContainer = useRef();

  useGSAP(
    () => {
      reviewList.forEach((item, index) => {
        const countEl = countEls.current[index],
          round = index === 2 ? 0.1 : 1;
        gsap.to(countEl, {
          innerHTML: gsap.utils.snap(round, item.count),
          snap: {
            innerHTML: round,
          },
          duration: 4,
          scrollTrigger: {
            trigger: countContainer.current,
            start: 'bottom bottom',
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
      <h3 className={style.title}>Our results</h3>

      <ul className={style.review_list}>
        {reviewList.map((item, index) => (
          <li className={style.review_item} key={item.id}>
            <h3 className={style.length} ref={(el) => (countEls.current[index] = el)}>
              0 {item.id !== 3 && <img alt="icon plus" src={iconPlus} />}
            </h3>
            <span className={style.item_title}>{item.title}</span>
            <p className={style.explain}>{item.explain}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientReview;
