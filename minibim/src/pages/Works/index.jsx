import { useEffect, useState } from "react";
import style from "./index.module.css";
import { database } from "../../firebaseConfig";
import Layouts from '../../common/components/Layouts/index';
import { doc, getDoc, getDocs , collection, query, orderBy, limit} from "firebase/firestore/lite";

function Works () {
    const [postData, setPostData] = useState([]);

    async function getDocuments(posts) {

        const q = query(collection(database, "crepeWorks"));
        const querySnapshot = await getDocs(q);

        let temp = [];

        querySnapshot.forEach((doc) => {
            temp.push(doc.data())
            });
        return temp;
    }

    useEffect(() => {
        getDocuments().then(data => {
            setPostData([...data]);
            console.log(data)
        });
    }, []);

    return (
        <Layouts>
            <div className={style.container}>
                <h3 className={style.title}>Board List</h3>
                <ul>
                    {postData.map(post => {
                        return <div>{post.title} - {post.category}</div>
                    })}
                </ul>
            </div>
        </Layouts>
    )
}

export default Works;