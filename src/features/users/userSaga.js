import { call, put, takeLatest } from "redux-saga/effects";

import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./userSlice";
import { getAllUsers } from "../../services/UserService";

function* handleFetchUsers() {
  try {
    const data = yield call(getAllUsers);
    yield put(fetchUsersSuccess(data));
  } catch (err) {
    yield put(fetchUsersFailure());
  }
}

export default function* userSaga() {
  yield takeLatest(fetchUsersRequest.type, handleFetchUsers);
}
