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
//import { ThemeProvider, Box } from 'core'
import { Box, Grid, Cell, Divider, ThemeProvider } from "@blend-ui/core";
//import { withTheme,ThemeProvider  } from 'styled-components'

import PropTypes from "prop-types";

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
        onClose(event, "overlayClick");
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
  };

  return (
    <ModalContext.Provider value={context}>
      <Portal container={mountRef.current}>
        <ThemeProvider>
          {overLay && <ModalOverlay />}
          {children}
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
    } = useModalContext();
    const _contentRef = useForkRef(ref, contentRef);
    //const size='28rem';

    const modalSizes = {
      full: "100%",
      "3xs": "14rem",
      "2xs": "16rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
    };

    const isCentered = true;
    const colorModeStyles = {
      light: {
        bg: "white",
        boxShadow: `0 7px 14px 0 rgba(0,0,0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, .07)`,
      },
      dark: {
        bg: "gray",
        boxShadow: `rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px`,
      },
    };
    const boxStyleProps = colorModeStyles[colorStyle];
    let wrapperStyle = {};
    let contentStyle = {};

    if (isCentered) {
      wrapperStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };
    } else {
      contentStyle = {
        top: "3.75rem",
        mx: "auto",
      };
    }

    if (scrollBehavior === "inside") {
      wrapperStyle = {
        ...wrapperStyle,
        maxHeight: "calc(100vh - 7.5rem)",
        overflow: "hidden",
        top: "3.75rem",
      };

      contentStyle = {
        ...contentStyle,
        height: "100%",
        top: 0,
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
    const childrens = children.map(c => {
      //console.log(typeof c);
      //console.log(typeof c.type);
      //console.log(typeof c.type.name);
      if (c === null || c.type === null) {
        return null;
      }
      return c.type.displayName;
    });
    console.log("CHILDRENS ", childrens);

    /*  
ModalHeader.displayName = "DialogHeader";

ModalBody.displayName = "DialogBody";

ModalFooter.displayName = "DialogFooter";
*/

    const _ModalHeader =
      children[childrens.indexOf("ModalHeader")] ||
      children[childrens.indexOf("DialogHeader")] ||
      null;
    const _ModalBody =
      children[childrens.indexOf("ModalBody")] ||
      children[childrens.indexOf("DialogBody")] ||
      null;
    const _ModalFooter =
      children[childrens.indexOf("ModalFooter")] ||
      children[childrens.indexOf("DialogFooter")] ||
      null;
    return (
      <Box
        position="fixed"
        left="0"
        top="0"
        width="100%"
        /*height="100%"*/
        zIndex={zIndex}
        id={wrapperId}
        onClick={handleBackgroundClick}
        {...wrapperStyle}
      >
        <Box
          ref={_contentRef}
          as={"section"}
          outline={0}
          maxWidth={modalSizes[size] || size}
          width="100%"
          position="relative"
          display="flex"
          flexDirection="column"
          zIndex={zIndex}
          id={contentId}
          borderRadius={1}
          {...contentStyle}
          {...boxStyleProps}
          {...props}
        >
          <React.Fragment>
            {_ModalHeader}
            {_ModalBody}
            {_ModalFooter}
          </React.Fragment>
        </Box>
      </Box>
    );
  },
);

ModalContent.displayName = "ModalContent";
const ModalOverlay = props => {
  console.log("OVERLAY ", props);
  return (
    <Box
      position="fixed"
      bg="rgba(0,0,0,0.4)"
      left="0"
      top="0"
      width="100vw"
      height="100vh"
      zIndex="overlay"
      {...props}
    />
  );
};

ModalOverlay.displayName = "ModalOverlay";

const ModalHeader = ({ closeIcon, divider, children, ...props }) => {
  const { headerId } = useModalContext();
  //console.log('HEADER ',props);
  return (
    <React.Fragment>
      <Box id={headerId} as="header" position="relative">
        <Grid
          width={1}
          direction={"row"}
          alignItems={"center"}
          flexWrap={"nowrap"}
        >
          <Cell xs={6} {...props}>
            {children}
          </Cell>
          <Cell xs={6} textAlign={"right"} justify={"flex-end"} mr={1}>
            {closeIcon && <ModalClose />}
          </Cell>
        </Grid>
      </Box>
      {divider && <Divider />}
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
    {divider && <Divider />}
    <Box display="flex" as="footer" {...props}>
      {children}
    </Box>
  </React.Fragment>
);
ModalFooter.propTypes = {
  /** Footer wrapped components */
  children: PropTypes.node.isRequired,

  /** Divider between body and footer */
  divider: PropTypes.bool,
};
ModalFooter.displayName = "ModalFooter";

/*
ModalFooter.defaultProps = {
  justifyContent:'flex-end'
};
*/

const ModalBody = ({ children, ...props }) => {
  const { bodyId, scrollBehavior } = useModalContext();
  console.log("BODY ", scrollBehavior, children);
  let style = {};
  if (scrollBehavior === "inside") {
    style = { overflowY: "auto" };
  }

  return (
    <Box id={bodyId} display={"flex"} {...style} {...props}>
      {children}
    </Box>
  );
};

ModalBody.displayName = "ModalBody";

const CloseIconButton = styled.button`
  /* display: flex; */
  align-items: center;
  padding: 0;
  background: transparent;
  cursor: pointer;
  border: 0;
  margin: 0;
`;
const _Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 24px;
  height: 24px;
  &:hover {
    fill: red;
  }
`;
const ModalClose = () => {
  const { onClose } = useModalContext();

  return (
    <CloseIconButton onClick={onClose}>
      <_Icon viewBox="0 0 24 24">
        <path d="M21 19.1H3V5h18v14.1zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
        <path
          d="M21 19.1H3V5h18v14.1zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
          fill="none"
        />
        <path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41z" />
      </_Icon>
    </CloseIconButton>
  );
};
export { Modal, ModalContent, ModalBody, ModalFooter, ModalHeader };
