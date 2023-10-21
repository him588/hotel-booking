function useLocalstorage() {
  const alluser = [];
  const user = JSON.parse(localStorage.getItem("user"));

  if (user !== null) {
    for (let i = 0; i < user.length; i++) {
      alluser.push(user[i].email);
    }
  }

  return alluser;
}
export default useLocalstorage;
