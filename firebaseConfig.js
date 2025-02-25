import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Extracted values from google-services.json
const firebaseConfig = {
  apiKey: 'AIzaSyD2_LiYU8SxDhedPSV4xXCiWEdHrxGyjZ8', // Extracted from google-services.json
  authDomain: 'donation-application-9066d.firebaseapp.com', // Constructed from project_id
  projectId: 'donation-application-9066d', // Extracted from google-services.json
  storageBucket: 'donation-application-9066d.appspot.com', // Extracted from google-services.json
  messagingSenderId: '420919772689', // Extracted from google-services.json
  appId: '1:420919772689:android:820fc8e6165442041713b0', // Extracted from google-services.json
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export default app;
