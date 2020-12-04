import React from "react";
import ToastContextProvider, { useToast } from "../src/ToastProvider";

export default { title: "Toast PROVIDER" };

export function Component2() {
  //const toast = React.useContext(ToastContext);
  const toast = useToast();
  console.log("Toast context inside Component", typeof toast, toast);
  //console.log("ALERTS", toast.alerts.length > 0 ? toast.alerts[0] : null);

  return (
    <React.Fragment>
      <div>Toasts</div>
      <div>
        <button
          onClick={() => {
            toast.show("Toast message", {});
            toast.check();
          }}
        >
          New Error Toast
        </button>
        <button
          onClick={() => {
            toast.warning("Toast message", {});
          }}
        >
          New Warning Toast
        </button>
        <button
          onClick={() => {
            toast.info("Toast message", {});
          }}
        >
          New Info Toast
        </button>
        <button
          onClick={() => {
            toast.success("Toast message", {});
          }}
        >
          New Success Toast
        </button>
      </div>
    </React.Fragment>
  );
}
/*
Component.story = {
  name: "Component",
  decorators: [ADecorator],
};
*/
Component2.story = {
  name: "useToast",
  decorators: [
    Story => {
      return (
        <ToastContextProvider>
          <Story />
        </ToastContextProvider>
      );
    },
  ],
};
