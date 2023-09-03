import createDataContext from './createDataContext';
import tracker from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async ()=>{
    const token = await AsyncStorage.getItem('token')
    if(token){
        dispatch({type : 'signin', payload : token})
    }
}
const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await tracker.post('/signup', { email, password });
      console.log(response.data);
      console.log('Successful');
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token });
    } catch (err) {
      console.log(err.message);
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    dispatch({ type: 'signup' });
  };
};

const signout = (dispatch) => {
  return ({ email, password }) => {
    dispatch({ type: 'signup' });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: '' }
);
