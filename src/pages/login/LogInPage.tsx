import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { ChangeEventHandler, useState } from "react";
import CredentialPanel from "../../components/CredentialPanel";

interface LogInPageProps {
  onLogin: (user: string) => void;
}

const LogInPage = ({ onLogin }: LogInPageProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateUsername: ChangeEventHandler<HTMLInputElement> = (e) =>
    setUsername(e.target?.value);

  const updatePassword: ChangeEventHandler<HTMLInputElement> = (e) =>
    setPassword(e.target?.value);

  return (
    <div className="flex flex-col bg-slate-600 p-6 rounded-lg w-2/4 absolute mx-auto inset-x-0 top-24">
      <CredentialPanel
        label="username"
        id="username"
        text={username}
        setText={updateUsername}
        icon={faUser}
      />
      <CredentialPanel
        label="password"
        id="password"
        text={password}
        setText={updatePassword}
        icon={faLock}
        hidden={true}
      />
      <button className="text-white" onClick={() => onLogin(username)}>
        Login
      </button>
    </div>
  );
};

export default LogInPage;
