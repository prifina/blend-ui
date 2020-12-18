import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import { space } from "styled-system";
import PropTypes from "prop-types";
import { Flex, useTheme, Link } from "@blend-ui/core";
import { BlendIcon } from "@blend-ui/icons";

function spacing(theme, margin) {
  if (typeof margin === "number" && typeof theme !== "undefined") {
    return theme.space[margin];
  } else if (typeof margin === "string") {
    return "margin";
  } else {
    return null;
  }
}

const itemStyle = props => {
  return props.spacing
    ? { "margin-bottom": spacing(props.theme, props.spacing) }
    : null;
};

const listPadding = props =>
  props.listPadding ? { "padding-inline-start": props.listPadding } : null;

const listStyle = props =>
  props.listStyleType ? { "list-style-type": props.listStyleType } : null;
const listStylePos = props =>
  props.listStylePos
    ? { "list-style-position": props.listStylePosition }
    : null;

const OrderedList = styled.ol`
/* */
${listStyle}
${listStylePos}
${listPadding}
${space}
`;

const UnorderedList = styled.ul`
/* */
${listStyle}
${listStylePos}
${listPadding}
${space}
`;

const textInDivider = css`
  display: flex;
  align-items: center;
  text-align: center;
  ::before,
  ::after {
    content: "";
    flex: 1;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: ${props => props.theme.colors.baseDividers || "#C9E4E0"};
  }
  ::before {
    margin-right: 0.25em;
  }
  ::after {
    margin-left: 0.25em;
  }
`;
const normalDivider = css`
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.baseDividers || "#C9E4E0"};
`;

const ListDivider = styled.li`
  /* */
  ${itemStyle};
  ${props => (props.children ? textInDivider : normalDivider)};
`;

const listTheme = css`
  &:hover {
    background-color: ${props => props.theme.colors.baseHover || "#1CAA9F"};
    color: ${props => props.theme.colors.basePrimary || "#1E1D1D"};
  }
  &:active {
    color: ${props => props.theme.colors.baseSecondary || "#00847A"};
  }
  cursor: pointer;
  color: ${props =>
    props.active
      ? props.theme.colors.baseSecondary || "#00847A"
      : props.theme.colors.basePrimary || "#1E1D1D"};
`;

ListDivider.displayName = "ListDivider";

const LiElement = styled.li`
  /* */
  ${itemStyle}
  ${listTheme}
`;

//const ListContext = createContext();
//const useListContext = () => useContext(ListContext);

const List = forwardRef(
  (
    {
      styleType = "none",
      stylePos = "inside",
      listPadding = "0px",
      spacing,
      theme,
      children,
      ...props
    },
    ref,
  ) => {
    const defaultTheme = useTheme();
    theme = theme || defaultTheme;
    const unOrdered = ["none", "circle", "disc", "square"];
    const Items = React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return;

      return React.cloneElement(child, { spacing, theme });
    });

    return (
      <React.Fragment>
        {unOrdered.indexOf(styleType) > -1 && (
          <UnorderedList
            ref={ref}
            listStyleType={styleType}
            listStylePosition={stylePos}
            listPadding={listPadding}
            {...props}
          >
            {Items}
          </UnorderedList>
        )}
        {unOrdered.indexOf(styleType) === -1 && (
          <OrderedList
            ref={ref}
            listStyleType={styleType}
            listStylePosition={stylePos}
            listPadding={listPadding}
            {...props}
          >
            {Items}
          </OrderedList>
        )}
      </React.Fragment>
    );
  },
);

List.displayName = "List";

/*
const Link = forwardRef ( { href, ...props }, ref) => {
  return <LinkElement href={href} {...props} ref={ref} />;
});
*/
const ListItem = forwardRef(
  (
    {
      variation = "default",
      href,
      target = "_blank",
      iconName,
      iconify,
      iconSize = "20",
      iconColor,
      children,
      ...props
    },
    ref,
  ) => {
    //console.log("REF ", ref);
    // just incase icons are used as li content
    let isIcon = false;
    React.Children.map(children, (child, index) => {
      if (
        React.isValidElement(child) &&
        typeof child.type.isIcon !== "undefined" &&
        (child.type.isIcon || child.type.isIconButton)
      ) {
        isIcon = true;
      }
    });

    let items = undefined;
    if (isIcon) {
      items = <Flex alignItems={"center"}>{children}</Flex>;
    } else {
      if (variation === "icon" && iconify) {
        return (
          <Flex alignItems={"center"}>
            <BlendIcon
              iconify={iconify}
              size={iconSize}
              color={iconColor || "currentColor"}
            />
            {children}
          </Flex>
        );
      } else if (variation === "icon" && iconName) {
        return (
          <Flex alignItems={"center"}>
            <BlendIcon
              name={iconName}
              size={iconSize}
              color={iconColor || "currentColor"}
            />
            {children}
          </Flex>
        );
      } else if (variation === "link") {
        items = (
          <Link href={href} target={target}>
            {children}
          </Link>
        );
      } else if (variation === "icon-link") {
        if (variation === "icon-link" && iconify) {
          return (
            <Flex alignItems={"center"}>
              <BlendIcon
                iconify={iconify}
                size={iconSize}
                color={iconColor || "currentColor"}
              />
              <Link href={href} target={target}>
                {children}
              </Link>
            </Flex>
          );
        } else if (variation === "icon-link" && iconName) {
          return (
            <Flex alignItems={"center"}>
              <BlendIcon
                name={iconName}
                size={iconSize}
                color={iconColor || "currentColor"}
              />
              <Link href={href} target={target}>
                {children}
              </Link>
            </Flex>
          );
        }
      } else {
        items = children;
      }
    }
    return (
      <LiElement ref={ref} {...props}>
        {items}
      </LiElement>
    );
  },
);
/*
export const deprecatedColorValue = () => (props, propName, componentName) => {
  if (
    process.env.NODE_ENV !== "production" &&
    props.theme &&
    props[propName] &&
    !hasPaletteColor({ color: props[propName], ...props })
  ) {
    return new Error(
      `The color value of \`${props[propName]}\` for \`${componentName}\` is deprecated and will be removed in a future release. Please use a palette color instead.`
    );
  }
};
*/

const variationPropCheck = () => (props, propName, componentName) => {
  //console.log("NODE ", process.env.NODE_ENV);
  if (
    process.env.NODE_ENV !== "production" &&
    typeof props["href"] === "undefined" &&
    ["link", "icon-link"].indexOf(props["variation"]) > -1
  ) {
    return new Error(
      `The href value for \`${componentName}\` is required, when variation type is link or icon-link.`,
    );
  }
  if (
    process.env.NODE_ENV !== "production" &&
    typeof props["iconify"] === "undefined" &&
    typeof props["iconName"] === "undefined" &&
    ["icon", "icon-link"].indexOf(props["variation"]) > -1
  ) {
    console.log("PROP TYPES ", props);
    return new Error(
      `The iconify|iconName value for \`${componentName}\` is required, when variation type is icon or icon-link.`,
    );
  }
};

ListItem.propTypes = {
  //variation: PropTypes.oneOf(["default", "icon", "link", "icon-link"]),
  variation: variationPropCheck(),
};
ListItem.displayName = "ListItem";

const typeList = [
  "none",
  "circle",
  "disc",
  "square",
  "decimal",
  "decimal-leading-zero",
  "lower-alpha",
  "lower-roman",
  "upper-alpha",
  "upper-roman",
];
List.propTypes = {
  styleType: PropTypes.oneOf(typeList),
};

export { List, ListDivider, ListItem };
