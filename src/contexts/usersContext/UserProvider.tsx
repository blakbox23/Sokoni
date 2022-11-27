import { useReducer, Dispatch, ReactNode } from "react";
import UserContext, { initialState, UserStateType } from "./UserContext";

type UserProviderProps = {
  children: ReactNode;
};

export type UserActionType = {
  type: "login";
  payload: any;
};

export type UserContextType = {
  state: UserStateType;
  dispatch: Dispatch<UserActionType>;
};

function userContextReducer(state: UserStateType, action: UserActionType): UserStateType {
  switch (action.type) {
    case "login":
        console.log('on reducer')
      return action.payload;

    default:
        console.log('not on reducer')

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
