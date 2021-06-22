import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Box from "./Box";
import Text from "./Text";
import Image from "./Image";

const emptyAvatar =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNTkiIHZpZXdCb3g9IjAgMCA1OSA1OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjkuNSIgY3k9IjI5LjUiIHI9IjI5LjUiIGZpbGw9IiNDM0MyQzIiLz4KPHBhdGggZD0iTTIzLjY4NzUgMjIuMzk1NkMyMy42ODc1IDI1LjYwMDMgMjYuMjk1NCAyOC4yMDgxIDI5LjUgMjguMjA4MUMzMi43MDQ2IDI4LjIwODEgMzUuMzEyNSAyNS42MDAzIDM1LjMxMjUgMjIuMzk1NkMzNS4zMTI1IDE5LjE5MSAzMi43MDQ2IDE2LjU4MzEgMjkuNSAxNi41ODMxQzI2LjI5NTQgMTYuNTgzMSAyMy42ODc1IDE5LjE5MSAyMy42ODc1IDIyLjM5NTZaTTM5LjgzMzQgNDEuMTI0OEg0MS4xMjVWMzkuODMzMUM0MS4xMjUgMzQuODQ4NiAzNy4wNjc5IDMwLjc5MTUgMzIuMDgzNCAzMC43OTE1SDI2LjkxNjdDMjEuOTMwOSAzMC43OTE1IDE3Ljg3NSAzNC44NDg2IDE3Ljg3NSAzOS44MzMxVjQxLjEyNDhIMzkuODMzNFoiIGZpbGw9IiNGNUY4RjciLz4KPC9zdmc+Cg==";

const InitialsElement = styled(Box)`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  // text-align: center;
  line-height: ${props => props.width + "px"};
  border: ${props => (props.outerCircle ? `${props.width / 5}px solid #F5F8F7` : "")};
  // position:'absolute';

`;

const ImageElement = styled(Image)`
  border: ${props => (props.outerCircle ? `${props.width / 5}px solid #F5F8F7` : "")};

`;


const Avatar = forwardRef(
  (
    { src, alt, width, initials = "", effect, outerCircle, ...props },
    ref,
  ) => {
    const [avatarWidth, setAvatarWidth] = useState(width);
    const [fontWeight, setFontWeight] = useState("normal");

    const onMouseEnter = e => {
      //console.log("ENTER ", effect);

      if (effect && effect.hover) {
        setAvatarWidth(effect.hover.width);
        setFontWeight(900);
      }
      //setAvatarWidth(42);
    };
    const onMouseLeave = e => {
      if (effect && effect.hover) {
        setAvatarWidth(width);
        setFontWeight("normal");
      }
    };

    if (src || initials === "") {
      return (
        <ImageElement
          src={src || emptyAvatar}
          alt={alt}
          shape={"circle"}
          width={avatarWidth}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={ref}
          {...props}
          outerCircle={outerCircle}

         

        />
      );
    } else {
      const fontSize = width / (initials.length + 1.7);

      return (
        <InitialsElement
          borderWidth={1}
          borderStyle={"solid"}
          borderRadius={"50%"}
          fontSize={fontSize}
          fontWeight={fontWeight}
          width={avatarWidth}
          height={avatarWidth}
          colorStyle={"avatar"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          ref={ref}
          {...props}
          outerCircle={outerCircle}
        >
          <Text as={"span"} colorStyle={"avatar"}>
            {initials}
          </Text>
        </InitialsElement>
      );
    }
  },
);
Avatar.displayName = "Avatar";
Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  initials: PropTypes.string,
  outerCircle: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default Avatar;
