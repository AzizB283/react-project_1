import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";


const fetchNews = async () => {
  const res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=838f6933938e4e589f2f23d10faac26f");
  const result = await res.data;
  return result;
};


function* getNews() {
    const news = yield fetchNews();
    yield put({type: "NEWS_SUCCESS", payload: news})
}

function* newsSaga() {
  yield takeEvery("GET_NEWS", getNews);
}

export default newsSaga;
