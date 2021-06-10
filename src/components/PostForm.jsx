import { useForm } from 'react-hook-form';
import { firebase, db } from '../config/firebase';
import { useState } from 'react'
//絵文字導入
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import EditForm from "./EditForm"

const PostForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    db.collection('posts').add({ ...data, sendAt: firebase.firestore.Timestamp.now() }).then(() => {
      console.log('投稿に成功');
    }).catch((error) => {
      console.log('投稿に失敗');
      console.log(error);
    });
  };

  //絵文字
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='name' {...register('name', { required: true })} />
        {errors.name && <span style={{ color: 'tomato' }}>名前を入力してください</span>}
        <br />
        <input type='text' placeholder='message' {...register('content', { required: true })} />
      {/* emoji */}
      {open ? <button onClick={handleClickOpen}>絵文字表示</button>
       :
        <>
          <button onClick={handleClose}>絵文字閉じる</button>
          <Picker style={{ position: 'absolute', top: '0px', right: '40px' }} />
        </>
      }
        {errors.content && <span style={{ color: 'tomato' }}>メッセージを入力してください</span>}
        <br />
        <input type="submit" />
      </form>

    </>
  );
};

export default PostForm;
