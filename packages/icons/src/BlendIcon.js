import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
//import * as icons from "./index";
//import * as mdiIcons from "./icons-mdi/iconSet";
//import * as feIcons from "./icons-fe/iconSet";
//import { InlineIcon, Icon } from "@iconify/react";
import { InlineIcon } from "@iconify/react";
import { themeGet } from "@styled-system/theme-get";

//const prefix = "Mat";

const getPaletteColor = (...args) => props => {
  let color = args.length === 2 ? args[0] : props.color;
  let shade = args.length === 2 ? args[1] : args[0];

  const colorShade = shade.match(/^([a-z]+)\.([a-z]+)$/i);

  if (colorShade) {
    color = colorShade[0];
    shade = colorShade[1];
  }
  //console.log("GET ", color, shade);
  //console.log("GET THEME", themeGet(`colors.${color}`)(props));
  return (
    themeGet(`palette.${color}.${shade}`)(props) ||
    themeGet(`palette.${color}`)(props) ||
    themeGet(`colors.${color}`)(props) ||
    color
  );
};

/*

function uc(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
*/

const BaseIcon = props => {
  //console.log("ICON ", props);
  const {
    name,
    title,
    size,
    stroke,
    iconify,
    color,
    width,
    theme,
    ...rest
  } = props;
  let _color = color;
  //console.log("PALETTE ", _paletteColor2);
  if (typeof props.theme !== "undefined") {
    //console.log('PALETTE ',getPaletteColor(color)(props));
    const _paletteColor = getPaletteColor(color)(props);
    //console.log('PALETTE COLOR ',_paletteColor,typeof _paletteColor);
    if (
      _paletteColor &&
      typeof _paletteColor !== "string" &&
      Object.keys(_paletteColor).length > 0
    ) {
      //console.log('PALETTE COLOR OBJECT MATCH ',_paletteColor);
      _color = _paletteColor.base;
    } else if (_paletteColor && typeof _paletteColor === "string") {
      //console.log('PALETTE COLOR MATCH ',_paletteColor);
      _color = _paletteColor;
    } else {
      _color = color;
    }

    //console.log('COLOR ',_color,_paletteColor);
  }
  const _width = width || size.replace("px", "");
  if (iconify) {
    return (
      <span {...rest}><InlineIcon icon={iconify} width={_width} color={_color} /></span>
    );
  } else {
    console.trace("iconify prop is missing");
    return null;
    /*
    let icons = {};
    icons = Object.assign(icons, feIcons);

    const Component = icons[name] || icons[prefix + name];

    if (!Component) {
      if (process.env.NODE_ENV !== "production") {
        console.trace(
          name ? `icon ${name} does not exist` : "icon is missing name prop",
        );
      }
      return null;
    } else {
     
      return (
        <Icon
          icon={Component}
          title={title || name}
          width={_width}
          color={_color}
          {...rest}
        />
      );
     
    }
    */
  }
};

const BlendIcon = styled(BaseIcon)`
  outline: none;
`;

BlendIcon.isIcon = true;
BlendIcon.displayName = "BlendIcon";

BlendIcon.defaultProps = {
  size: "24px",
  stroke: "white",
  color: "currentColor",
};

BlendIcon.propTypes = {
  /** Icon name */
  /*
  name: (props, key, componentName) => {
    const name = props[key]
    if (!icons[name] && !icons[prefix+name]) {
      return new Error(
        `Unknown name prop \`${name}\` supplied to \`${componentName}\``
      )
    }
  },
   /** Icon name */
  name: PropTypes.string,
  /** Fill color */
  color: PropTypes.string,
  /** Line color */
  stroke: PropTypes.string,
  /** Icon height&width */
  size: PropTypes.string,
  /** Alternate title */
  title: PropTypes.string,
  /** Iconify Icons */
  iconify: PropTypes.object,

  /*
  titleId: PropTypes.string,
  desc: PropTypes.string,
  descId: PropTypes.string
  */
};

//export default withTheme(Icon);
export default BlendIcon;
