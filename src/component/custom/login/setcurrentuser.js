export function setCurrentUser(email, users) {
	const current_user = users.find((user) => user.email === email)
	localStorage.setItem("currentuser", JSON.stringify(current_user))
}
