export const saveState = (state) => {
  console.log('[localStorage] saveState()');
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('err', err);
  }
  return state;
};

export const loadState = () => {
  console.log('[localStorage] loadState()');
  let state;
  try {
    const stringifiedState = localStorage.getItem('state');
    state = JSON.parse(stringifiedState);
  } catch (err) {
    console.log('err', err);
  }

  return state || undefined;
};
