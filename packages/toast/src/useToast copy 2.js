import React, {
  useState,
  useCallback,
  useEffect,
  createContext,
  useContext,
  useRef,
} from "react";

import { hideOthers } from "aria-hidden";
import { useId } from "@reach/auto-id";
import exenv from "exenv";
import { Portal } from "@blend-ui/modal";
import styled, { css, ThemeProvider } from "styled-components";
import { useMemo } from "react";

const { canUseDOM } = exenv;

////////////////////////////////////////////////////////////////////////

function useAriaHider({
  isOpen,
  id,
  enableInert,
  container = canUseDOM ? document.body : null,
}) {
  const mountRef = useRef(
    canUseDOM
      ? document.getElementById(id) || document.createElement("div")
      : null,
  );

  useEffect(() => {
    let undoAriaHidden = null;
    let mountNode = mountRef.current;

    if (isOpen && canUseDOM) {
      mountRef.current.id = id;
      container.appendChild(mountRef.current);
      if (enableInert) {
        undoAriaHidden = hideOthers(mountNode);
      }
    }

    return () => {
      if (enableInert && undoAriaHidden != null) {
        undoAriaHidden();
      }
      if (mountNode.parentElement) {
        mountNode.parentElement.removeChild(mountNode);
      }
    };
  }, [isOpen, id, enableInert, container]);

  return mountRef;
}

////////////////////////////////////////////////////////////////////////

const Base = styled.div`
  /* */
`;
const ToastContext = createContext({});

function useIsMountedRef() {
  const isMountedRef = useRef(null);
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  });
  return isMountedRef;
}
export const ToastContextProvider = ({ id, position, children }) => {
  const [alerts, setAlerts] = useState([]);
  const alertContext = useRef(null);

  const uuid = useId();
  const _id = id || uuid;
  const portalId = `blend-toast-portal-${_id}`;
  const toastId = `blend-toast-${_id}`;
  //const isOpen = true;
  const useInert = false;
  const container = null;
  const isMountedRef = useIsMountedRef();
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (isMountedRef.current) {
      setIsOn(prev => !prev);
    }
  }, [isMountedRef]);

  const mountRef = useAriaHider({
    isOn,
    id: portalId,
    enableInert: useInert,
    container,
  });

  const show = useCallback(
    (message = "", options = {}) => {
      const id = toastId;

      const alertOptions = {
        position: options.position || position,
        timeout,
        type,
        ...options,
      };

      const alert = {
        id,
        message,
        options: alertOptions,
      };
      /*
          alert.close = () => remove(alert)
    
          if (alert.options.timeout) {
            const timerId = setTimeout(() => {
              remove(alert)
    
              timersId.current.splice(timersId.current.indexOf(timerId), 1)
            }, alert.options.timeout)
    
            timersId.current.push(timerId)
          }
    */
      setAlerts(state => state.concat(alert));
      //if (alert.options.onOpen) alert.options.onOpen()

      return alert;
    },
    // [position, remove, timeout, type]
    [position],
  );

  alertContext.current = {
    alerts,
    show,
  };

  return (
    <ToastContext.Provider value={alertContext}>
      {children}
      <Portal container={mountRef.current}>
        {alerts.map(alert => (
          <Base key={"key-" + alert.id} id={alert.id} {...alert.options}>
            {alert.message}
          </Base>
        ))}
      </Portal>
    </ToastContext.Provider>
  );
};

//import { createContext } from 'react'

//const Context = createContext()

//export default Context

//import { useContext, useMemo } from 'react'
//import DefaultContext from './Context'
/*
const useAlert = Context => {
  const alertContext = useContext(Context || DefaultContext)
  const alert = useMemo(() => {
    return alertContext.current
  }, [alertContext])
  return alert
}

export default useAlert
*/

// Hook
// ==============================
const useToast = () => {
  const alertContext = useContext(ToastContext);
  console.log(alertContext);
  const alert = useMemo(() => {
    return alertContext.current;
  }, [alertContext]);
  return alert;
};

/* @component */
export default useToast;
