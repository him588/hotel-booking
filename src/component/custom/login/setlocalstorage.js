import { useEffect, useState } from "react"

function useLocalstorage() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"))
		if (user !== null) {
			for (let i = 0; i < user.length; i++) {
				setUsers((prev) => [...prev, user[i].email])
			}
		}
	}, [])

	return users
}
export default useLocalstorage
