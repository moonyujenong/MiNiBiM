import { reviewList } from './reviewList';
import RadiusInText from '../common/RadiusInText';
import style from './index.module.css';

function ClientReview() {
  return (
    <div className={style.container}>
      <RadiusInText content="미니빔에서 작업한 결과들을 데이터로 확인해 보세요!" />

      <h3 className={style.title}>
        미니빔 서비스를 추천하는 <br />
        고객의 목소리를 들어보세요
      </h3>

      <ul className={style.review_list}>
        {reviewList.map((item) => (
          <li className={style.review} key={item.id}>
            <h3 className={style.length}>{item.count}</h3>
            <span className={style.title}>{item.title}</span>
            <p className={style.explain}>{item.explain}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientReview;
