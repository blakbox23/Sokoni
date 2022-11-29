import { useReducer, Dispatch, ReactNode } from "react";
import UserContext, { initialState, UserStateType } from "./UserContext";

type UserProviderProps = {
  children: ReactNode;
};

export type UserActionType = {
  type: "login" | "logout" | "signup";
  payload: any;
};

export type UserContextType = {
  state: UserStateType;
  dispatch: Dispatch<UserActionType>;
};

function userContextReducer(state: UserStateType, action: UserActionType): UserStateType {
  switch (action.type) {
    case "login":
      return {...action.payload, loggedIn: true}

      case "logout":
      return {...state, loggedIn: false}

      case "signup":
      return {...state, status: action.payload}

    default:
      return state;
  }
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(userContextReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
