import { all } from "redux-saga/effects";
import jokeSaga from "./jokeSaga";
import userSaga from "./userSaga";
import newsSaga from "./newsSaga";

function* rootSaga () {
    yield all([
        jokeSaga(),
        userSaga(),
        newsSaga(),
    ])
}

export default rootSaga;