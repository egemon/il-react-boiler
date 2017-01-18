import {connect} from 'react-redux';

class Message extends React.Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  // TODO: refactore

  renderMessages() {
    return this.props.messages.map((message) => {
      return message.text;
    });
  }

  render () {
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

function mapStateToProps ({messages: {messages}}) {
  return {messages};
}

function mapDispatchToProps (dispatch) {
  return {
    fetchMessages: () => {
      dispatch({type: 'MESSAGES_FETCH_REQUESTED'});
    }
  };
}

Message.propTypes = {
  params: React.PropTypes.shape({}),
  messages: React.PropTypes.array,
  fetchMessages: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);

