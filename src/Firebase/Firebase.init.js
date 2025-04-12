import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCnOXSCFZMip01_PNI8w4c0GN-kQQC01X8",
    authDomain: "pccc-identity-portal.firebaseapp.com",
    projectId: "pccc-identity-portal",
    storageBucket: "pccc-identity-portal.firebasestorage.app",
    messagingSenderId: "847676531666",
    appId: "1:847676531666:web:6cc9a64829e42f459ade0b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);