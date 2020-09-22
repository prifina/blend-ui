import React, { forwardRef, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useTheme } from "./theme/ThemeProvider";

import Input from "./Input";

const TextareaElement = forwardRef((props, ref) => (
  <Input as="textarea" rows="1" ref={ref} {...props} />
));

const StyledTextArea = styled(TextareaElement)`
  resize: none;
  overflow: auto;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;

const StyledExpandTextArea = styled(TextareaElement)`
  resize: none;
  overflow: hidden;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;

const TextArea = forwardRef(({ expand, onInputEvent, ...props }, ref) => {
  //console.log("TEXTAREA  ", props, expand, onInputEvent);
  if (expand) {
    const { componentStyles } = useTheme();
    const [height, setHeight] = useState(
      componentStyles.textarea.base.lineHeight,
    );
    const componentRef = useRef();
    const textareaRef = ref || componentRef;

    useLayoutEffect(() => {
      if (textareaRef.current) {
        setHeight(textareaRef.current.scrollHeight + 2); // add border width
      }
    }, [textareaRef]);

    const handleInput = event => {
      if (textareaRef.current) {
        setTimeout(() => {
          setHeight("auto");
          setHeight(textareaRef.current.scrollHeight + 2); // add border width
        }, 0);
      }
      onInputEvent && onInputEvent(event);
    };
    const opts = { height: height, ...props };
    return (
      <StyledExpandTextArea onInput={handleInput} ref={textareaRef} {...opts} />
    );
  } else {
    return <StyledTextArea ref={ref} {...props} />;
  }
});

TextArea.displayName = "Textarea";

TextArea.propTypes = {
  expand: PropTypes.bool,
};

export default TextArea;
