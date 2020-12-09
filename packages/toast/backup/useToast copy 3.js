import { useMemo, useContext } from "react";
import { ToastContext } from "../src/ToastProvider";

//const useModalContext = () => useContext(ModalContext);

const useToast = () => {
  const alertContext = useContext(ToastContext);
  console.log("CONTEXT ", alertContext);
  const alert = useMemo(() => {
    return alertContext.current;
  }, [alertContext]);
  return alert;
};

export default useToast;
