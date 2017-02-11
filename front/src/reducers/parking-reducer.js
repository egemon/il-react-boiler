const max = {
  disabled: 5,
  sedan: 15,
  truck: 10,
};
const initialState = {
  disabled: new Array(max.disabled).fill('empty'),
  sedan: new Array(max.sedan).fill('empty'),
  truck: new Array(max.truck).fill('empty'),
};

function getEmptyPosition(arr) {
  return arr.indexOf('empty');
}
function saveToLC(newState) {
  try {
    localStorage.setItem('parking', JSON.stringify(newState));
  } catch (err) {
    console.error('Not saved');
  }
  return newState;
}

function parkTo(stack, car, state) {
  const position = getEmptyPosition(state[stack]);
  if (position !== -1) {
    const newState = { ...state };
    newState[stack][position] = car;
    car.parkingInfo = {
      stack,
      position,
    };
    return newState;
  }
  return false;
}

function handleFullState(state, car) {
  alert(`Parking is full ${car.type}`);
  return state;
}
// car {type, parkingInfo: {stack, position}}
export default function (state = initialState, { type, payload: car }) {
  let newState;

  switch (type) {
    case 'CAR_ARRIVED':
      switch (car.type) {
        case 'disabled':
          newState = parkTo('disabled', car, state) ||
            parkTo('truck', car, state) ||
            parkTo('sedan', car, state) ||
            handleFullState(state, car);
          return saveToLC(newState);
        case 'sedan':
          newState = parkTo('sedan', car, state) ||
            parkTo('truck', car, state) ||
            handleFullState(state, car);
          return saveToLC(newState);
        case 'truck':
          newState = parkTo('truck', car, state) ||
            handleFullState(state, car);
          return saveToLC(newState);
        default:
          return state;
      }

    case 'CAR_LEFT':
      const stack = state[car.parkingInfo.stack];
      stack[car.parkingInfo.position] = 'empty';
      newState = {
        ...state,
        [car.parkingInfo.stack]: [...stack],
      };
      return saveToLC(newState);
    default:
      return state;
  }
}

export const getCount = ({ count }) => ({ count });
