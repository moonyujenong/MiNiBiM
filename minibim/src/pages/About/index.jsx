import Layouts from "../../common/components/Layouts";
import style from "./index.module.css";
import circleDown from "images/common/icon-circle-down.svg";

function About () {
    return (
        <Layouts>
            <div className={style.container}>
                <div className={style.visual_area}>
                    <h3 className={style.title}>
                        Crafting<br/>
                        New Possibilities<br />
                        Creativity
                    </h3>
                    <p className={style.sub_title}>창의로 새로운 가능성을 만들다</p>
                    <button className={style.down_scroll} type="button">
                        <img alt="circle down" src={circleDown} />
                    </button>

                    <p className={style.bottom_text}>
                        크레페 스튜디오는 평범한 아이디어를 <br/>
                        현실로 실현 가능하게 해주며, <br/>
                        창작의 한계를 허물어 함께 새로운 가능성을 열어 갑니다
                    </p>
                </div>
            </div>
        </Layouts>
    )
}

export default About;