document.addEventListener("DOMContentLoaded", (event) => {
  
  const app = firebase.app();
  //reference database
  const db = firebase.firestore();
  //reference object in database table posts with id firstpost
  const myPost = db.collection("post").doc("firstpost");

  myPost.get()
  .then(doc => {

    const data = doc.data();
    document.write(data.title + `<br>`)
    console.log(data)
    document.write(data.views )

  })

});
// //GOOGLE AUTHENTICATION
// function googleLogin() {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then((res) => {
//       const user = res.user;
//       document.write(`Hello ${user.displayName}`);
//       console.log(user);
//     })
//     .catch(console.log);
// }
