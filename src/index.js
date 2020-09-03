import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import{ createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider,useSelector} from 'react-redux'
import { ReactReduxFirebaseProvider,getFirebase,isLoaded } from 'react-redux-firebase'
import { createFirestoreInstance,reduxFirestore,getFirestore } from  'redux-firestore'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'
 
// import the rootReducer from store
import rootReducer from './store/reducers/rootReducer'

//check if user is authenticatedd
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return(
    // spinners for loading
    <Fragment>
      <div class="preloader-wrapper big active center">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-red">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-yellow">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-green">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
    </Fragment>
  ) ;
  return children
}

// set user configuration
const rrfConfig = {
  userProfile: 'users',
  //attachAuthIsReady:true,
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const store = createStore(rootReducer,composeWithDevTools(compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
  reduxFirestore(fbConfig),
  ))
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  //attachAuthIsReady:true,
};

//store.firebaseAuthIsReady.then(()=>{
  ReactDOM.render(
    <React.StrictMode>
      {/* Surround the app with provider to access the redux store */}
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <AuthIsLoaded>
            <App />
          </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
      </Provider>
      
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
  
//})

