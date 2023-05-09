import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";


const getUserName = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const result = await res.data;
  return result[Math.floor(Math.random() * 10)].name;
  // console.log(res.data)
};


function* fetchUser() {
    try {
        const userName = yield getUserName();
        yield put({ type: "UPDATE_NAME_SUCCESS", payload: userName });
    } catch (e) {
        console.log(e)
  }
}

function* userSaga() {
  yield takeEvery("UPDATE_NAME", fetchUser);
}

export default userSaga;
