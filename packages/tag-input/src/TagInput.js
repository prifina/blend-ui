import React, { useState } from "react";

import styled from "styled-components";

import { Button, Input, Text } from "@blend-ui/core";

import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  width: 382px;
  gap: 16px 4px;
  max-height: 162px;
  padding: ${props =>
    props.variant === "inner" ? "12px 20px 16px 14px" : "16px 20px 16px 18px"};

  border: ${props =>
    props.variant === "inner" ? props.theme.borders.input.base : 0};
  border-radius: 4px;
  background: ${props => props.theme.colors.baseBright};
  
  &:hover {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: ${props =>
      props.variant === "inner" ? props.theme.borders.input.active : 0};
  }
  &:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border:  ${props =>
      props.variant === "inner" ? props.theme.borders.input.active : 0};};
  }  

`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  padding-left: 8px;
  padding-bottom: 2px;
  padding-top: 2px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.subtleHiover};
  color: ${props => props.theme.colors.brandAccent};
  height: 20px;
  max-height: auto;
  font-size: 12px;
  max-width: 50%;
`;

const StyledInput = styled(Input)`
  height: 19px;
  border: none !important;
  outline: none;
  background: transparent;
  color: ${props => props.theme.colors.brandAccent};
  max-width: 84px;
  padding: 0;
`;

const TagText = styled(Text)`
  color: ${props => props.theme.colors.brandAccent};
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  text-overflow: ellipsis;
`;

const TagButton = styled(Button)`
  display: flex;
  border: none;
  background-color: unset;
  cursor: pointer;
  color: ${props => props.theme.colors.brandAccent};
  min-width: 0 !important;
  padding: 0;
  margin-left: 6.5px;
  padding-bottom: 2px;
  font-size: 11px;
  font-weight: 400;

  &:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: unset !important;
    border: 0 !important;
    color: unset !important;
  }
  &:hover {
    outline: none;
    background-color: unset !important;
    border: 0 !important;
    color: unset !important;
  }
`;

const TagInput = ({ placeholder, helperText, tags, setTags, ...props }) => {
  const [input, setInput] = useState("");

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
    <>
      {props.variant === "inner" && (
        <Container className="container" {...props}>
          {tags.map((tag, index) => (
            <Tag className="tag" key={index}>
              <TagText>{tag}</TagText>
              <TagButton onClick={() => deleteTag(index)}>x</TagButton>
            </Tag>
          ))}
          <StyledInput
            value={input}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onChange={onChange}
          />
        </Container>
      )}
      {props.variant === "outer" && (
        <div style={{ width: 379 }}>
          <Input
            value={input}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onChange={onChange}
          />
          <Text fontSize="xs" mb={14}>
            {helperText}
          </Text>
          <Container className="container" {...props}>
            {tags.map((tag, index) => (
              <Tag className="tag" key={index}>
                <TagText>{tag}</TagText>
                <TagButton onClick={() => deleteTag(index)}>x</TagButton>
              </Tag>
            ))}
          </Container>
        </div>
      )}
    </>
  );
};
TagInput.defaultProps = {
  variant: "inner",
  placeholder: "Add Features",
  helperText: "",
};

TagInput.propTypes = {
  tags: PropTypes.array.isRequired,
  setTags: PropTypes.func.isRequired,
};

TagInput.displayName = "TagInput";
TagInput.isField = true;

export default TagInput;
