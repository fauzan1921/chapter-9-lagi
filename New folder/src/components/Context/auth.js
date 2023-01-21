import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { authInstance } from "../../services/firebase";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [accessToken, setAccessToken] = useState();

  const fetchUserDefinition = useCallback(() => {
    const userDefinition = localStorage.getItem("user");
    const savedAccessToken = localStorage.getItem("token");
    if (userDefinition) {
      setUser(JSON.parse(userDefinition));
      setAccessToken(savedAccessToken);
    }
  }, []);

  useEffect(() => {
    fetchUserDefinition();
  }, [fetchUserDefinition]);

  const signin = async (email, password) => {
    const result = await signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    setUser(result.user.toJSON());
    const firebaseAccessToken = await result.user.getIdToken();
    setAccessToken(firebaseAccessToken);
    localStorage.setItem("user", JSON.stringify(result.user.toJSON()));
    localStorage.setItem("token", firebaseAccessToken);
  };

  const signout = () => {
    setUser(undefined);
    setAccessToken(undefined);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const signup = async (email, password) => {
    if (!email || !password) return;
    const result = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    setUser(result.user.toJSON());
    const firebaseAccessToken = await result.user.getIdToken();
    setAccessToken(firebaseAccessToken);
    localStorage.setItem("user", JSON.stringify(result.user.toJSON()));
    localStorage.setItem("token", firebaseAccessToken);
  };

  return (
    <AuthContext.Provider
      value={{ user, accessToken, signin, signout, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}
