import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";


const fetchJoke = async () => {
  const res = await axios.get("https://api.chucknorris.io/jokes/random");
  const result = await res.data;
  return result.value;
  // console.log(res.data)
};


function* getJoke() {
    const joke = yield fetchJoke();
    yield put({type: "JOKE_SUCCESS", payload: joke})
}

function* jokeSaga() {
  yield takeLatest("GET_JOKE", getJoke);
}

export default jokeSaga;
