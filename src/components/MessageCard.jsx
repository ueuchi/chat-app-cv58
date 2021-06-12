import dayjs from 'dayjs';
// import { firebase, db } from '../config/firebase';
const MessageCard = ({ message }) => {
const { name, content, sendAt } = message;

// const removeCapital = db.collection("cities").doc("DC").delete().then(() => {
//   console.log("Document successfully deleted!");
// }).catch((error) => {
//   console.error("Error removing document: ", error);
// });

  return (
    <div >
      <span style={{ fontWeight: 'bold' }}>
        {name}{' '}:{' '}
      </span>
      <span>{content}</span>
      <span style={{ fontStyle: 'italic' }}>
        {' '}[{dayjs(sendAt.toDate()).format('YYYY/MM/DD HH:MM:ss')}]
      </span>
      {/* <button onClick={removeCapital}>削除</button> */}
    </div>
  );
};

export default MessageCard;
