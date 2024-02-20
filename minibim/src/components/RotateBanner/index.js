import { bannerList } from './bannerList';
import arrowImg from 'images/common/icon_arrow.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import style from './index.module.css';

function RotateBanner() {
  return (
    <div className={style.container}>
      <div className={style.banner_list}></div>
      <div className={style.wrap}>
        {bannerList.map((item) => (
          <div className={style.banner_slide}>
            <img alt="thumbnail" src={item.img} />

            <div className={style.info}>
              <div className={style.info_box} key={item.id}>
                <h3 className={style.title}>{item.title}</h3>
                <p className={style.explain}>{item.explain}</p>
                <a className={style.link} href={item.url}>
                  웹 사이트 바로가기
                  <img alt="arrow img" src={arrowImg} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RotateBanner;
