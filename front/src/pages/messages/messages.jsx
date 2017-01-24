import { connect } from 'react-redux';
import { fetchMessagesAction } from '../../async-action-creators';

class Messages extends React.Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  // TODO: refactore

  renderMessages() {
    return this.props.messages.map(message => message.text);
  }

  render() {
    return (
      <div>
        <h1>{this.props.params.id}</h1>
        <div>
          {this.renderMessages()}
        </div>
      </div>
    );
  }
}

Messages.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
  messages: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      text: React.PropTypes.string,
    }),
  ),
  fetchMessages: React.PropTypes.func.isRequired,
};

Messages.defaultProps = {
  params: {},
  messages: [],
};

const mapStateToProps = ({ messages: { messages } }) => ({ messages });

export default connect(mapStateToProps, {
  fetchMessages: fetchMessagesAction,
})(Messages);

