import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import { ToastContextProvider, useToast } from "@blend-ui/toast";

import { ThemeProvider } from "@blend-ui/core";

const MyToast = props => (
  <React.Fragment>
    <div>Toasts</div>
    <div>
      <button
        onClick={() => {
          props.toast.show("Toast message", {
            title: "Test title",
            duration: 0,
          });
          props.toast.check();
        }}
      >
        New Error Toast
      </button>
      <button
        onClick={() => {
          props.toast.warning("Toast message", {});
        }}
      >
        New Warning Toast
      </button>
      <button
        onClick={() => {
          props.toast.info("Toast message", {});
        }}
      >
        New Info Toast
      </button>
      <button
        onClick={() => {
          props.toast.success("Toast message", {});
        }}
      >
        New Success Toast
      </button>
    </div>
  </React.Fragment>
);

function ComponentDist() {
  //const toast = React.useContext(ToastContext);
  const toast = useToast();
  console.log("Toast context inside Component", typeof toast, toast);
  //console.log("ALERTS", toast.alerts.length > 0 ? toast.alerts[0] : null);

  return <MyToast toast={toast} />;
}

describe("Creating component", () => {
  // otherwise createPortal throws warning...
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  test("basic toast", () => {
    const component = renderer.create(
      <ThemeProvider>
        <ToastContextProvider>
          <ComponentDist />
        </ToastContextProvider>
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    //console.log(JSON.stringify(tree));
    expect(tree).toMatchObject({
      type: "div",
      props: { className: "ThemeProvider__Base-sc-1w52cfi-0 fMEevm" },
      children: [
        { type: "div", props: {}, children: ["Toasts"] },
        {
          type: "div",
          props: {},
          children: [
            { type: "button", props: {}, children: ["New Error Toast"] },
            { type: "button", props: {}, children: ["New Warning Toast"] },
            { type: "button", props: {}, children: ["New Info Toast"] },
            { type: "button", props: {}, children: ["New Success Toast"] },
          ],
        },
        {
          type: "div",
          props: {
            id: "blend-toast-1",
            className: "ToastProvider__Base-sc-1bn3r4q-0 jERVHl",
          },
          children: null,
        },
      ],
    });
  });
});
