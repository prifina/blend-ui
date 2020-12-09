import React, { useEffect, lazy } from "react";
import UserMenuContextProvider, { useUserMenu } from "../src/FloatingUserMenu";
import { avatar } from "./avatar-base64";
import { RecentApps } from "../src/RecentApps";

export default { title: "UserMenu" };
//export const userMenu = () => <div>Testing...</div>;

export function userMenu() {
  //const toast = React.useContext(ToastContext);

  const userMenu = useUserMenu();
  console.log("Context inside Component", typeof userMenu);
  //console.log("ALERTS", toast.alerts.length > 0 ? toast.alerts[0] : null);
  //console.log(RecentApps);

  useEffect(() => {
    userMenu.show({ avatar: avatar, notifications: 7, RecentApps: RecentApps });
    //console.log(RecentApps);
  }, [avatar]);

  return (
    <React.Fragment>
      <div>User menu test</div>
      {/* 
      <RecentApps />
      */}
    </React.Fragment>
  );
}

/*
export const userMenu = () => (
  <React.Fragment>
    <div>Testing....</div>
    <UserMenuContextProvider>Menu here</UserMenuContextProvider>
  </React.Fragment>
);


userMenu.story = {
  name: "UserMenu",
};

*/
userMenu.story = {
  name: "UserMenu",
  decorators: [
    Story => {
      return (
        <UserMenuContextProvider>
          <Story />
        </UserMenuContextProvider>
      );
    },
  ],
};
