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

import { useTheme, Avatar } from "@blend-ui/core";

import { BlendIcon } from "@blend-ui/icons";

import bxHome from "@iconify/icons-bx/bx-home";
import bxBell from "@iconify/icons-bx/bx-bell";
import bxHistory from "@iconify/icons-bx/bx-history";
//import bxLogOut from '@iconify/icons-bx/bx-log-out';
import logoutIcon from "@iconify/icons-fe/logout";

const emptyAvatar =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNTkiIHZpZXdCb3g9IjAgMCA1OSA1OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjkuNSIgY3k9IjI5LjUiIHI9IjI5LjUiIGZpbGw9IiNDM0MyQzIiLz4KPHBhdGggZD0iTTIzLjY4NzUgMjIuMzk1NkMyMy42ODc1IDI1LjYwMDMgMjYuMjk1NCAyOC4yMDgxIDI5LjUgMjguMjA4MUMzMi43MDQ2IDI4LjIwODEgMzUuMzEyNSAyNS42MDAzIDM1LjMxMjUgMjIuMzk1NkMzNS4zMTI1IDE5LjE5MSAzMi43MDQ2IDE2LjU4MzEgMjkuNSAxNi41ODMxQzI2LjI5NTQgMTYuNTgzMSAyMy42ODc1IDE5LjE5MSAyMy42ODc1IDIyLjM5NTZaTTM5LjgzMzQgNDEuMTI0OEg0MS4xMjVWMzkuODMzMUM0MS4xMjUgMzQuODQ4NiAzNy4wNjc5IDMwLjc5MTUgMzIuMDgzNCAzMC43OTE1SDI2LjkxNjdDMjEuOTMwOSAzMC43OTE1IDE3Ljg3NSAzNC44NDg2IDE3Ljg3NSAzOS44MzMxVjQxLjEyNDhIMzkuODMzNFoiIGZpbGw9IiNGNUY4RjciLz4KPC9zdmc+Cg==";

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
  top: 0;
  right: 0;
  /* left: 0; */
  display: flex;
  align-items: flex-end;

  justify-content: center;
  flex-direction: column;
  /*
  justify-content: flex-end;
  flex-direction: row;
  */
  min-width: 100px;
  /* pointer-events: none; */

  overflow: hidden;

  z-index: 10;
  ${props => props.theme.baseStyles};
  ${space}
`;

const MenuBase = styled.div`
  min-width: 350px;
  background: #f5f8f7;
  box-shadow: -4px 0px 8px rgba(91, 92, 91, 0.1);
  border: 0;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 100vh;
  padding-top: 25px;
  padding-right: 25px;
  z-index: 12;
`;

const IconBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
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

export const UserMenuContext = createContext({});

function useIsMountedRef() {
  const isMountedRef = useRef(null);
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  });
  return isMountedRef;
}

const ModalDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 11;
  background-color: rgba(30, 29, 29, 0.1);
`;

const Badge = styled.span`
  position: absolute;
  top: ${props => (props.isOpen ? "20px" : "9px")};
  right: ${props => (props.isOpen ? "143px" : "9px")};
  padding: 3.5px 5.5px;
  border-radius: 50%;
  background: red;
  font-size: 10px;
  line-height: 10px;
  color: white;
  font-weight: 700;
`;

const UserMenuContextProvider = ({
  offset = "15px",
  id,
  position = "top-right",
  theme,
  onExit,
  onHome,
  children,
}) => {
  //console.log("ID ", id, id === null, typeof id);
  const defaultTheme = useTheme();
  theme = theme || defaultTheme;
  const menuContext = useRef(null);
  const [userMenu, setUserMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const isMountedRef = useIsMountedRef();
  //const [avatarWidth, setAvatarWidth] = useState(32);
  const [iconButtons, setIconButtons] = useState([false, true, false, false]);

  const [notificationCount, setNotificationCount] = useState(0);

  const uuid = useId();
  const _id = id || uuid;
  const portalId = `blend-usermenu-portal-${_id}`;
  const menuId = `blend-usermenu-${_id}`;
  const root = useRef(null);
  //const notificationLabel = useRef(null);

  const iconClick = (e, i) => {
    console.log("CLICK ", i);
    if (i === 0) {
      // logout
      setIsOpen(false);
      onExit();
    } else if (i === 3) {
      setIsOpen(false);
      onHome();
    } else {
      let buttons = iconButtons.map(ic => false);

      buttons[i] = true;
      setIconButtons(buttons);
      console.log("ICONS ", iconButtons, buttons);
    }
    //MenuArea = userMenu.options.recentApps;
  };

  useEffect(() => {
    root.current = document.createElement("div");
    root.current.id = portalId;
    document.body.appendChild(root.current);

    return () => {
      if (root.current) document.body.removeChild(root.current);
    };
  }, []);
  const onUpdate = useCallback(() => {
    console.log("UPDATE NOTIFICATION");
    setNotificationCount(111);
  }, []);

  const show = useCallback(
    (options = {}) => {
      const id = Math.random().toString(36).substr(2, 9);

      const menuOptions = {
        ...options,
      };

      const menu = {
        id,
        options: menuOptions,
      };
      setNotificationCount(menu.options.notifications || 0);
      setUserMenu(menu);
      return menu;
    },
    // [position, remove, timeout, type]
    [],
  );
  /*
  const success = useCallback(
    (message = "", options = {}) => {
      options.type = "success";
      return show(message, options);
    },
    [show],
  );
*/
  /*
  useEffect(() => {
    if (isMountedRef.current) {
      show({});
    }
  }, [isMountedRef]);
*/
  menuContext.current = {
    userMenu,
    show,
    onUpdate,
  };
  //console.log(alertContext);
  const baseProps = {
    positionOption: position,
    theme,
    /*
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
  */
    id: menuId,
    //w:window.innerWidth
  };

  //filter: drop-shadow(0px 4px 8px rgba(91, 92, 91, 0.25));
  /*
  width: 350px;
height: 1024px;
left: 1090px;
top: 0px;

background: #F5F8F7; const baseWhite = "#F5F8F7";
box-shadow: -4px 0px 8px rgba(91, 92, 91, 0.1);

ikonit
box-shadow: -4px 0px 8px rgba(91, 92, 91, 0.1);
box-shadow: 0px 4px 4px rgba(0, 132, 122, 0.6);

.notification .badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 50%;
  background: red;
  color: white;
}

*/

  return (
    <UserMenuContext.Provider value={menuContext}>
      {children}
      {root.current && (
        <Portal container={root.current}>
          <ThemeProvider theme={theme}>
            <Base {...baseProps}>
              {userMenu && !isOpen && (
                <React.Fragment>
                  <Avatar
                    src={userMenu.options.avatar}
                    initials={userMenu.options.initials}
                    alt={"avatar"}
                    width={userMenu.options.width || 32}
                    style={{
                      curson: "pointer",
                      margin: offset,
                      filter: "drop-shadow(0px 4px 8px rgba(91, 92, 91, 0.25))",
                    }}
                    effect={userMenu.options.effect || null}
                    /*
                    onMouseEnter={e => {
                      setAvatarWidth(42);
                    }}
                    onMouseLeave={e => {
                      setAvatarWidth(32);
                    }}
                    */
                    onClick={() => {
                      setIsOpen(prev => !prev);
                    }}
                  />
                  {userMenu.options.notifications > 0 && (
                    <Badge isOpen={false}>
                      {notificationCount > 99 ? "99+" : notificationCount}
                    </Badge>
                  )}
                </React.Fragment>
              )}
              {isOpen && (
                <React.Fragment>
                  <ModalDiv
                    onClick={() => {
                      setIsOpen(prev => !prev);
                    }}
                  />
                  <MenuBase>
                    <IconBar>
                      <div
                        style={{
                          borderRadius: "50%",
                          marginLeft: "15px",
                          boxShadow: "-4px 0px 8px rgba(91, 92, 91, 0.1)",
                          background:
                            "linear-gradient(180deg, #FFFFFF 0%, #E6E8ED 100%)",
                          position: "relative",
                          left: "-112px",
                        }}
                      >
                        <BlendIcon
                          iconify={logoutIcon}
                          color={"#00847A"}
                          onClick={e => iconClick(e, 0)}
                        />
                      </div>
                      <div
                        style={{
                          borderRadius: "50%",
                          marginLeft: "15px",
                          boxShadow: "0px 4px 4px rgba(0, 132, 122, 0.6)",
                          background:
                            "linear-gradient(180deg, #FFFFFF 0%, #E6E8ED 100%)",
                        }}
                      >
                        <BlendIcon
                          iconify={bxBell}
                          color={"#00847A"}
                          onClick={e => iconClick(e, 1)}
                        />
                      </div>
                      {notificationCount > 0 && (
                        <Badge isOpen={true}>
                          {notificationCount > 99 ? "99+" : notificationCount}
                        </Badge>
                      )}
                      <div
                        style={{
                          borderRadius: "50%",
                          marginLeft: "15px",
                          boxShadow: "-4px 0px 8px rgba(91, 92, 91, 0.1)",
                          background:
                            "linear-gradient(180deg, #FFFFFF 0%, #E6E8ED 100%)",
                        }}
                      >
                        <BlendIcon
                          iconify={bxHistory}
                          color={"#00847A"}
                          onClick={e => iconClick(e, 2)}
                        />
                      </div>
                      <div
                        style={{
                          borderRadius: "50%",
                          marginLeft: "15px",
                          marginRight: "20px",
                          boxShadow: "-4px 0px 8px rgba(91, 92, 91, 0.1)",
                          background:
                            "linear-gradient(180deg, #FFFFFF 0%, #E6E8ED 100%)",
                        }}
                      >
                        <BlendIcon
                          iconify={bxHome}
                          color={"#00847A"}
                          onClick={e => iconClick(e, 3)}
                        />
                      </div>
                      <Avatar
                        src={userMenu.options.avatar}
                        initials={userMenu.options.initials}
                        width={userMenu.options.width || 32}
                        alt={"avatar"}
                        style={{
                          curson: "pointer",
                          filter:
                            "drop-shadow(0px 4px 8px rgba(91, 92, 91, 0.25))",
                        }}
                      />
                    </IconBar>
                    {iconButtons[1] && <div></div>}
                    {iconButtons[2] && (
                      <div>
                        <userMenu.options.RecentApps />
                      </div>
                    )}
                  </MenuBase>
                </React.Fragment>
              )}
            </Base>
          </ThemeProvider>
        </Portal>
      )}
    </UserMenuContext.Provider>
  );
};

/* Hook */
// ==============================
export const useUserMenu = () => {
  const menuContext = useContext(UserMenuContext);
  console.log("CONTEXT ", menuContext);
  const menu = useMemo(() => {
    return menuContext.current;
  }, [menuContext]);
  return menu;
};

/* @component */
export default UserMenuContextProvider;
