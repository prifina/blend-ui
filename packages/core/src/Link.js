import React, { forwardRef } from "react";

import styled from "styled-components";
import { space, typography } from "styled-system";
import PropTypes from "prop-types";

const LinkElement = styled.a.attrs(props => ({
  rel: props.target === "_blank" ? "noopener" : null,
}))`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.colors.textLink};

  &:hover {
    color: ${props => props.theme.colors.baseLinkHover};
    text-decoration: underline;
  }
  ${space}
  ${typography}
`;

const Link = forwardRef(({ href, ...props }, ref) => {
  return <LinkElement href={href} {...props} ref={ref} />;
});

Link.displayName = "Link";
Link.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};
export default Link;
