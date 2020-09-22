import React, { forwardRef } from "react";
import styled from "styled-components";
import { width } from "styled-system";
import PropTypes from "prop-types";

const shape = props => {
  let shapeCss = null;
  if (props.$shape) {
    if (props.$shape === "circle") shapeCss = { "border-radius": "50%" };
    if (props.$shape === "rounded")
      shapeCss = { "border-radius": props.theme.radii["avatar"] };
    if (props.$shape === "square") shapeCss = { height: props.width || "auto" };
  }
  return shapeCss;
};
//${props => (props.fontFamily ? props.fontFamily : "body")};
const ImageElement = styled.img.attrs(props => ({
  height: props.height || "auto",
}))`
  display: block;
  max-width: 100%;
  ${width}
  ${shape}
`;

const Image = forwardRef(({ alt, shape, ...props }, ref) => {
  return <ImageElement {...props} alt={alt} ref={ref} $shape={shape} />;
});
Image.displayName = "Image";
Image.defaultProps = {
  alt: "image",
};
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default Image;
