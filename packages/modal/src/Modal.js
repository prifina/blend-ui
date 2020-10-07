import React, {
  useRef,
  useEffect,
  createContext,
  useContext,
  useMemo,
  forwardRef,
} from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
//import FocusLock from "react-focus-lock/dist/cjs";
import Portal from "./Portal";
import { hideOthers } from "aria-hidden";
import { useId } from "@reach/auto-id";
import exenv from "exenv";
import styled from "styled-components";

import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose,
} from "styled-system";
import { ThemeProvider } from "styled-components";

//import { Box, Grid, Cell, Divider, ThemeProvider } from "@blend-ui/core";
//

import PropTypes from "prop-types";

const systemProps = compose(
  layout,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox,
  /*colorStyles,*/
);

////////////////////////////////////////////////////////////////////////

const { canUseDOM } = exenv;
const ModalContext = createContext({});
const useModalContext = () => useContext(ModalContext);

////////////////////////////////////////////////////////////////////////

function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

function useForkRef(refA, refB) {
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return refValue => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

const wrapEvent = (theirHandler, ourHandler) => event => {
  if (theirHandler) {
    theirHandler(event);
  }

  if (!event.defaultPrevented) {
    return ourHandler(event);
  }
};

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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${props => props.theme.zIndices["modalBase"]};
  ${props => props.theme.baseStyles};
`;

/**
 - Modal Component
**/
const Modal = props => {
  const {
    isOpen,
    onClose,
    blockScrollOnMount,
    closeOnEsc,
    closeOnOutsideClick,
    useInert,
    scrollBehavior,
    isCentered,
    addAriaLabels,
    preserveScrollBarGap,
    container,
    returnFocusOnClose,
    children,
    id,
    size,
    overLay,
    theme,
  } = props;

  const formatIds = id => ({
    content: `modal-${id}`,
    header: `modal-${id}-header`,
    body: `modal-${id}-body`,
    wrapper: `modal-${id}-wrapper`,
  });

  if (!isOpen) return null;

  const contentRef = useRef(null);
  const uuid = useId();
  const _id = id || uuid;

  // console.log('ID ',_id);
  const contentId = formatIds(_id)["content"];
  const headerId = formatIds(_id)["header"];
  const bodyId = formatIds(_id)["body"];
  const wrapperId = formatIds(_id)["wrapper"];
  const portalId = `blend-portal-${_id}`;

  let addAriaLabelledby = false;
  let addAriaDescribedby = false;

  if (typeof addAriaLabels === "object") {
    addAriaLabelledby = addAriaLabels["header"];
    addAriaDescribedby = addAriaLabels["body"];
  }

  if (typeof addAriaLabels === "boolean") {
    addAriaLabelledby = addAriaLabels;
    addAriaDescribedby = addAriaLabels;
  }
  const mountRef = useAriaHider({
    isOpen,
    id: portalId,
    enableInert: useInert,
    container,
  });
  console.log("MOUNT REF ", mountRef);

  useEffect(() => {
    const dialogNode = contentRef.current;
    if (isOpen && blockScrollOnMount) {
      disableBodyScroll(dialogNode, {
        reserveScrollBarGap: preserveScrollBarGap,
      });
    }
    return () => enableBodyScroll(dialogNode);
  }, [isOpen, blockScrollOnMount, preserveScrollBarGap]);

  // Handle Escape keydown
  useEffect(() => {
    function handleKeydown(event) {
      if (event.key === "Escape" && closeOnEsc) {
        onClose(event, "pressedEscape");
      }
    }
    if (isOpen && !closeOnOutsideClick) {
      //if (isOpen) {
      canUseDOM && document.addEventListener("keydown", handleKeydown);
    }

    return () => {
      canUseDOM && document.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen, onClose, closeOnEsc, closeOnOutsideClick]);

  function handleBackgroundClick(e) {
    console.log("OUTSIDE CLICK ", e, wrapperId);
    //console.log('PORTAL ',contentRef.current,'CLICK TARGET',e.target);
    if (e.target) {
      console.log("TARGET ", e.target.id);
      if (e.target.id === wrapperId) {
        onClose(e, "overlayClick");
      }
    }
  }

  const context = {
    isOpen,
    closeOnOutsideClick,
    onClose,
    contentRef,
    closeOnEsc,
    handleBackgroundClick,
    contentId,
    bodyId,
    headerId,
    wrapperId,
    scrollBehavior,
    size,
    isCentered,
    theme,
  };

  return (
    <ModalContext.Provider value={context}>
      <Portal container={mountRef.current}>
        <ThemeProvider theme={theme}>
          <Base>
            {overLay && <ModalOverlay />}
            {children}
          </Base>
        </ThemeProvider>
      </Portal>
    </ModalContext.Provider>
  );
};
Modal.displayName = "Modal";
Modal.defaultProps = {
  overLay: true,
  closeOnOutsideClick: true,
  closeOnEsc: false,
  size: "lg",
  blockScrollOnMount: false,
  useInert: true,
  scrollBehavior: "outside",
  isCentered: true,
  addAriaLabels: true,
  returnFocusOnClose: true,
};
Modal.propTypes = {
  isCentered: PropTypes.bool,
  blockScrollOnMount: PropTypes.bool,
  useInert: PropTypes.bool,
  addAriaLabels: PropTypes.bool,
  returnFocusOnClose: PropTypes.bool,

  /** Modal wrapped components */
  children: PropTypes.node.isRequired,

  /** Closes dialog, when Esc-key is pressed  */
  closeOnEsc: PropTypes.bool,

  /** Overlay under the dialog */
  overLay: PropTypes.bool,

  /** Closes dialog, when overlay is clicked  */
  closeOnOutsideClick: PropTypes.bool,

  /** Callback function, what is called after dialog closes  */
  onClose: PropTypes.func,

  /** Modal body scroll behaviour  */
  scrollBehavior: PropTypes.string,
};
/*
const testProps = props => {
  console.log("PROPS ", props);
  return null;
};
*/
const WrapperBox = styled("div")`
  ${systemProps}
`;

const ModalContent = forwardRef(
  (
    {
      onClick,
      children,
      zIndex = "modal",
      noStyles,
      colorStyle = "light",
      ...props
    },
    ref,
  ) => {
    const {
      closeOnOutsideClick,
      onClose,
      contentRef,
      closeOnEsc,
      handleBackgroundClick,
      contentId,
      wrapperId,
      size,
      scrollBehavior,
      isCentered,
      theme,
    } = useModalContext();
    const _contentRef = useForkRef(ref, contentRef);
    //const size='28rem';

    let wrapperStyle = {};
    let contentStyle = {
      backgroundColor: theme.colors.baseWhite,
    };

    //position="fixed"
    //left="0"
    //top="0"
    //width="100%"
    /*height="100%"*/

    if (isCentered) {
      wrapperStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      };
    } else {
      contentStyle = {
        top: "3.75rem",
        mx: "auto",
      };
    }

    if (scrollBehavior === "inside") {
      /*
      wrapperStyle = {
        ...wrapperStyle,
        maxHeight: "calc(100vh - 7.5rem)",
        overflow: "hidden",
        top: "3.75rem",
      };
      */

      contentStyle = {
        ...contentStyle,
        /*height: "100%",*/
        top: 0,
        maxHeight: "calc(100vh - 7.5rem)",
        overflow: "hidden",
      };
    }

    if (scrollBehavior === "outside") {
      wrapperStyle = {
        ...wrapperStyle,
        overflowY: "auto",
        overflowX: "hidden",
      };

      contentStyle = {
        ...contentStyle,
        my: "3.75rem",
        top: 0,
      };
    }

    if (noStyles) {
      wrapperStyle = {};
      contentStyle = {};
    }

    console.log("CHILD LOOP ", typeof children, children);
    return (
      <WrapperBox
        zIndex={theme.zIndices[zIndex]}
        id={wrapperId}
        onClick={handleBackgroundClick}
        {...wrapperStyle}
      >
        <WrapperBox
          ref={_contentRef}
          as={"section"}
          outline={0}
          maxWidth={theme.sizeOptions.modalSizes[size] || size}
          width="100%"
          position="relative"
          display="flex"
          flexDirection="column"
          zIndex={theme.zIndices[zIndex]}
          id={contentId}
          borderRadius={20}
          {...contentStyle}
          {...props}
        >
          <React.Fragment>{children}</React.Fragment>
        </WrapperBox>
      </WrapperBox>
    );
  },
);

ModalContent.displayName = "ModalContent";

const ModalOverlay = props => {
  console.log("OVERLAY ", props);
  const { theme } = useModalContext();
  //console.log("CONTEXT ", theme);
  return (
    <WrapperBox
      position="fixed"
      bg={theme.colors.baseModalBackground || "rgba(30, 29, 29, 0.75)"}
      left="0"
      top="0"
      width="100vw"
      height="100vh"
      zIndex={theme.zIndices["overlay"]}
      {...props}
    />
  );
};

ModalOverlay.displayName = "ModalOverlay";
const ModalBody = ({ children, ...props }) => {
  const { bodyId, scrollBehavior } = useModalContext();
  console.log("BODY ", scrollBehavior, children);
  let style = {};
  if (scrollBehavior === "inside") {
    style = { overflowY: "auto" };
  }

  return (
    <WrapperBox id={bodyId} display={"flex"} {...style} {...props}>
      {children}
    </WrapperBox>
  );
};

ModalBody.displayName = "ModalBody";

const ModalHeader = ({ closeIcon, divider, children, ...props }) => {
  const { headerId } = useModalContext();
  //console.log('HEADER ',props);
  return (
    <React.Fragment>
      <WrapperBox id={headerId} textAlign="center" mt={20} mb={10}>
        {children}
      </WrapperBox>
      {divider && <hr />}
    </React.Fragment>
  );
};
ModalHeader.defaultProps = {
  closeIcon: true,
  ml: 1,
};
ModalHeader.propTypes = {
  /** Header wrapped components */
  children: PropTypes.node.isRequired,
  /** Shows dialog close box  */
  closeIcon: PropTypes.bool,
  /** Divider between header and body */
  divider: PropTypes.bool,
};
ModalHeader.displayName = "ModalHeader";

const ModalFooter = ({ divider, children, ...props }) => (
  <React.Fragment>
    {divider && <hr />}
    <WrapperBox display="flex" as="footer" mt={20} mb={20} {...props}>
      {children}
    </WrapperBox>
  </React.Fragment>
);
ModalFooter.propTypes = {
  /** Footer wrapped components */
  children: PropTypes.node.isRequired,

  /** Divider between body and footer */
  divider: PropTypes.bool,
};
ModalFooter.displayName = "ModalFooter";

export { Modal, ModalContent, ModalBody, ModalHeader, ModalFooter };
