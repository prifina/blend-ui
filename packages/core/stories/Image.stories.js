import React from "react";
import Image from "../src/Image";

export default { title: "Image" };

export const img = () => <Image src={"https://picsum.photos/200/200"} />;
img.story = {
  name: "Image",
};

export const img2 = () => (
  <Image src={"https://picsum.photos/200/200"} shape={"circle"} alt={"Image"} />
);
img2.story = {
  name: "Image Circle",
};

export const img3 = () => (
  <Image
    src={"https://picsum.photos/200/200"}
    shape={"rounded"}
    alt={"Image"}
  />
);
img3.story = {
  name: "Image Rounded",
};

export const img4 = () => (
  <Image
    src={"https://picsum.photos/200/200"}
    alt={"Image"}
    shape={"square"}
    width={300}
  />
);
img4.story = {
  name: "Image Square",
};
