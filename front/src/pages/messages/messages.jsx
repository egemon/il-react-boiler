import { connect } from 'react-redux';
import { fetchMessagesAction } from '../../async-action-creators';
import Message from '../../components/message/message';
import { getMessages } from '../../root-reducer';


class Messages extends React.Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  renderMessages() {
    return this.props.messages.map(
      message => <Message key={message.id} {...message} />,
    );
  }

  render() {
    return (
      <div>
        <h1>Messages List</h1>
        <div>
          {this.renderMessages()}
        </div>
      </div>
    );
  }
}

Messages.propTypes = {
  // params: React.PropTypes.shape({
  //   id: React.PropTypes.string,
  // }),
  messages: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      text: React.PropTypes.string,
    }),
  ),
  fetchMessages: React.PropTypes.func.isRequired,
};

Messages.defaultProps = {
  // params: {},
  messages: [],
};

export default connect(getMessages, {
  fetchMessages: fetchMessagesAction,
})(Messages);

