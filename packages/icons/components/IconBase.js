import React from 'react';
import styled, {css} from 'styled-components'
import {themeGet} from '@styled-system/theme-get'
import {space} from 'styled-system'
import PropTypes from 'prop-types'
import { default as styledProps} from '@styled-system/prop-types'

/**
 * Gets the color of a palette shade, using props.color as
 * the palette color. If palette shade does not exist, falls
 * back to theme.colors
 *
 * @see This function is a copy of the core function located
 * in /core/src/utils.js in order to avoid circular issues
 *
 * @example getPaletteColor('dark')(props) => will return the dark
 * shade of theme.palette[props.color].dark
 * @example getPaletteColor('primary.base')(props) => theme.palette.primary.base
 * @example getPaletteColor('primary', 'base')(props) => theme.palette.primary.base
 */
const getPaletteColor = (...args) => props => {
    let color = args.length === 2 ? args[0] : props.color
    let shade = args.length === 2 ? args[1] : args[0]

    const colorShade = shade.match(/^([a-z]+)\.([a-z]+)$/)

    if (colorShade) {
        color = colorShade[0]
        shade = colorShade[1]
    }

    return (
        themeGet(`palette.${color}.${shade}`)(props) ||
        themeGet(`palette.${color}`)(props) ||
        themeGet(`colors.${color}`)(props) ||
        color
    )
}

const color = props => {
    if (props.color) {
        return css`
      fill: ${getPaletteColor('base')(props)};
    `
    }

    return null
}

/*  not used ???
const stroke = props => {
    if (props.stroke) {
        return css`
      stroke: ${getPaletteColor('base')(props)};
    `
    }

    return null
}
*/
const bg = props => {
    if (props.bg) {
        return css`
      background-color: ${getPaletteColor(props.bg, 'base')(props)};
    `
    }

    return null
}
const width = props => {
    //console.log('WIDTH ',props);
    if (props.width) {
        return css`
      width: ${props.width};
    `
    }

    return null
}

const IconBase = (props) => {
    //console.log('ICON BASE 3 ',props);
    const {
        className,
        ...rest
    } = props;

   
    /*const {
        className,
        size,
        color,
        theme,
        ...rest
    } = props;
    */
    /*
    console.log('LOG ',color,  props);
    //const themeColor=`${themeGet('colors.blue','#000')}`;
    //console.log('THEME ',themeColor);
    let defaultSize='24px';
    let defaultColor='black';
    if (typeof color!=='undefined') {
        if (color.startsWith('#')) {
            defaultColor = color;
        } else {
            if (typeof theme!=='undefined' && typeof theme.colors[color]!=='undefined') {
                defaultColor=theme.colors[color];
            } else {
                defaultColor=themeGet(`colors.${color}`,'black');
            }
        }
    }
*/

    /*
    // DEPRECATED
        if (typeof size!=='undefined') {
            if (['sm','md','lg'].indexOf(size)>-1) {
                defaultSize=iconSizes[size];
            } else {
                defaultSize=size;
                if (!size.endsWith('px')) {
                    defaultSize+='px';
                }
            }
            defaultSize+='!important';
        }
    */
    /*
    // DEPRECATED
        if (typeof color!=='undefined') {
            if (color.startsWith('#')) {
                defaultColor=color;
            } else {
                if (typeof theme.colors[color]!='undefined' && typeof theme.colors[color]==='string') {
                    defaultColor=theme.colors[color];
                }
                const colorParts= color.split('.');
                console.log(colorParts,theme.colors[colorParts[0]],typeof theme.colors[colorParts[0]]);
                if (typeof theme.colors[colorParts[0]]!='undefined' && typeof theme.colors[colorParts[0]]==='object') {
                    const pos=Number(color.split('.').pop());
                    if (typeof theme.colors[colorParts[0]][pos]!=='undefined' ) {
                        defaultColor = theme.colors[colorParts[0]][pos];
                    }
                }
            }
        }
        */
    /*

    const ThemeIcon = css`
      fill: ${defaultColor};
      flex:none;
      font-size: ${defaultSize};
      height: ${defaultSize};
      margin-left: auto;
      transition: fill 0.25s;
      width: ${defaultSize};
    `
    */

    const IconPrimitive = styled('svg')(
        {
            flex: 'none'
        },
        space,
        width,
        color,
        bg
    )
    /*
    const IconPrimitive = styled.svg`
  ${ThemeIcon}
`*/

    /*
        const Svg = styled('svg')(
            {
                flex: 'none'
            },
            space,
            width,
            color,
            bg
        )

        Svg.propTypes = {
            ...space.propTypes,
            ...width.propTypes,
            ...color.propTypes
        }

        export default Svg
        */
    IconPrimitive.propTypes = {
        /** Styled space props */
        ...styledProps.space,
        /** Styled color props */
        ...styledProps.color,

        //...space.propTypes,
        //...color.propTypes,
        width:PropTypes.string
    }

    return (<IconPrimitive {...rest} className={className}/>)
}

IconBase.defaultProps = {
    width: '24px',
    stroke: 'white'
}
IconBase.propTypes = {
    className:PropTypes.string
}
IconBase.isIcon = true

IconBase.displayName = 'Icon';

/*   IconBase.propTypes = {
       //children: PropTypes.element.isRequired
       children: PropTypes.any.isRequired
   };
*/
export default IconBase;
/*
const IconBase = styled.svg`
  flex: none;
  height: 24px;
  transition: fill 0.25s;
  width: 24px;
`;
export default IconBase;


 */
