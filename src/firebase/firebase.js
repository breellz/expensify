import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };


firebase.initializeApp(firebaseConfig);
const database = firebase.database()

export {firebase , database as default}

//   database.ref().set({
//       name: 'Bassit Owolabi',
//       age: 23,
//       stressLevel:6,
//       job: {
//           title: 'software developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Ibadan',
//           country:'Nigeria'
//       },
//   }).then(()=>{
//       console.log('Data was saved')
//   }).catch((error)=>{
//       console.log(error)
//   })

// //   database.ref('attributes').set({hobby:'collecting Tiger\'s left balls '})
// //   database.ref('attributes/height').set('1.67m')
// //   database.ref('attributes/weight').set('60kg')
// // database.ref('isSingle').remove()
// database.ref().update({
//     stressLevel:9,
//     'location/city': 'Lagos',
//     'job/company':'Andela'
// })
// database.ref().remove()

// database.ref('expenses').push({
//     description: "bla",
//     note:'',
//     amount: 1200,
//     createdAt: 23890037
// })

// database.ref('expenses').on('value', (snapShot)=>{
//     const expenses = [];
//     snapShot.forEach((childSnapShot)=>{
//         expenses.push({
//             id : childSnapShot.key,
//             ...childSnapShot.val()
//         })
//     })
//     console.log(expenses)
// })

