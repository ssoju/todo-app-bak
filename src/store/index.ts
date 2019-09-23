import {combineReducers, applyMiddleware, compose, createStore} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import {chatReducer} from './chat/reducers';
import {systemReducer} from './system/reducers';
import {watcherSaga} from './sagas';

const rootReducer = combineReducers({
	system: systemReducer,
	chat: chatReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = compose;

const getAppliedMiddleware = (history?: any) => {
	if (process.env.NODE_ENV === 'development') {
		return applyMiddleware(
			sagaMiddleware,
			createLogger()
		);
	}

	return applyMiddleware(
		sagaMiddleware
	);
};

const configureStore = (history?: any, preloadedState?: any) => {
	const store = createStore(
		preloadedState,
		composeEnhancers(
			getAppliedMiddleware(history)
		)
	);

	sagaMiddleware.run(watcherSaga);
	return store;
}

export type AppState = ReturnType<typeof rootReducer>;
export default configureStore;