import React, { useMemo, useCallback } from "react";

import { findDOMNode, createPortal } from "react-dom";
//import { Toast } from "./Toast";

// https://stackoverflow.com/questions/58469220/react-hooks-return-children-wrapping-component

/*
const ToastContext = React.createContext();

export const ToastContextProvider = ({ options, content }) => {
  return (
    <ToastContext.Provider value={{ options }}>
      <Toast {...options}>{content}</Toast>
    </ToastContext.Provider>
  );
};
*/
/*
const useToast = Context => {
  const toastContext = useContext(Context || Toast);
  const toast = useMemo(() => {
    return toastContext.current;
  }, [toastContext]);
  return toast;
};

*/

/*
const useToast = () => {
  const toastContext = useToastContext();
  const toast = React.useMemo(() => {
    console.log("CONTEXT ", toastContext);
    return toastContext.current;
  }, [toastContext]);
  return toast;
};
*/
/*
const ToastContext = React.createContext({});
const useToastContext = () => React.useContext(ToastContext);

export const ToastContextProvider = () => {
  return (
    <ToastContext.Provider value={{}}>
      <Toast>
        <div>Something</div>
      </Toast>
    </ToastContext.Provider>
  );
};
*/
// Hook
// ==============================
//const useToast = () => React.useContext(ToastContext);
//const useToastContext = () => useContext(ToastContext);
/*
export function useToast() {
  const toastContext = useToastContext();
  const toast = React.useMemo(() => {
    console.log("CONTEXT ", toastContext);
    return toastContext;
  }, [toastContext]);
  return toast;
}
*/
/*
export const useToast = props => {
  console.log("PROPS ", props);
  const Toast = useMemo(() => {
    return ({ children }) => <div>{children}</div>;
  }, []);

  return {
    Toast,
  };
};
*/
export const useToast = () => {
  const Toast = useCallback(({ toastType, ...rest }, children) => {
    console.log("TOAST HERE ", toastType);
    return createPortal(<div>Testing Toast here</div>, document.body);
  }, []);

  return {
    Toast,
  };
};

/*
 ReactDOM.createPortal(
          <StyledToastContainer position={position}>
            {toasts.map((toastOptions) => (
              <Toast
                key={toastOptions.id}
                remove={remove}
                position={position}
                { ...toastOptions }
              />
            ))}
          </StyledToastContainer>, document.body,
        )

  const Modal = useCallback(
    ({onOK, ...rest}, child) => {
      return (
        <AntdModal
          {...rest}
          visible={on}
          onOk={() => {
            onOK && onOK()
            toggle()
          }}
          onCancel={toggle}
        >
          {child}
        </AntdModal>
      )
    },
    [on, toggle],
  )
  */
//export default useToast;
