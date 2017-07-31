
const UPDATE_PASSWORD_FIELD = 'UPDATE_PASSWORD_FIELD';
const UPDATE_EMAIL_FIELD = 'UPDATE_EMAIL_FIELD';
const UPDATE_BIO_FIELD = 'UPDATE_BIO_FIELD';
const UPDATE_FULLNAME_FIELD = 'UPDATE_FULLNAME_FIELD';

const initialState = {
  passwordField: '',
  emailField: '',
  bioField: '',
  fullnameField: ''
};

export default function FormReducer(state = initialState, action) {
  switch (action.type) {
  case UPDATE_PASSWORD_FIELD:
    return { ...state, passwordField: action.payload };
  case UPDATE_EMAIL_FIELD:
    return { ...state, emailField: action.payload };
  case UPDATE_BIO_FIELD:
    return { ...state, bioField: action.payload };
  case UPDATE_FULLNAME_FIELD:
    return { ...state, fullnameField: action.payload };
  default:
    return state;
  }
}

export function updateEmailField(input) {
  return {
    type: UPDATE_EMAIL_FIELD,
    payload: input
  };
}
export function updatePasswordField(input) {
  return {
    type: UPDATE_PASSWORD_FIELD,
    payload: input
  };
}
export function updateBioField(input) {
  return {
    type: UPDATE_BIO_FIELD,
    payload: input
  };
}
export function updateFullNameField(input) {
  return {
    type: UPDATE_FULLNAME_FIELD,
    payload: input
  };
}
