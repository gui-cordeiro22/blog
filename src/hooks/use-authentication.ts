// Dependencies
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../service/firebase/config";

export const UseAuthentication = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cancelled, setIsCancelled] = useState(false);

  const checkIfIsCancelled = () => {
    if (!!cancelled) {
      return;
    }
  };

  const createUser = async (data) => {
    checkIfIsCancelled();

    setIsLoading(true);
    setError("");

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, { displayName: data.name });

      return user;
    } catch (error) {
      console.error(error.message);

      let systemErrorMessage;

      if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor, tente mais tarde";
      }
      setError(systemErrorMessage);

      return { user: null, error: systemErrorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return setIsCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    isLoading,
  };
};
