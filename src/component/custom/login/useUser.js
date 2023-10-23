import { useEffect, useState } from "react"

export const useUsers = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		const saved_users = JSON.parse(localStorage.getItem("user"))
		if (saved_users) {
			setUsers(saved_users)
		}
	}, [])

	return { users }
}
