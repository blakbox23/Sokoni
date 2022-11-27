import { createContext } from "react";
import { UserContextType } from "./UserProvider";

export type UserStateType = {
  id: number;
  email: string;
};

export const initialState: UserStateType = {
  id: 0,
  email: "",
};

const UserContext = createContext<UserContextType>({
  state: initialState,
  dispatch: () => undefined,
});

export default UserContext;
