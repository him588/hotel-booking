function additem(users, current_user, details) {
  const index = users.findIndex((user) => user.email === current_user.email); // WE USE INDEX FOR SPLICE NEW USER DETAILS//
  const is_containes = current_user.wishlist.some(
    (item) => item.hotelid === details.hotelid
  );
  // HERE WE DO OUR MAIN WORK TO UPDATE OUR AND RESET IN LOCALSTORAGE //
  if (is_containes) {
    alert("Item already in your wishlist");
  } else {
    current_user.wishlist.push(details);
    users.splice(index, 1, current_user);
    localStorage.setItem("currentuser", JSON.stringify(current_user));
    localStorage.setItem("user", JSON.stringify(users));
  }
}
export default additem;
