import { createContext } from "react";
import { UserContextType } from "./UserProvider";

export type UserStateType = {
  auth_token: string;
  user: {
    id: number;
    email: string;
    username: string;
  };
  loggedIn: boolean;
  status: string;
};

export const initialState: UserStateType = {
  auth_token: "",
  user: {
    id: 0,
    email: "",
    username: ""
  },
  loggedIn: false,
  status: ""
};

const UserContext = createContext<UserContextType>({
  state: initialState,
  dispatch: () => undefined,
});

export default UserContext;
