export default function (state = {messages: []}, {type, payload}) {
  switch (type) {
    case 'MESSAGES_FETCH_SUCCEEDED':
      debugger
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};
