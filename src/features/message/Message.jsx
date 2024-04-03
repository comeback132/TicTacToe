const Message = ({ text, isOwn }) => {
    return (
      <div className={`message ${isOwn ? 'own' : 'received'}`}>
        {text}
      </div>
    );
  };
  
  export default Message;