import createAppStore from '../store-creator';
import expect from 'expect';

describe('store-creator', () => {
  it('should update counter of about page', () => {
    const store = createAppStore();
    store.dispatch({
      type: 'ABOUT.CHANGE_COUNT',
      payload: {
        count: 3
      }
    });

    const actual = store.getState();
    const expected = {
      about: {
        count: 3
      }
    };

    expect(actual).toEqual(expected);
  });

  it('should initialize', () => {
    const store = createAppStore();
    const actual = store.getState();
    const expected = {
      about: {
        count: 0
      }
    };

    expect(actual).toEqual(expected);
  });
});