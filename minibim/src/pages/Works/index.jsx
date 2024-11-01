import { useEffect, useState } from "react";
import style from "./index.module.css";
import { database } from "../../firebaseConfig";
import Layouts from '../../common/components/Layouts/index';
import { doc, getDoc } from "firebase/firestore/lite";

function Works () {
    const [postData, setPostData] = useState(null);

    async function getDocuments(posts) {
        const list = doc(database, "crepeWorks", posts);
        console.log(1111, list)
        const listSnapshot = await getDoc(list);

        if (!listSnapshot.exists()) {
            return console.log("문서가 존재하지 않습니다.") 
        } 

        setPostData(listSnapshot.data());
    }

    return (
        <Layouts>
            <div className={style.container}>
                <h3 className={style.title}>Board List</h3>
                <ul>
                </ul>
            </div>
        </Layouts>
    )
}

export default Works;