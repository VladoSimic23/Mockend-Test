import { Dispatch } from "react";

export interface StateForUsers {
  errors: string[];
}
export interface UserDispatch {
  type: string;
  payload: any;
}

/// User initial state interface
export interface InitStateI {
  userState: StateForUsers;
  userDispatch: Dispatch<UserDispatch>;
}
