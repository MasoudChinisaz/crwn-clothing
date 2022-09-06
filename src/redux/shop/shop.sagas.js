import { takeLatest, call, put, all } from "redux-saga/effects";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.actions";

import ShopActionTypes from "./shops.types";

export function* fetchCOllectionsAsync() {
    
    try{

        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collecitonsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collecitonsMap))
    } catch(error){
        yield put(fetchCollectionsFailure(error.message))
    }
}


export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCOllectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)])
}
