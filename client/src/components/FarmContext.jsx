import { createContext, useState } from "react";

const FarmContext = createContext();

const FarmProvider = ({ children }, props) => {
  const [modalfarm, setModal] = useState("");
  
  const handleModalFarm = (props) => {
      setModal(props);
  };

  const data = { modalfarm, handleModalFarm };

  return <FarmContext.Provider value={data}>{children}</FarmContext.Provider>;
};

export { FarmProvider };
export default FarmContext;
