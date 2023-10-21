import { useNavigate } from "react-router-dom";

function useAdduser(
  name,
  email,
  password,
  set_name_error,
  set_email_error,
  set_password_error,
  user_emails,
  user
) {
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const navigate = useNavigate();
  const adduser = () => {
    if (name.length > 3) {
    } else {
      set_name_error(true);
      return;
    }
    if (emailRegex.test(email)) {
    } else {
      set_email_error(true);
      return;
    }
    if (password.length > 6) {
    } else {
      set_password_error(true);
      return;
    }

    if (user_emails.includes(email)) {
      alert("this email is already registered");
      return;
    } else {
      let signup = {
        name: name,
        email: email,
        password: password,
        wishlist: [],
      };
      user = [...user, signup];
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/login");
    }
  };
  return adduser;
}
export default useAdduser;
