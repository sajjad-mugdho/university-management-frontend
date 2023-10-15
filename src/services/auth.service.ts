import { authToken } from "@/app/constants/storageKey";
import { decodedToken } from "@/utils/jwt";
import { getFormLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authToken, accessToken as string);
};

export const getUserInfo = () => {
  const authTokenData = getFormLocalStorage(authToken);
  if (authTokenData) {
    const decode = decodedToken(authTokenData);
    return decode;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authTokenData = getFormLocalStorage(authToken);
  return !!authTokenData;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};
