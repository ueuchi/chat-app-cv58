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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const emojiSelect = (emoji) => {
    console.log(emoji);
    setSelectedEmoji(emoji.native);
    setIsOpen(false);
  };
  // const [open, setOpen] = useState(true);
  // const handleClickOpen = () => {
  //   setOpen(false);
  // };
  // const handleClose = () => {
  //   setOpen(true);
  // };
  // const emojiSelect = () => {
  //   console.log(emoji)
  // }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='name' {...register('name', { required: true })} />
        {errors.name && <span style={{ color: 'tomato' }}>名前を入力してください</span>}
        <br />
        <input type='text' placeholder='message' {...register('content', { required: true })} />
        {/* emoji */}
        <button onClick={() => setIsOpen(true)}>emoji</button>
        {isOpen && <Picker onSelect={(emoji) => emojiSelect(emoji)} style={{ position: 'absolute', top: '0px', right: '40px' }} />}
        {selectedEmoji}
        {errors.content && <span style={{ color: 'tomato' }}>メッセージを入力してください</span>}
        <br />
        {/* <input type="submit" /> */}
      </form>

    </>
  );
};

export default PostForm;
