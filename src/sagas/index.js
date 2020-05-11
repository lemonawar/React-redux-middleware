import { takeEvery, call, put, all } from 'redux-saga/effects'
import {
    DELETE_USER, FETCH_USER, RECEIVE_USER, REQUEST_USER, ADD_USER, EDIT_USER
} from '../reducers/user'
import * as api from '../api'

function* takeFetchUser() {
    console.log("takeFetch")
    yield takeEvery(FETCH_USER, fetchUserAsync)
}

function* fetchUserAsync(action) {
    yield put({ type: REQUEST_USER })
    const users = yield call(api.fetchUser)
    yield put({ type: RECEIVE_USER, users })
}

function* takeAddUser() {
    yield takeEvery(ADD_USER, function* (action) {
        yield call(api.createUser, { name: action.name })
        yield fetchUserAsync()
    })
}

function* takeEditUser() {
    yield takeEvery(EDIT_USER, function* (action) {
        yield call(api.updateUser, { ...action.user })
        yield fetchUserAsync()
    })
}

// function* takeDeleteUser() {
//     yield takeEvery(DELETE_USER, function* (action) {
//         yield call(api.deleteUser, { ...action.user })
//         yield fetchUserAsync()
//     })
// }

export default function* rootSaga() {
    yield all([
        takeFetchUser(),
        takeAddUser(),
        takeEditUser(),
        //takeDeleteUser()
    ])
}