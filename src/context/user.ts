import React, { Dispatch, SetStateAction } from "react";
import { User } from "../common";

type UserContextArgs = [
  undefined | null | User,
  Dispatch<SetStateAction<undefined | null | User>>
];

export const UserContext = React.createContext<UserContextArgs>([
  undefined,
  () => undefined,
]);
