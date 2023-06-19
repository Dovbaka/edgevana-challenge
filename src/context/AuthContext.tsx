'use client'
import { useRouter } from 'next/navigation';
import {createContext, FC, PropsWithChildren, useContext, useState} from 'react';
import {User} from "@/types";

type AuthContextProps = {
  user?: User,
  login: (user: User) => void,
  logout: () => void,
}

const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  login: () => {},
  logout: () => {},
});

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | undefined>(undefined);

  const login = (user: User) => {
    setUser(user);
    router.push('/main/discover')
  }

  const logout = () => {
    setUser(undefined);
    router.push('/sign-up')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth hook cannot be used outside of AuthProvider component");

  return context;
};

export { AuthProvider, useAuth };
