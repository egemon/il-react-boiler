export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('err', err);
  }
};

export const loadState = () => {
  let state;
  try {
    const stringifiedState = localStorage.getItem('state');
    state = JSON.parse(stringifiedState);
  } catch (err) {
    console.log('err', err);
  }

  return state || undefined;
};
