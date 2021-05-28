import dayjs from 'dayjs';
const MessageCard = ({ message }) => {
  const { name, content, sendAt } = message;

  return (
    <div >
      <span style={{ fontWeight: 'bold' }}>
        {name}{' '}:{' '}
      </span>
      <span>{content}</span>
      <span style={{ fontStyle: 'italic' }}>
        {' '}[{dayjs(sendAt.toDate()).format('YYYY/MM/DD HH:MM:ss')}]
      </span>
    </div>
  );
};

export default MessageCard;
