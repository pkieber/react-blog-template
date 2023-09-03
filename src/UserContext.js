// createContext = function that gives you a new context object back
import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

// create a Provider-component to allow consuming-components to subscribe to context changes
export const UserProvider = ({ children }) => {
    const [user] = useState({
        name: "Jenny",
        email: "jenny@example.com",
    });
    return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);