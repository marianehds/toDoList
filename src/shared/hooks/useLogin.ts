import { useDispatch } from "react-redux";
import { changeUser } from "../../core/redux/userSlice";
type Form = {
  name: string;
  valid: boolean;
};

const useLogin = (form: Form) => {
  const dispatch = useDispatch();

  dispatch(changeUser(form));

  return "";
};

export default useLogin;
