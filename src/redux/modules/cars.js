import data from "./data";

const moduleName = "cars";

const GET_CARS = `${moduleName}/GET_CARS`;
const GET_ACTIVE = `${moduleName}/GET_ACTIVE`;
const GET_PASSED = `${moduleName}/GET_PASSED`;
const CREATE_APPLICATION = `${moduleName}/CREATE_APPLICATION`
const ADD_IN_PASSED = `${moduleName}/ADD_IN_PASSED`

// const CREATE_POST = `${moduleName}/CREATE_POST`;

const defaultState = {
  cars: [],
};

/* 
  { type: GET_POSTS, payload: {...} }
*/
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_CARS:
      return { ...state, cars: payload };
    case GET_ACTIVE:
      return { ...state, cars: payload };
    case GET_PASSED:
      return { ...state, cars: payload };
    case CREATE_APPLICATION:
      return { ...state, cars: [...state.cars, payload] };
    case ADD_IN_PASSED:
      return { ...state, cars: state.cars.filter(item => item.id !== payload.id)};
    // case CREATE_POST:
    //   return { ...state, posts: [...state.posts, payload] };
    default:
      return state;
  }
};

export const getCars = () => (dispatch) => {
  dispatch({ type: GET_CARS, payload: data });
};

export const getActiveList = () => (dispatch) => {
  const newData = data.filter(function (el) {
    return el.wasServiced === false;
  });
  console.log(newData)
  dispatch({ type: GET_ACTIVE, payload: newData });
};

export const getPassedList = () => (dispatch) => {
  const newData = data.filter(function (el) {
    return el.wasServiced === true;
  });
  dispatch({ type: GET_PASSED, payload: newData });
};

export const addApplication = ({model, number}) => (dispatch) => {
  var id = data[data.length - 1].id;
  var obj = {
    id: id + 1,
    model: model,
    number: number,
    wasServiced: false,
  };
  data.push(obj);
  dispatch({ type: CREATE_APPLICATION, payload: obj });
};

export const addInPassed = (id) => (dispatch) => {
  var obj = data.find(x => x.id === id);
  obj.wasServiced = true;
  dispatch({ type: ADD_IN_PASSED, payload: { id } });
}