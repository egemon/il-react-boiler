export const fetchMessagesAction = () => ({
  type: 'MESSAGES_FETCH_REQUESTED',
});

export const fetchMessagesActionOk = ({ data: messages }) => ({
  type: 'MESSAGES_FETCH_SUCCEEDED',
  payload: {
    messages,
  },
});

export const fetchMessagesActionFail = ({ message }) => ({
  type: 'MESSAGES_FETCH_FAILED',
  message,
});
