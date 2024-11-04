import style from "./index.module.css";
import { database } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";
import NoData from "../../../common/components/NoData";

function WorkDetail () {
    const [detailPost, setDetailPost] = useState();
    // const postId = window.location.pathname.split("/").pop();
    const params = useParams();

    async function getDetailDocuments() {
        const docRef = doc(database, "crepeWorks", params.id);
        const docSnap = await getDoc(docRef);

        // return docSnap.exists() ? docSnap.data() : <NoData />;
        return docSnap.data();
    }

    useEffect(() => {
        getDetailDocuments().then(data => {
            setDetailPost(data);
        });
    }, []);

    return (
        <div className={style.container}>
            {detailPost ? 
                <>
                    {detailPost.title}
                    {detailPost.category}
                </>
                :
                <NoData />
            }
        </div>
    )
}

export default WorkDetail;