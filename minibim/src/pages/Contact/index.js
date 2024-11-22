import { useRef, useState } from 'react';
import { contactList } from './contactList';
import style from './index.module.css';
import Layouts from '../../common/components/Layouts';

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
  
  //이메일
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [call, setCall] = useState('');
  const [site, setSite] = useState('');
  const [attachment, setAttachment] = useState('');
  const [message, setMessage] = useState('');

  const templateParams = {
    from_company : company,
    from_name : name,
    from_email : email,
    from_call : call,
    from_site : site,
    from_attachment : attachment,
    from_message : message
  }

  // if(!company || !name || !email || !call || !message) {
  //   alert('모든 필드를 채워주세요.');
  //   return;
  // }

  return (
    <Layouts>
      <div className={style.container}>
        <h3 className={style.title}>Contact</h3>

        <form action="">
          <div className={style.enter_list}>
            {contactList.map((item) => (
              <div className={style.form_box} key={item.id}>
                <h3 className={`${style.category} ${item.requir === true ? style.requir : ''}`}>{item.name}</h3>
                {item.id === 6 ? (
                  <textarea placeholder={item.placeHolder} name='message' value={message} className={style.user_text_box}></textarea>
                ) : (
                  <>
                    {item.type === 'file' ? (
                      <label htmlFor="fileName">
                        <input
                          type="texet"
                          readOnly
                          placeholder={isSelectFile ? '' : item.placeHolder}
                          value={isSelectFile && isSelectFile}
                          onClick={handleFileBtn}
                          className={style.file_name_input}
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
                      <input type={item.type} name={item.category}  placeholder={item.placeHolder} className={style.user_input} />
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
    </Layouts>
  );
}

export default Contact;
