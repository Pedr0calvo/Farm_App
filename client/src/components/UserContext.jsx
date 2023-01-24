import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }, props) => {
  const [userMod, setuserMod] = useState("");

  const handleuserMod = (props) => {
    setuserMod(props);
  };

  const data = { userMod, handleuserMod };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
