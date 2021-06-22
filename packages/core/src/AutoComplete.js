import React, { useState, useEffect, useReducer, forwardRef } from "react";

import styled, { css } from "styled-components";
import Text from "./Text";
import IconField from "./IconField";
import Box from "./Box";

import PropTypes from "prop-types";
import bxSearchAlt2 from "@iconify/icons-bx/bx-search-alt-2";

import { useTheme } from "./theme/ThemeProvider";

const listTheme = css`
  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.baseSecondary};
    span {
      color: ${props => props.theme.colors.baseWhite};
    }
  }

  cursor: pointer;
  color: ${props => props.theme.colors.basePrimary};
`;

const ListItem = styled.li`
  /* */
  padding-left: 15px;
  ${listTheme}
  span {
    color: ${props => (props.active ? props.theme.colors.baseWhite : null)};
  }
  background-color: ${props =>
    props.active ? props.theme.colors.baseSecondary : null};
`;

const UnorderedList = styled.ul`
  /* */
  list-style-type: none;
  list-style-position: inside;
  padding-inline-start: 0px;
  margin: 0;
`;

/*
const LinkElement = styled.a.attrs(props => ({
  rel: props.target === "_blank" ? "noopener" : null,
}))`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.colors.textLink};

  &:hover {
    color: ${props => props.theme.colors.textLink};
    text-decoration: underline;
  }
  ${space}
`;
*/

const ListContainer = styled(Box)`
  max-height: ${props => props.maxHeight};
  padding-right: 5px;
  ${props => props.theme.componentStyles.scrollBar}
`;

const SuggestionsList = ({ filteredList, activeItem, maxHeight, onClick }) => {
  console.log(filteredList, activeItem);
  return (
    <ListContainer maxHeight={maxHeight}>
      <UnorderedList>
        {filteredList.map((item, index) => (
          <ListItem
            key={"suggest-" + index}
            active={index === activeItem}
            onClick={onClick}
            data-key={item.key}
          >
            {typeof item.component === "object" && item.component}
            {typeof item.component === "undefined" && (
              <Text as={"span"} textStyle={"caption"}>
                {item.value}
              </Text>
            )}
          </ListItem>
        ))}
      </UnorderedList>
    </ListContainer>
  );
};

const AutoComplete = forwardRef(
  (
    {
      suggestions,
      searchLength = 1,
      maxHeight = "100px",
      onSelect,
      showList = false,
      activeItem = -1,
      ...props
    },
    ref,
  ) => {
    //return <div {...props} ref={ref} />;
    //console.log(suggestions, props);
    const theme = useTheme();
    //const [activeItem, setActiveItem] = useState(-1);

    const [state, setState] = useReducer(
      (state, newState) => ({ ...state, ...newState }),
      {
        filteredList: suggestions,
        activeItem: activeItem,
        userInput: "",
        show: showList,
      },
    );

    useEffect(() => {
      function onKeyup(e) {
        console.log("LIST KEY ", e);
        const activeItem = state.activeItem;

        if (e.key === "Enter" && activeItem > -1) {
          //setState({ activeItem: -1, filteredList: [], userInput: "" });
          //console.log("selected...", state.filteredList[activeItem]);
          setState({
            filteredList: [],
            activeItem: -1,
            userInput: state.filteredList[activeItem].value,
            show: false,
          });
          if (onSelect) {
            onSelect(e, state.filteredList[activeItem].key);
          }
        }
        if (
          e.key === "ArrowDown" &&
          activeItem < state.filteredList.length - 1
        ) {
          console.log("DOWN KEY...");
          //setActiveItem(activeItem + 1);
          setState({ activeItem: activeItem + 1 });
        }
        if (e.key === "ArrowUp" && activeItem > -1) {
          //setActiveItem(activeItem - 1);
          setState({ activeItem: activeItem - 1 });
        }
      }
      window.addEventListener("keyup", onKeyup);
      return () => window.removeEventListener("keyup", onKeyup);
    }, [state.activeItem, state.filteredList]);

    const searchInput = e => {
      const userInput = e.currentTarget.value;
      let filteredSuggestions = [];
      //let showState = false;
      let showState = showList;
      if (userInput.length >= searchLength) {
        showState = true;
        filteredSuggestions = suggestions.filter(suggestion => {
          if (suggestion.searchValue) {
            return (
              suggestion.searchValue
                .toLowerCase()
                .indexOf(userInput.toLowerCase()) > -1
            );
          } else {
            return (
              suggestion.value.toLowerCase().indexOf(userInput.toLowerCase()) >
              -1
            );
          }
        });
      }
      if (
        showList &&
        filteredSuggestions.length === 0 &&
        userInput.length === 0
      ) {
        filteredSuggestions = suggestions;
      }
      setState({
        filteredList: filteredSuggestions,
        activeItem: -1,
        userInput: userInput,
        show: showState,
      });
    };
    const selectItem = e => {
      console.log(e.currentTarget.dataset);
      if (
        typeof e.currentTarget.dataset !== "undefined" &&
        e.currentTarget.dataset.key !== "undefined"
      ) {
        /*
        console.log(
          "selected...",
          state.filteredList[e.currentTarget.dataset.index],
          state,
        );
        */
        const selectedValue = state.filteredList.filter(
          item => item.key === e.currentTarget.dataset.key,
        );
        console.log(selectedValue);
        setState({
          filteredList: [],
          activeItem: -1,
          //userInput: state.filteredList[e.currentTarget.dataset.index],
          userInput: selectedValue[0].value,
          show: false,
        });
        if (onSelect) {
          onSelect(e, selectedValue[0].key);
        }
      }

      e.preventDefault();
    };
    return (
      <React.Fragment>
        <IconField>
          <IconField.LeftIcon
            iconify={bxSearchAlt2}
            color={theme.colors.baseMuted}
            size={"17"}
          />
          <IconField.InputField
            placeholder={props.placeholder || ""}
            ref={ref}
            onChange={searchInput}
            value={state.userInput || ""}
            id="search-input-fld"
            name="search-input-fld"
            autoComplete="off"
          />
        </IconField>

        {state.show && (
          <Box bg={theme.colors.baseWhite} pt={10}>
            <SuggestionsList
              filteredList={state.filteredList}
              activeItem={state.activeItem}
              maxHeight={maxHeight}
              onClick={selectItem}
            />
          </Box>
        )}
      </React.Fragment>
    );
  },
);

AutoComplete.displayName = "AutoComplete";
/*
AutoComplete.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};
*/
export default AutoComplete;

/*


const searchInput = e => {
      const userInput = e.currentTarget.value;
      let filteredSuggestions = [];
      let showState = false;
      if (userInput.length >= searchLength) {
        showState = true;
        filteredSuggestions = suggestions.filter(suggestion => {
          //console.log(suggestion);
          if (typeof suggestion.value !== "string") {
            let componentText = "";
            if (typeof suggestion.value.props !== "undefined") {
              if (typeof suggestion.value.props.children === "string") {
                componentText = suggestion.value.props.children;
              } else if (
                typeof suggestion.value.props.children === "object" &&
                suggestion.value.props.children.length > 0
              ) {
                suggestion.value.props.children.forEach(child => {
                  if (typeof child.props.children === "string") {
                    componentText += " " + child.props.children;
                  }
                });
              }
            }
            //console.log(componentText);
            if (componentText.length > 0) {
              return (
                componentText.toLowerCase().indexOf(userInput.toLowerCase()) >
                -1
              );
            }
          } else {
            return (
              suggestion.value.toLowerCase().indexOf(userInput.toLowerCase()) >
              -1
            );
          }
        });
      }
      setState({
        filteredList: filteredSuggestions,
        activeItem: -1,
        userInput: userInput,
        show: showState,
      });
    };


import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };
  }

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Autocomplete;
*/
