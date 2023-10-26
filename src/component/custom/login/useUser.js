import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const saved_users = JSON.parse(localStorage.getItem("user"));
    if (saved_users) {
      setUsers(saved_users);
    }
  }, []);

  return { users };
};
export default useUsers;
