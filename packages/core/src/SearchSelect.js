import React, { forwardRef, useRef, useState, useReducer } from "react";
import styled from "styled-components";
import { space, typography } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";
import PropTypes from "prop-types";
import { BlendIcon } from "@blend-ui/icons";
//import { dropDownIcon as ChevronDown } from "@blend-ui/icons/icons-fe/iconSet";
//import { default as ChevronDown } from "@iconify/icons-fe/drop-down";
//import bxCaretDown from "@iconify/icons-bx/bx-caret-down";
//import bxCaretUp from "@iconify/icons-bx/bx-caret-up";
import bxChevronUp from "@iconify/icons-bx/bx-chevron-up";
import bxChevronDown from "@iconify/icons-bx/bx-chevron-down";

import { usePopper } from "react-popper";
import { useTheme } from "./theme/ThemeProvider";
import AutoComplete from "./AutoComplete";

import Box from "./Box";
//import PropTypes from "prop-types";

const selectVariations = ["fill", "outline"];

const componentStyle = props => {
  console.log("VARIATION ", props);
  let selectProps = props.theme.componentStyles.select[props.sizevariation];
  let variationProps = null;
  if (props.variation === "fill") {
    variationProps = {
      color: props.theme.colors.baseWhite,
      backgroundColor: props.theme.colors.baseSecondary,
      border: "none",
    };
  }
  return [selectProps, variationProps];
};

const SelectElement = styled.select`
  appearance: none;
  display: block;
  width: 100%;
  font-family: ${props => props.theme.fonts.body};
  margin:0;
  ${componentStyle}
  ${space} ${typography}

  ::-ms-expand {
    display: none;
  }
  &:disabled {
    opacity: 0.25;
  }
  option {
    display:none;
    }
  &:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
`;
const PopperContainer = styled.div`
  /* */
  padding: 15px;
  padding-bottom:24px;
  box-shadow: ${props =>
    props.theme.boxShadows[5]}; //0px 4px 8px rgba(91, 92, 91, 0.2); from theme
  border-radius: 5px; // from theme
  background-color: ${props =>
    props.theme.colors.baseWhite}; // #f5f8f7;  from theme

   width:${props => props.width}; 
  .arrow {
    position: absolute;
    width: 20px;
    height: 20px;
    transform: none !important;
    left: 1rem !important;
    z-index: -1;

    &:after {
      content: " ";
      position: absolute;
      top: -19px; // we account for the PopperContainer padding
      left: 0;
      transform: rotate(45deg);
      width: 20px;
      height: 20px;
      background-color: ${props => props.theme.colors.baseWhite}; // from theme
      /*box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1); */
    }
  }
  &[data-popper-placement^="top"] > .arrow {
    bottom: -30px;
    /*
    :after {
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
    */
  }
`;
/*
const ClickableIcon = styled(BlendIcon).attrs(props => ({
  color: props.theme.colors.black,
}))`
  pointer-events: none;
  margin-left: -32px;
`;
*/
const ClickableIcon = styled(BlendIcon)`
  color: ${props =>
    props.variation === "fill"
      ? props.theme.colors.baseWhite
      : props.theme.colors.basePrimary};
  pointer-events: none;
  margin-left: ${props => (props.sizevariation === "sm" ? "-22px" : "-32px")};
`;
const generateKey = pre => {
  return `${pre}_${new Date().getTime()}`;
};

const mergeRefs = (...refs) => {
  const filteredRefs = refs.filter(Boolean);
  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 0) return filteredRefs[0];
  return inst => {
    for (const ref of filteredRefs) {
      if (typeof ref === "function") {
        ref(inst);
      } else if (ref) {
        ref.current = inst;
      }
    }
  };
};
const SearchSelect = forwardRef(
  ({ size, options, defaultValue, showList = false, ...props }, ref) => {
    const theme = useTheme();

    let iconUp;
    let iconDown;
    if (size === "sm") {
      iconDown = bxChevronDown;
      iconUp = bxChevronUp;
    }
    /*
  const styledChildren = children.map((child, i) => {
    console.log(child);
  });
*/
    let activeItem = -1;
    const styledChildren = options.map((opt, i) => {
      if (defaultValue && opt.key === defaultValue) {
        activeItem = i;
      }
      return (
        <option key={generateKey("opt-") + "-" + i} value={opt.key}>
          {opt.value}
        </option>
      );
    });

    const componentRef = useRef();
    const selectRef = ref || componentRef;
    //const [openSelect, setOpenSelect] = useState(false);

    const [referenceElement, setReferenceElement] = useState(ref);
    const [popperElement, setPopperElement] = useState(null);

    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      placement: "bottom-start",
      modifiers: [
        { name: "arrow", options: { element: arrowElement } },
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
      ],
    });
    const [state, setState] = useReducer(
      (state, newState) => ({ ...state, ...newState }),
      {
        openSelect: false,
        popperStyles: { ...styles.popper },
        containerWidth: 0,
        selectValue: defaultValue || "",
      },
    );
    //let popperStyles = { ...styles.popper };
    const selectOnClick = e => {
      //setOpenSelect(true);
      //setState({openSelect:true})
      //console.log(selectRef.current.parentElement.getBoundingClientRect());
      const selectElement = selectRef.current.parentElement.getBoundingClientRect();
      const currentState = state.openSelect;

      setState({
        openSelect: !currentState,
        containerWidth: selectElement.width + "px",
      });
    };
    const onSelect = selectedKey => {
      console.log("SELECT ", selectedKey);

      setState({
        openSelect: !state.openSelect,
        selectValue: selectedKey,
      });
    };
    return (
      <React.Fragment>
        {state.openSelect && (
          <PopperContainer
            theme={theme}
            ref={setPopperElement}
            style={styles.popper}
            width={state.containerWidth}
            {...attributes.popper}
          >
            <div ref={setArrowElement} style={styles.arrow} className="arrow" />
            <AutoComplete
              suggestions={options}
              onSelect={onSelect}
              showList={showList}
              activeItem={activeItem}
            />
          </PopperContainer>
        )}
        <StyledBox width={"100%"}>
          <SelectElement
            {...props}
            ref={mergeRefs(setReferenceElement, selectRef)}
            sizevariation={size}
            onClick={selectOnClick}
            theme={theme}
            value={state.selectValue}
          >
            {styledChildren}
          </SelectElement>
          <ClickableIcon
            iconify={state.openSelect ? iconUp : iconDown}
            sizevariation={size}
            variation={props.variation}
            theme={theme}
          />
        </StyledBox>
      </React.Fragment>
    );
  },
);

SearchSelect.defaultProps = {
  variation: "fill",
  size: "sm",
};
SearchSelect.propTypes = {
  ...styledProps.space,
  ...styledProps.typography,
  /** Fixed width&height */
  size: PropTypes.oneOf(["sm", "md", "lg"]),

  /** Variations */
  variation: PropTypes.oneOf(selectVariations),
};
SearchSelect.displayName = "SearchSelect";
SearchSelect.isField = true;

export default SearchSelect;
