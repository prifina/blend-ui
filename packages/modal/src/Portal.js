import React, { Children, cloneElement, useState, forwardRef } from "react";
import { useMemo, useLayoutEffect, useEffect } from "react";
import { findDOMNode, createPortal } from "react-dom";
import PropTypes from "prop-types";

const useEnhancedEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

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
    return (refValue) => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

function getContainer(container) {
  container = typeof container === "function" ? container() : container;
  return findDOMNode(container);
}
/**
 * Portal Component
 *
 * The following code is a derivative of the amazing work done by the Material UI team.
 * Original source: https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Portal/Portal.js
 */

const Portal = forwardRef(
  ({ children, container, isDisabled = false, onRendered }, ref) => {
    const [mountNode, setMountNode] = useState(null);
    const handleRef = useForkRef(children.ref, ref);

    useEnhancedEffect(() => {
      if (!isDisabled) {
        setMountNode(getContainer(container) || document.body);
      }
    }, [container, isDisabled]);

    useEnhancedEffect(() => {
      if (mountNode && !isDisabled) {
        setRef(ref, mountNode);
        return () => {
          setRef(ref, null);
        };
      }

      return undefined;
    }, [ref, mountNode, isDisabled]);

    useEnhancedEffect(() => {
      if (onRendered && (mountNode || isDisabled)) {
        onRendered();
      }
    }, [onRendered, mountNode, isDisabled]);

    if (isDisabled) {
      Children.only(children);
      return cloneElement(children, {
        ref: handleRef,
      });
    }

    return mountNode ? createPortal(children, mountNode) : mountNode;
  }
);

Portal.propTypes = {
  /** Portal wrapped components */
  children: PropTypes.node.isRequired,
  /** Clone disabled portal  */
  isDisabled: PropTypes.bool,
  /** Portal inside existing container */
  //container:PropTypes.node,
  /** Callback after rendering portal */
  onRendered: PropTypes.func,
};
Portal.displayName = "Portal";

export default Portal;
