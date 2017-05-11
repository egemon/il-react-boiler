const Message = ({ id, author, text }) => (
  <article>
    {id}
    <h4>Author: {author}</h4>
    {text}
  </article>
);

Message.propTypes = {
  id: React.PropTypes.string,
  author: React.PropTypes.string,
  text: React.PropTypes.string,
};

Message.defaultProps = {
  id: 0,
  author: '',
  text: '',
};

export default Message;
