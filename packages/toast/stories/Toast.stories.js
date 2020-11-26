import React from "react";
import { Toast } from "../src/Toast";

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
    <Toast.Error m={15}>
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
