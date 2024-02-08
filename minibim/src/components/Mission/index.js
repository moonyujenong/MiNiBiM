import style from './index.module.css';

function Mission() {
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <h3 className={style.mission1}>
          고객 중심의 태도와 혁신으로 <br />
          우리는 특별한 경험과 신뢰를 얻습니다
        </h3>
        <h3 className={style.mission2}>
          고객들과 우리의 소통은 약속의 시작이며, 그 과정에서 우리는 항상 혁신과 탁월함을 추구합니다. <br />
          저희는 단순히 서비스를 넘어, 각 개인과 고객 커뮤니티에게 독득하고 의미 있는 경험을 선사하여, <br />
          함께하는 여정이 특별하고 기억에 남는 것으로 만들기 위해 노력합니다.
        </h3>
      </div>
    </div>
  );
}

export default Mission;
