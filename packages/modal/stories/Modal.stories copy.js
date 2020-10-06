import React from "react";

//import {Text} from 'core';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "../src/Modal";

import { action } from "@storybook/addon-actions";

function _onCLose(event, msg) {
  console.log("CLOSE MODAL ", event, msg);
}
export default { title: "Modal" };

export const modal = () => (
  <Modal isOpen={true} onClose={action("closing")} scrollBehavior={"inside"}>
    <ModalContent>
      <ModalHeader divider>
        <div>Otsikko</div>
      </ModalHeader>
      <ModalBody height={"300px"}>
        <div>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </p>
          <p>
            Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit
            magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
            dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
            eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
            incididunt nisi consectetur esse laborum eiusmod pariatur proident
            Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
          </p>
          <p>
            Est velit labore esse esse cupidatat. Velit id elit consequat minim.
            Mollit enim excepteur ea laboris adipisicing aliqua proident
            occaecat do do adipisicing adipisicing ut fugiat. Consequat pariatur
            ullamco aute sunt esse. Irure excepteur eu non eiusmod. Commodo
            commodo et ad ipsum elit esse pariatur sit adipisicing sunt
            excepteur enim.
          </p>
          <p>
            Incididunt duis commodo mollit esse veniam non exercitation dolore
            occaecat ea nostrud laboris. Adipisicing occaecat fugiat fugiat
            irure fugiat in magna non consectetur proident fugiat. Commodo magna
            et aliqua elit sint cupidatat. Sint aute ullamco enim cillum anim
            ex. Est eiusmod commodo occaecat consequat laboris est do duis. Enim
            incididunt non culpa velit quis aute in elit magna ullamco in
            consequat ex proident.
          </p>
          <p>
            Dolore incididunt mollit fugiat pariatur cupidatat ipsum laborum
            cillum. Commodo consequat velit cupidatat duis ex nisi non aliquip
            ad ea pariatur do culpa. Eiusmod proident adipisicing tempor tempor
            qui pariatur voluptate dolor do ea commodo. Veniam voluptate
            cupidatat ex nisi do ullamco in quis elit.
          </p>
        </div>
      </ModalBody>
      <ModalFooter divider>
        <div>
          <button onClick={action("close footer button")}>
            Footer Close me
          </button>
        </div>{" "}
      </ModalFooter>
    </ModalContent>
  </Modal>
);
modal.story = {
  name: "Modal",
};
