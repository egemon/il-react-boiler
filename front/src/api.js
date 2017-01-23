import fetch from 'isomorphic-fetch';

export default {
  fetchMessages() {
    return fetch('/api/v1/messages');
  },
};
