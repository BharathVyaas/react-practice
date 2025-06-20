import { useIdleTimer } from "react-idle-timer";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { IDEALLOGOUTTIME } from "../../constants/auth";

const IdleLogout = ({ timeout = IDEALLOGOUTTIME }) => {
  // 30 mins
  const dispatch = useDispatch();

  const handleIdle = () => {
    alert("You were logged out due to inactivity.");
    dispatch(logout());
    window.location.href = "/";
  };

  useIdleTimer({
    timeout,
    onIdle: handleIdle,
    debounce: 500,
  });

  return null;
};

export default IdleLogout;
