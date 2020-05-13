document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();
  console.log(app);
});
//GOOGLE AUTHENTICATION
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      const user = res.user;
      document.write(`Hello ${user.displayName}`);
      console.log(user)
    })
    .catch(console.log)
};
