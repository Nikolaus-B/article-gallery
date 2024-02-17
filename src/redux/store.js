import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { articlesReducer } from './acrticles/articlesSlice';
import { userArticlesReducer } from './userArticle/userArticleSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userArticles'],
};

const rootReducer = combineReducers({
  articles: articlesReducer,
  userArticles: userArticlesReducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
