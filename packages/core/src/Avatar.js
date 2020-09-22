import React, { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Box from "./Box";
import Text from "./Text";
import Image from "./Image";

const InitialsElement = styled(Box)`
  text-transform: uppercase;
  text-align: center;
  line-height: ${props => props.width + "px"};
`;

const Avatar = forwardRef(({ src, alt, width, initials, ...props }, ref) => {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        shape={"circle"}
        width={width}
        ref={ref}
        {...props}
      />
    );
  } else {
    const fontSize = width / (initials.length + 0.3);
    return (
      <InitialsElement
        borderWidth={1}
        borderStyle={"solid"}
        borderRadius={"50%"}
        fontSize={fontSize}
        width={width}
        height={width}
        colorStyle={"avatar"}
        ref={ref}
        {...props}
      >
        <Text as={"span"} colorStyle={"avatar"}>
          {initials}
        </Text>
      </InitialsElement>
    );
  }
});
Avatar.displayName = "Avatar";
Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  initials: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default Avatar;
