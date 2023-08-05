import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useState,
} from "react";
import { getFavorites, User } from "../../common";
import CredentialPanel from "../../components/CredentialPanel";
import LoginButton from "../../components/LoginButton";
import { NotificationContext } from "../../context/notification";
import { UserContext } from "../../context/user";

const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useContext(NotificationContext);

  const [_user, setUser] = useContext(UserContext);

  const updateUsername: ChangeEventHandler<HTMLInputElement> = (e) =>
    setUsername(e.target?.value);

  const updatePassword: ChangeEventHandler<HTMLInputElement> = (e) =>
    setPassword(e.target?.value);

  const logIn: FormEventHandler = (e) => {
    e.preventDefault();
    setUser({ username, favorites: getFavorites() });
    localStorage.setItem("username", username);
  };

  return (
    <form
      onSubmit={logIn}
      className="flex flex-col gap-6 bg-slate-600 p-8 rounded-lg w-2/4 absolute mx-auto inset-x-0 top-24"
    >
      <CredentialPanel
        label="Username"
        id="username"
        text={username}
        setText={updateUsername}
        icon={faUser}
        placeholder="John Snow"
      />
      <CredentialPanel
        label="Password"
        id="password"
        text={password}
        setText={updatePassword}
        icon={faLock}
        hidden={true}
        placeholder="myPassword123!"
      />
      <LoginButton />
    </form>
  );
};

export default LogInPage;
