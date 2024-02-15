import { useEffect, useState } from 'react';
import { processList } from './processList';
import RadiusInText from '../common/RadiusInText';
import style from './index.module.css';

function Process() {
  const [isTimeActive, setIsTimeActive] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsTimeActive((idx) => (idx + 1) % processList.length);
    }, 3000);

    return () => clearTimeout(interval);
  }, [isTimeActive]);

  return (
    <div className={style.container}>
      <RadiusInText content="디자이너와 개발자는 최상의 결과를 내기 위해 고민해요" />

      <h3 className={style.title}>꼼꼼한 작업 과정으로 이루어집니다!</h3>

      <ul className={style.process_list}>
        {processList.map((item, idx) => (
          <li className={`${style.process} ${idx === isTimeActive ? style.active : ''}`} key={item.id}>
            <img alt="process img" src={item.img} />
            <h3 className={style.process_title}>
              <p>{item.id + 1}</p> {item.title}
            </h3>
            <p>{item.explain}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Process;
