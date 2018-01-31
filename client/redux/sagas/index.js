import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import firebase from 'firebase';
import '../../Firebase/config.js';

const pullFromFirebase = (currentUser) => {
  return new Promise((resolve, reject) => {
    firebase.database().ref('users/' + currentUser + '/').once('value').then((snapshot) => {
      if (snapshot) {
        const userData = snapshot.val();
        console.log(userData, 'udata');
        resolve(userData)
      }
    });
  })
}

function* fetchInitialData(action) {
  try {
    const dataFromFirebase = yield call(pullFromFirebase, action.data.uid)
    console.log(dataFromFirebase, 'dff');
    yield put({ type: "DATA_FETCHED_SUCCESSFULLY", data: {
      matches: dataFromFirebase.matches,
      usersDisliked: dataFromFirebase.userDisliked,
      usersLiked: dataFromFirebase.usersLiked
    }})
  }
  catch(e) {
    console.log('errorrrrr');
    yield put({ type: "USER_FETCH_FAILED", message: e.message })
  }
}

function* mySaga() {
  yield takeLatest("SYNC_FIREBASE_TO_STORE", fetchInitialData)
}

export default mySaga;
