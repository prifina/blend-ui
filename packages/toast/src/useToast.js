import { useContext, useMemo } from "react";
import DefaultContext from "./Context";

const useToast = Context => {
  const toastContext = useContext(Context || DefaultContext);
  const toast = useMemo(() => {
    return toastContext.current;
  }, [toastContext]);
  return toast;
};

export default useToast;
