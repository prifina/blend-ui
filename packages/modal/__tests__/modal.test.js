import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

//import { ThemeProvider } from "@blend-ui/core";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@blend-ui/modal";

import { action } from "@storybook/addon-actions";

import { theme as defaultTheme, ThemeProvider } from "@blend-ui/core";

const MyModal = () => (
  <Modal
    isOpen={true}
    onClose={action("closing")}
    scrollBehavior={"inside"}
    theme={defaultTheme}
  >
    <ModalContent>
      <ModalHeader>
        <div style={{ fontSize: "18px", lineHeight: "24px", fontWeight: 600 }}>
          Title
        </div>
      </ModalHeader>
      <ModalBody>
        <div>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </p>
        </div>
      </ModalBody>
      <ModalFooter>
        <div style={{ width: "100%", textAlign: "center" }}>
          <button>Cancel</button>
          <button>Decline</button>
        </div>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

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

  test("basic modal", () => {
    const component = renderer.create(
      <ThemeProvider>
        <MyModal />
      </ThemeProvider>,
    );
    const tree = component.toJSON();
    //console.log(JSON.stringify(tree));
    expect(tree).toMatchObject({
      type: "div",
      props: { className: "ThemeProvider__Base-sc-1w52cfi-0 fMEevm" },
      children: [
        {
          type: "div",
          props: { className: "Modal__Base-sc-14l83rw-0 bfnEgE" },
          children: [
            {
              type: "div",
              props: {
                width: "100vw",
                height: "100vh",
                className: "Modal__WrapperBox-sc-14l83rw-1 LUqND",
              },
              children: null,
            },
            {
              type: "div",
              props: {
                id: "modal-1-wrapper",
                display: "flex",
                width: "100%",
                height: "100vh",
                className: "Modal__WrapperBox-sc-14l83rw-1 lCkyp",
              },
              children: [
                {
                  type: "section",
                  props: {
                    width: "100%",
                    display: "flex",
                    id: "modal-1",
                    overflow: "hidden",
                    className: "Modal__WrapperBox-sc-14l83rw-1 gjjZBN",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        id: "modal-1-header",
                        className: "Modal__WrapperBox-sc-14l83rw-1 ihxXxO",
                      },
                      children: [
                        {
                          type: "div",
                          props: {
                            style: {
                              fontSize: "18px",
                              lineHeight: "24px",
                              fontWeight: 600,
                            },
                          },
                          children: ["Title"],
                        },
                      ],
                    },
                    {
                      type: "div",
                      props: {
                        id: "modal-1-body",
                        display: "flex",
                        className: "Modal__WrapperBox-sc-14l83rw-1 gWgiik",
                      },
                      children: [
                        {
                          type: "div",
                          props: {},
                          children: [
                            {
                              type: "p",
                              props: {},
                              children: [
                                "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.",
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "footer",
                      props: {
                        display: "flex",
                        className: "Modal__WrapperBox-sc-14l83rw-1 cstLze",
                      },
                      children: [
                        {
                          type: "div",
                          props: {
                            style: { width: "100%", textAlign: "center" },
                          },
                          children: [
                            { type: "button", props: {}, children: ["Cancel"] },
                            {
                              type: "button",
                              props: {},
                              children: ["Decline"],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  });
});
