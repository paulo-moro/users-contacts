import { createContext, useState, useContext } from "react";
import { Ichildrentype } from "../../interface";

interface User {
  id: string;
  email: string;
  phone: string;
}

interface UserProviderData {
  user: User;
  changeUser: (newUser: User) => void;
}

export const userContext = createContext<UserProviderData>(
  {} as UserProviderData
);

export const UserProvider = ({ children }: Ichildrentype) => {
  const [user, setUser] = useState<User>({ id: "", email: "", phone: "" });

  const changeUser = (newUser: User) => setUser({ ...user, ...newUser });

  return (
    <userContext.Provider value={{ changeUser, user }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(userContext);
  return context;
};
