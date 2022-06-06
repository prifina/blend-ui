import React, { forwardRef, useState } from "react";

import styled, { css } from "styled-components";
import {
  space,
  layout,
  typography,
  border,
  color,
  compose,
} from "styled-system";

import { Button, useTheme } from "@blend-ui/core";

const systemProps = compose(layout, color, space, border, typography);

const inputTheme = css`
  margin: 0; // system props are overriding above values
  ${systemProps}
  appearance: none;
  display: block;
  height: ${props =>
    props.height
      ? props.height
      : props.isIcon
      ? "100%"
      : props.theme.componentStyles[props.as].base.height};
  font-family: inherit;
  font-size: ${props => props.theme.componentStyles[props.as].base.fontSize};
  line-height: ${props =>
    props.theme.componentStyles[props.as].base.lineHeight};
  color: ${props =>
    typeof props.color !== "undefined"
      ? props.color
      : props.theme.componentStyles[props.as].base.color};
  background-color: ${props =>
    props.theme.componentStyles[props.as].base.backgroundColor ||
    "transparent"};
  border: ${props =>
    typeof props.borders !== "undefined"
      ? props.borders
      : props.theme.componentStyles[props.as].base.border};
  border-radius: ${props =>
    typeof props.borderRadius !== "undefined"
      ? props.borderRadius
      : props.theme.componentStyles[props.as].base.borderRadius};

  padding-left: ${props =>
    props.theme.componentStyles[props.as].base.paddingLeft};
  padding-right: ${props =>
    props.theme.componentStyles[props.as].base.paddingRight};
  padding-top: ${props =>
    props.theme.componentStyles[props.as].base.paddingTop};
  padding-bottom: ${props =>
    props.theme.componentStyles[props.as].base.paddingBottom};
  ::placeholder {
    color: ${props => props.theme.colors.text.muted};
  }
  &:disabled {
    background: ${props => props.theme.colors.text.muted};
    border: ${props => (props.isIcon ? 0 : props.theme.borders.input.disabled)};
    pointer-events: none;
  }
  &:invalid {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: ${props => (props.isIcon ? 0 : props.theme.borders.input.error)};
  }
  &:focus,
  &:not([disabled]):hover {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: ${props => (props.isIcon ? 0 : props.theme.borders.input.active)};
  }
  /*
  &:hover {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    // border: ${props => props.theme.borders.input.active};
  }
  */
  ::-ms-clear {
    display: none;
  }
`;

const themeColorStyles = props => {
  return props.colorStyle ? props.theme.colorStyles[props.colorStyle] : null;
};
const errorStyles = props => {
  return props.error
    ? { border: props.isIcon ? 0 : props.theme.borders.input.error }
    : null;
};
const InputElement = styled.input`
  ${inputTheme}
  ${themeColorStyles}
  ${errorStyles}
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  width: 382px;
  //   height: 162px;
  gap: 16px 4px;
  max-height: 382px;

  padding: 16px 16px 24px 24px;
  border: 1px #00847a solid;
  border-radius: 4px;

  background: #f8fcfc;

  & > input {
    height: 19px;
    border: none;
    outline: none;
    background: transparent;
    color: #0d776e;
  }
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  padding-right: 6.5px;
  padding-left: 8px;
  border-radius: 10px;
  background-color: #dbf0ee;
  color: #0d776e;

  height: 20px;
  font-size: 12px;
  max-width: 50%;

  & > button {
    display: flex;
    // margin-left: 6.5px;
    border: none;
    background-color: unset;
    cursor: pointer;
    color: #0d776e;
  }
`;

const TagText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  text-overflow: ellipsis;
`;

const TagButton = styled(Button)`
  display: flex;
  // margin-left: 6.5px;
  border: none;
  background-color: unset;
  cursor: pointer;
  color: #0d776e;
`;

const TagInput = forwardRef(({ errorMsg, promptMsg, ...props }, ref) => {
  const { colors } = useTheme();

  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);

  console.log("tags", tags);

  const [isKeyReleased, setIsKeyReleased] = useState(false);

  const onChange = e => {
    const { value } = e.target;
    setInput(value);
  };

  const onKeyDown = e => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (
      key === "Enter" &&
      trimmedInput.length &&
      !tags.includes(trimmedInput)
    ) {
      e.preventDefault();
      setTags(prevState => [...prevState, trimmedInput]);
      setInput("");
    }

    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setInput(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };

  const deleteTag = index => {
    setTags(prevState => prevState.filter((tag, i) => i !== index));
  };

  return (
    <React.Fragment>
      <Container className="container">
        {tags.map((tag, index) => (
          <Tag className="tag">
            <TagText>{tag}</TagText>

            <button onClick={() => deleteTag(index)}>x</button>
            {/* <TagButton onClick={() => deleteTag(index)}>x</TagButton> */}
          </Tag>
        ))}
        <input
          {...props}
          ref={ref}
          value={input}
          placeholder="Add features"
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onChange={onChange}
        />
      </Container>
    </React.Fragment>
  );
});
TagInput.defaultProps = {
  as: "input",
  type: "text",
  width: "100%",
};

TagInput.displayName = "TagInput";
TagInput.isField = true;

export default TagInput;
