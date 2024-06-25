import { createContext } from "react";

const initialState = {
  tasks: {},
};

export const UpdateStorageContext = createContext([initialState, () => {}]);
