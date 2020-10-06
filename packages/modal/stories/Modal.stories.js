import React from "react";

//import {Text} from 'core';
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "../src/Modal";

import { action } from "@storybook/addon-actions";

import { default as defaultTheme } from "../../core/src/theme/theme";

function _onCLose(event, msg) {
  console.log("CLOSE MODAL ", event, msg);
}
export default { title: "Modal" };

export const modal = () => (
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
modal.story = {
  name: "Modal",
};
