import React, {
  useState,
  useCallback,
  useEffect,
  createContext,
  useContext,
  useRef,
  useMemo,
} from "react";
import ReactDOM from "react-dom";

import { useId } from "@reach/auto-id";
import { Portal } from "@blend-ui/modal";
import styled, { css, ThemeProvider } from "styled-components";
import { space } from "styled-system";

import { useTheme } from "@blend-ui/core";

import { BlendIcon } from "@blend-ui/icons";

const Base = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  pointer-events: none;

  overflow: hidden;
  z-index: 10;

  ${space}
`;

export const UserMenuContext = createContext({});

const UserMenuContextProvider = ({
  offset = "10px",
  id,
  position = "top-right",
  theme,
  children,
}) => {
  const defaultTheme = useTheme();
  theme = theme || defaultTheme;
  const uuid = useId();
  const _id = id || uuid;
  const portalId = `blend-user-menu-portal-${_id}`;
  const menuId = `blend-user-menu-${_id}`;
  //const isOpen = true;

  const root = useRef(null);

  useEffect(() => {
    root.current = document.createElement("div");
    root.current.id = portalId;
    document.body.appendChild(root.current);

    return () => {
      if (root.current) document.body.removeChild(root.current);
    };
  }, [portalId]);

  const baseProps = {
    positionOption: position,
    /*
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
*/
    id: menuId,
  };

  return (
    <UserMenuContext.Provider value={null}>
      {children}
      {root.current && (
        <Portal container={root.current}>
          <div>Testing here </div>
        </Portal>
      )}
    </UserMenuContext.Provider>
  );
};
/*
<ThemeProvider theme={theme}>
            <Base {...baseProps}>
              <div>Testing Menu</div>
            </Base>
          </ThemeProvider>
*/
export { UserMenuContextProvider };
