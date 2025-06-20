import { call, put, takeLatest } from "redux-saga/effects";

import { loginRequest, loginSuccess, loginFailure } from "./authSlice";
import { login } from "../../services/AuthService";

function* handleLogin(action) {
  try {
    const data = yield call(login, action.payload);
    yield put(loginSuccess(data.token));
  } catch (err) {
    yield put(loginFailure("Invalid credentials"));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
