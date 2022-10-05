import { createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const user = localStorage.getItem("user");
    const authUser = JSON.parse(user);

    return <UserContext.Provider value={{ authUser }}>{props.children}</UserContext.Provider>;
};
