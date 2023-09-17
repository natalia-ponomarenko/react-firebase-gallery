import {
  createContext,
  useState,
  useMemo,
  useContext,
  useCallback,
} from "react";
import FirebaseAuth from "../handlers/auth";

const Context = createContext();
const { signIn, signOut, getCurrentUser } = FirebaseAuth;

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback(() => signIn().then(setCurrentUser), []);
  const logout = useCallback(
    () => signOut().then(() => setCurrentUser(null)),
    []
  );
  const authenticate = useCallback(
    () => getCurrentUser().then(setCurrentUser),
    []
  );

  const value = useMemo(() => {
    return {
      login,
      logout,
      currentUser,
      authenticate,
    };
  }, [currentUser, login, logout, authenticate]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAuthContext = () => useContext(Context);

export default AuthProvider;
