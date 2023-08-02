import React, { Dispatch, SetStateAction } from "react";

type UserContextArgs = [
  undefined | null | string,
  Dispatch<SetStateAction<undefined | null | string>>
];

export const UserContext = React.createContext<UserContextArgs>([
  undefined,
  () => undefined,
]);
