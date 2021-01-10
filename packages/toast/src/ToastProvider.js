import React, {
  useState,
  useCallback,
  useEffect,
  createContext,
  useContext,
  useRef,
  useMemo,
} from "react";

import { useId } from "@reach/auto-id";
import { Portal } from "@blend-ui/modal";
import styled, { css, ThemeProvider } from "styled-components";
import { space } from "styled-system";

import { useTheme, Box } from "@blend-ui/core";

import { BlendIcon } from "@blend-ui/icons";

//error
import bxsErrorCircle from "@iconify/icons-bx/bxs-error-circle";
//warning
import bxsError from "@iconify/icons-bx/bxs-error";
//info
import bxsInfoCircle from "@iconify/icons-bx/bxs-info-circle";
//success
import bxsCheckCircle from "@iconify/icons-bx/bxs-check-circle";

const minWidth = "353px";

const positionVariation = props => {
  //console.log("POS ", props);
  let pos = null;

  if (props.positionOption === "top-left") {
    pos = css`
      top: 0;
      left: 0;
      align-items: flex-start;
    `;
  }
  if (props.positionOption === "top-right") {
    pos = css`
      top: 0;
      right: 0;
      align-items: flex-end;
    `;
  }
  if (props.positionOption === "top-center") {
    pos = css`
      top: 0;
    `;
  }
  if (props.positionOption === "left-middle") {
    pos = css`
      top: 50%;
      left: 0;
      align-items: flex-start;
    `;
  }

  if (props.positionOption === "bottom-left") {
    pos = css`
      bottom: 0;
      left: 0;
      align-items: flex-start;
    `;
  }
  if (props.positionOption === "bottom-right") {
    pos = css`
      bottom: 0;
      right: 0;
    `;
  }
  if (props.positionOption === "bottom-center") {
    pos = css`
      bottom: 0;
    `;
  }
  if (props.positionOption === "right-middle") {
    pos = css`
      right: 0;
      top: 50%;
      align-items: flex-end;
    `;
  }
  if (props.positionOption === "center-middle") {
    pos = css`
      top: 50%;
    `;
  }
  return [pos];
};
const alertVariation = props => {
  //console.log("ALERT ", props);
  let styles = props.theme.componentStyles.alert[props.componentStyle];

  return [styles];
};

const Base = styled.div`
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  pointer-events: none;

  ${positionVariation}
  overflow:hidden;
  z-index: 10;

  ${props => props.theme.baseStyles};
  ${space}
`;

const AlertBase = styled.div`
  ${alertVariation}
  pointer-events: all;
  display: flex;
  align-items: center;

  padding: 7px;
  font-size: 12px;
  line-height: 18px;
  min-width: ${minWidth};
  /*
  justify-content:center;
  */
`;

const IconDiv = styled.div`
  margin: 8px;
  justify-content: center;
  height: 24px;
`;
const LabelDiv = styled.div`
  justify-content: center;
  font-weight: 600;
  /* margin-right: 8px; */
  ${space};
`;
const TextDiv = styled.div`
  justify-content: center;
  font-weight: 400;
`;

export const ToastContext = createContext({});

const ToastContextProvider = ({
  offset = "10px",
  type = "error",
  duration = 5000,
  id,
  position = "bottom-left",
  theme,
  children,
}) => {
  const defaultTheme = useTheme();
  theme = theme || defaultTheme;

  const [alerts, setAlerts] = useState([]);
  const alertContext = useRef(null);
  const timersId = useRef([]);

  const uuid = useId();
  const _id = id || uuid;
  const portalId = `blend-toast-portal-${_id}`;
  const toastId = `blend-toast-${_id}`;
  //const isOpen = true;
  const root = useRef(null);
  useEffect(() => {
    root.current = document.createElement("div");
    root.current.id = portalId;
    document.body.appendChild(root.current);
    const timersIdRef = timersId.current;

    return () => {
      timersIdRef.forEach(clearTimeout);
      if (root.current) document.body.removeChild(root.current);
    };
  }, []);

  const remove = useCallback(alert => {
    setAlerts(currentAlerts => {
      const lengthBeforeRemove = currentAlerts.length;
      const filteredAlerts = currentAlerts.filter(a => a.id !== alert.id);

      if (lengthBeforeRemove > filteredAlerts.length && alert.options.onClose) {
        alert.options.onClose();
      }

      return filteredAlerts;
    });
  }, []);

  const removeAll = useCallback(() => {
    alertContext.current.alerts.forEach(remove);
  }, [remove]);

  const check = useCallback(() => {
    //alertContext.current.alerts.forEach(remove)
    //console.log(alertContext.current.alerts);
    return alertContext.current.alerts;
  }, []);

  const onMouseEnter = e => {
    console.log("MOUSE ENTER", e.currentTarget.id);
    //console.log("MOUSE ENTER", e.currentTarget);
    //console.log(alertContext.current.alerts);
    console.log(timersId.current);
    timersId.current.forEach(clearTimeout);
    timersId.current = [];
    e.stopPropagation();
  };
  const onMouseLeave = e => {
    console.log("MOUSE LEAVE", e.currentTarget.id);
    //console.log("MOUSE ENTER", e.currentTarget);
    console.log(alertContext.current.alerts);
    setAlerts(currentAlerts => {
      const updatedAlerts = currentAlerts.map(alert => {
        if (alert.options.duration > 0) {
          const timerId = setTimeout(() => {
            remove(alert);

            timersId.current.splice(timersId.current.indexOf(timerId), 1);
          }, alert.options.duration);

          timersId.current.push(timerId);
          alert.timerId = timerId;
        }
        return alert;
      });

      return updatedAlerts;
    });
    e.stopPropagation();
  };
  /*
  const onMouseEnter = useCallback(() => {
    //alertContext.current.alerts.forEach(remove)
    console.log(alertContext.current.alerts);
    console.log(timersId.current);
  }, []);
  */

  const show = useCallback(
    (message = "", options = {}) => {
      const id = Math.random().toString(36).substr(2, 9);

      const _type = options.type || type;
      let alertIcon = null;
      let alertLabel = "";
      if (_type === "error") {
        alertIcon = bxsErrorCircle;
        alertLabel = "Error";
      } else if (_type === "warning") {
        alertIcon = bxsError;
        alertLabel = "Warning";
      } else if (_type === "info") {
        alertIcon = bxsInfoCircle;
        alertLabel = "Info";
      } else if (_type === "success") {
        alertIcon = bxsCheckCircle;
        alertLabel = "Success";
      }

      const alertOptions = {
        position: options.position || position,
        duration: options.duration || duration,
        type: _type,
        label: options.label || alertLabel,
        ...options,
      };

      const alert = {
        id,
        message,
        icon: alertIcon,
        options: alertOptions,
        timerId: null,
      };

      alert.close = () => remove(alert);

      if (alert.options.duration > 0) {
        const timerId = setTimeout(() => {
          remove(alert);

          timersId.current.splice(timersId.current.indexOf(timerId), 1);
        }, alert.options.duration);

        timersId.current.push(timerId);
        alert.timerId = timerId;
      }

      setAlerts(state => state.concat(alert));
      if (alert.options.onOpen) alert.options.onOpen();

      return alert;
    },
    // [position, remove, timeout, type]
    [position, duration, type],
  );
  const error = useCallback(
    (message = "", options = {}) => {
      options.type = "error";
      return show(message, options);
    },
    [show],
  );
  const warning = useCallback(
    (message = "", options = {}) => {
      options.type = "warning";
      return show(message, options);
    },
    [show],
  );

  const info = useCallback(
    (message = "", options = {}) => {
      options.type = "info";
      return show(message, options);
    },
    [show],
  );

  const success = useCallback(
    (message = "", options = {}) => {
      options.type = "success";
      return show(message, options);
    },
    [show],
  );

  alertContext.current = {
    alerts,
    show,
    remove,
    check,
    success,
    error,
    info,
    warning,
  };
  //console.log(alertContext);
  const baseProps = {
    positionOption: position,

    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,

    id: toastId,
  };

  return (
    <ToastContext.Provider value={alertContext}>
      {children}
      {root.current && (
        <Portal container={root.current}>
          <ThemeProvider theme={theme}>
            <Base {...baseProps}>
              {alerts.map(alert => (
                <AlertBase
                  componentStyle={alert.options.type}
                  key={alert.id}
                  style={{ margin: offset }}
                  id={alert.id}
                >
                  <IconDiv>
                    <BlendIcon iconify={alert.icon} />
                  </IconDiv>
                  {alert.options.title && (
                    <Box pt={8} pb={8}>
                      <LabelDiv>{alert.options.title}</LabelDiv>
                      <TextDiv>{alert.message}</TextDiv>
                    </Box>
                  )}
                  {typeof alert.options.title === "undefined" && (
                    <React.Fragment>
                      <LabelDiv mr={8}>{alert.options.label}</LabelDiv>
                      <TextDiv>{alert.message}</TextDiv>
                    </React.Fragment>
                  )}
                </AlertBase>
              ))}
            </Base>
          </ThemeProvider>
        </Portal>
      )}
    </ToastContext.Provider>
  );
};

/* Hook */
// ==============================
export const useToast = () => {
  const alertContext = useContext(ToastContext);
  console.log("CONTEXT ", alertContext);
  const alert = useMemo(() => {
    return alertContext.current;
  }, [alertContext]);
  return alert;
};

/* @component */
export default ToastContextProvider;
