import { useRef, useState } from 'react';
import { contactList } from './contactList';
import style from './index.module.css';

function Contact() {
  const fileRef = useRef();
  const [isSelectFile, setIsSelectFile] = useState();

  const handleFileBtn = () => {
    fileRef.current.click();
  };

  const handleFileInput = (e) => {
    const fileName = e.target.files[0].name;
    setIsSelectFile(fileName);
  };

  return (
    <div className={style.container}>
      <h3 className={style.title}>Contact</h3>

      <form action="">
        <div className={style.enter_list}>
          {contactList.map((item) => (
            <div className={style.form_box} key={item.id}>
              <h3 className={`${style.category} ${item.requir === true ? style.requir : ''}`}>{item.name}</h3>
              {item.id === 6 ? (
                <textarea placeholder={item.placeHolder} className={style.user_text_box}></textarea>
              ) : (
                <>
                  {item.type === 'file' ? (
                    <label htmlFor="fileName">
                      <input
                        type="texet"
                        readOnly
                        placeholder={isSelectFile ? '' : item.placeHolder}
                        value={isSelectFile && isSelectFile}
                      />
                      <input
                        type="file"
                        ref={fileRef}
                        onChange={handleFileInput}
                        id="fileName"
                        style={{ display: 'none' }}
                      />
                      <button type="button" onClick={handleFileBtn} className={style.file_upload}>
                        *파일선택
                      </button>
                    </label>
                  ) : (
                    <input type={item.type} placeholder={item.placeHolder} className={style.user_input} />
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <button className={style.submit_btn} type="submit">
          문의 보내기
        </button>
      </form>
    </div>
  );
}

export default Contact;
