import React from "react";
import { Toast } from "../src/Toast";
import { ToastContext } from "../src/ToastProvider";
//import ToastContextProvider from "../src/ToastProvider";
//import useToast from "../src/useToast";
import useToast, { ToastContextProvider } from "../src/useToast";

export default { title: "Toast" };

export const toast = () => (
  <React.Fragment>
    <div>Testing...</div>
    <Toast>
      <div>Toast content</div>
    </Toast>
    <Toast duration={7000} position={"top-right"} escKey={true}>
      <div>Toast2 content</div>
    </Toast>
  </React.Fragment>
);
toast.story = {
  name: "Toast",
};

export const toastError = () => (
  <React.Fragment>
    <div>Testing...</div>
    <Toast.Error duration={0} m={15}>
      <div>Toast content</div>
    </Toast.Error>
  </React.Fragment>
);
toastError.story = {
  name: "Toast Error",
};

export const toastWarning = () => (
  <React.Fragment>
    <div>Testing...</div>
    <Toast.Warning>
      <div>Toast content</div>
    </Toast.Warning>
  </React.Fragment>
);
toastWarning.story = {
  name: "Toast Warning",
};

export const toastInfo = () => (
  <React.Fragment>
    <div>Testing...</div>
    <Toast.Info>
      <div>Toast content</div>
    </Toast.Info>
  </React.Fragment>
);
toastInfo.story = {
  name: "Toast Info",
};

export const toastSuccess = () => (
  <React.Fragment>
    <div>Testing...</div>
    <Toast.Success
      onClose={() => {
        console.log("ON CLOSE HERE");
      }}
    >
      <div>Toast content</div>
    </Toast.Success>
  </React.Fragment>
);
toastSuccess.story = {
  name: "Toast Success",
};

/*
const themeProviderDecorator = story => (
    <ThemeProvider>
        <Box px={5}>{story()}</Box>
    </ThemeProvider>
)
*/

export const toastTest = () => {
  const toast = useToast();
  console.log("TOAST ", typeof toast);
  return (
    <React.Fragment>
      <div>Testing...</div>
      <button
        onClick={() =>
          toast({
            content: "Toast here",
            toastType: "success",
          })
        }
      >
        TOAST
      </button>
    </React.Fragment>
  );
};
toastTest.story = {
  name: "useToast",
  decorator: [ToastContextProvider],
};
/*
export const toastTest = () => {
  const toast = useToast();
  console.log("TOAST ", toast);
  return (
    <React.Fragment>
      <ToastContextProvider>
        <div>Testing...</div>
        <button onClick={() => toast.show("Toast msg", { toastType: "error" })}>
          TOAST
        </button>
      </ToastContextProvider>
    </React.Fragment>
  );
};
toastTest.story = {
  name: "useToast",
};
*/
/*
const AContext = React.createContext();

function ADecorator(StoryFn) {
  return (
    <AContext.Provider value="hello">
      <StoryFn />
    </AContext.Provider>
  );
}

export function Component() {
  const context = React.useContext(AContext);
  console.log("context inside Component", { context });
  return <div>This is my normal page </div>;
}

Component.story = {
  name: "Component",
  decorators: [ADecorator],
};
*/
