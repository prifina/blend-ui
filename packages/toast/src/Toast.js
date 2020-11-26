import React, {
  forwardRef,
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";

import { hideOthers } from "aria-hidden";
import { useId } from "@reach/auto-id";
import exenv from "exenv";
import styled, { css, ThemeProvider } from "styled-components";

import { space } from "styled-system";

import { Portal } from "@blend-ui/modal";

import { useTheme } from "@blend-ui/core";

import { BlendIcon } from "@blend-ui/icons";

//error
import bxsErrorCircle from "@iconify/icons-bx/bxs-error-circle";
//warning
import bxsError from "@iconify/icons-bx/bxs-error";
//info
import bxsInfoCircle from "@iconify/icons-bx/bxs-info-circle";
//success
import bxsCheckCircle from "@iconify/icons-bx/bxs-check-circle";

const { canUseDOM } = exenv;

const minWidth = "353px";
/*
const error = css`
  background: #fed7d7;
  border-color: #f40431;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  color: #f40431;
`;

const warning = css`
  background: #fcefc2;
  border-color: #cb8e12;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  color: #cb8e12;
`;

const info = css`
  background: #d1eaf9;
  border-color: #007aff;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  color: #007aff;
`;

const success = css`
  background: #def0d8;
  border-color: #7caf4c;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  color: #7caf4c;
`;
*/
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

/*
const Base = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${props => props.theme.zIndices["modalBase"]};
  ${props => props.theme.baseStyles};
`;
*/

/*
const buttonVariation = props => {
    //console.log("VARIATION ", props);
    let buttonProps = props.theme.componentStyles.button[props.variation];
    let hoverVariations = null;
    if (props.variation === "link")
      hoverVariations = css`
        &:hover {
          text-decoration: underline;
          color: ${props => props.theme.colors.baseLinkHover}!important;
          background-color: transparent !important;
          border: 0 !important;
        }
      `;
    //console.log(hoverVariations);
    return [buttonProps, hoverVariations];
  };
*/
const alertVariation = props => {
  //console.log("ALERT ", props);
  let styles = props.theme.componentStyles.alert[props.componentStyle];
  /*
  let styles = null;
  if (props.componentStyle === "error") {
    styles = error;
  }
  if (props.componentStyle === "warning") {
    styles = warning;
  }
  if (props.componentStyle === "info") {
    styles = info;
  }
  if (props.componentStyle === "success") {
    styles = success;
  }
*/
  return [styles];
};
const positionVariation = props => {
  //console.log("POS ", props);
  let pos = null;
  if (props.positionOption === "top-left") {
    pos = css`
      top: 0;
      left: 0;
    `;
  }
  if (props.positionOption === "top-right") {
    pos = css`
      top: 0;
      right: 0;
    `;
  }
  if (props.positionOption === "top-center") {
    console.log(window.innerWidth, props);
    const centerLeft = window.innerWidth / 2 - parseInt(props.width) / 2 + "px";
    pos = css`
      top: 0;
      left: ${centerLeft};
    `;
  }
  if (props.positionOption === "left-middle") {
    const middleLeft = window.innerHeight / 2 - props.baseHeight / 2 + "px";
    pos = css`
      top: ${middleLeft};
      left: 0;
    `;
  }
  if (props.positionOption === "bottom-left") {
    pos = css`
      bottom: 0;
      left: 0;
    `;
  }
  if (props.positionOption === "bottom-right") {
    pos = css`
      bottom: 0;
      right: 0;
    `;
  }
  if (props.positionOption === "bottom-center") {
    console.log(window.innerWidth, props);
    const centerLeft = window.innerWidth / 2 - parseInt(props.width) / 2 + "px";
    pos = css`
      bottom: 0;
      left: ${centerLeft};
    `;
  }
  if (props.positionOption === "right-middle") {
    const middleRight = window.innerHeight / 2 - props.baseHeight / 2 + "px";
    pos = css`
      top: ${middleRight};
      right: 0;
    `;
  }
  if (props.positionOption === "center-middle") {
    const middle = window.innerHeight / 2 - props.baseHeight / 2 + "px";
    const center = window.innerWidth / 2 - parseInt(props.width) / 2 + "px";
    pos = css`
      top: ${middle};
      left: ${center};
    `;
  }
  return [pos];
};

const Base = styled.div`
  position: fixed;
  ${positionVariation}
  width: ${props => props.width};
  /* height:${props => props.baseHeight + "px"}; */
  overflow:hidden;
  z-index: 10;
  /* border: 1px solid red; */
  display:flex;
  align-items: center;
  ${props => props.theme.baseStyles};
  ${space}
`;

/*
export function useLatestRef<T>(value: T) {
    const ref = React.useRef(value)
  
    React.useEffect(() => {
      ref.current = value
    }, [value])
  
    return ref
  }
  


export function useTimeout(callback: Function, delay: number | null) {
    const savedCallback = useLatestRef(callback)
  
    React.useEffect(() => {
      if (delay == null) return undefined
  
      let timeoutId: number | null = null
  
      timeoutId = window.setTimeout(() => {
        savedCallback.current?.()
      }, delay)
  
      return () => {
        if (timeoutId) {
          window.clearTimeout(timeoutId)
        }
      }
    }, [delay, savedCallback])
  }


export const useUpdateEffect: typeof React.useEffect = (effect, deps) => {
    const mounted = React.useRef(false)
    React.useEffect(() => {
      if (mounted.current) {
        return effect()
      }
      mounted.current = true
      return undefined
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
  
    return mounted.current
  }
*/

function useLatestRef(value) {
  const ref = React.useRef(value);

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
}

function useTimeout(callback, delay) {
  const savedCallback = useLatestRef(callback);

  React.useEffect(() => {
    if (delay == null) return undefined;

    let timeoutId = null;

    timeoutId = window.setTimeout(() => {
      savedCallback.current?.();
    }, delay);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay, savedCallback]);
}

const ToastContext = createContext({});
const useToastContext = () => useContext(ToastContext);

/*
When the toast is open, it is rendered within a portal and all its siblings have aria-hidden set to true so the only thing screen readers see is the toast. To enable this behavior, set useInert to true.
*/
const Toast = forwardRef(
  (
    {
      isOpen = true,
      escKey = true,
      container,
      useInert = false,
      id,
      width = "200px",
      duration = 5000,
      position = "bottom-left",
      onClose,
      theme,
      children,
      ...props
    },
    ref,
  ) => {
    if (!isOpen) return null;

    const defaultTheme = useTheme();
    theme = theme || defaultTheme;

    //console.log("THEME ", theme);
    const [delay, setDelay] = React.useState(duration);
    const [openToast, setOpenToast] = useState(true);

    const uuid = useId();
    const _id = id || uuid;
    const portalId = `blend-toast-portal-${_id}`;
    const toastId = `blend-toast-${_id}`;

    const mountRef = useAriaHider({
      isOpen,
      id: portalId,
      enableInert: useInert,
      container,
    });

    const useUpdateEffect = (effect, deps) => {
      const mounted = React.useRef(false);
      React.useEffect(() => {
        if (mounted.current) {
          return effect();
        }
        mounted.current = true;
        return undefined;
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, deps);

      return mounted.current;
    };

    useUpdateEffect(() => {
      setDelay(duration);
    }, [duration]);

    const closeToast = () => {
      setOpenToast(false);
      if (onClose) {
        onClose();
      }
      console.log("Toast CLOSE");
    };

    if (duration > 0) {
      useTimeout(closeToast, delay);
    }

    const keyPress = useCallback(
      e => {
        if (e.key === "Escape" && openToast) {
          setOpenToast(false);
          if (onClose) {
            onClose();
          }
          //console.log("I pressed ESC");
        }
      },
      [onClose, setOpenToast, openToast],
    );

    useEffect(() => {
      if (escKey) {
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
      }
    }, [keyPress, escKey]);

    const onMouseEnter = () => setDelay(null);
    const onMouseLeave = () => setDelay(duration);

    const context = {
      isOpen,
      theme,
    };
    const baseProps = {
      width,
      positionOption: position,
      baseHeight: 100,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      id: toastId,
    };
    return (
      <React.Fragment>
        {openToast && (
          <ToastContext.Provider value={context}>
            <Portal container={mountRef.current}>
              <ThemeProvider theme={theme}>
                <Base {...baseProps} {...props} ref={ref}>
                  {children}
                </Base>
              </ThemeProvider>
            </Portal>
          </ToastContext.Provider>
        )}
        {!openToast && null}
      </React.Fragment>
    );
  },
);

const AlertBase = styled.div`
  ${alertVariation}
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
  margin-right: 8px;
`;
const TextDiv = styled.div`
  justify-content: center;
  font-weight: 400;
`;
/*
<ClickableIcon
iconify={isOpen ? iconUp : iconDown}
sizevariation={size}
variation={variation}
/>
*/
const ToastAlerts = forwardRef(
  ({ theme, children, width, alertType, ...props }, ref) => {
    width = width || minWidth;

    let alertIcon = null;
    let alertLabel = "";
    if (alertType === "error") {
      alertIcon = bxsErrorCircle;
      alertLabel = "Error";
    } else if (alertType === "warning") {
      alertIcon = bxsError;
      alertLabel = "Warning";
    } else if (alertType === "info") {
      alertIcon = bxsInfoCircle;
      alertLabel = "Info";
    } else if (alertType === "success") {
      alertIcon = bxsCheckCircle;
      alertLabel = "Success";
    }

    return (
      <Toast ref={ref} {...props} width={width} theme={theme}>
        <AlertBase componentStyle={alertType}>
          <IconDiv>
            <BlendIcon iconify={alertIcon} />
          </IconDiv>
          <LabelDiv>{alertLabel}</LabelDiv>
          <TextDiv>{children}</TextDiv>
        </AlertBase>
      </Toast>
    );
  },
);

const ToastError = forwardRef((props, ref) => {
  return <ToastAlerts {...props} alertType={"error"} />;
});

const ToastWarning = forwardRef((props, ref) => {
  return <ToastAlerts {...props} alertType={"warning"} />;
});

const ToastInfo = forwardRef((props, ref) => {
  return <ToastAlerts {...props} alertType={"info"} />;
});

const ToastSuccess = forwardRef((props, ref) => {
  return <ToastAlerts {...props} alertType={"success"} />;
});

ToastError.displayName = "ErrorToast";
Toast.Error = ToastError;
ToastWarning.displayName = "WarningToast";
Toast.Warning = ToastWarning;
ToastInfo.displayName = "InfoToast";
Toast.Info = ToastInfo;
ToastSuccess.displayName = "SuccessToast";
Toast.Success = ToastSuccess;

Toast.displayName = "Toast";

export { Toast };
