//Container Component 
import { useState } from "react";
import TextInputForm from "./TextInputForm";
function TextInputFormContainer({ onSubmit }) {
    const [value, setValue] = useState('');
    const [inputType, setInputType] = useState('password');
    function handleFormSubmit(e) {
        e.preventDefault();
        console.log('Form submitted', value);
        onSubmit?.(value); // if onSubmit is defined, call it with the value
    }
    function handleTextInputChange(e) {
        console.log('Text Input change');
        console.log(e.target.value);
        setValue(e.target.value) //whenever i typed in the input field, it will update the value
    }
return (
    // Calling the presentation component
    <TextInputForm 
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        value={value}
        inputType={inputType}
        setInputType={setInputType}
    />
)
}

export default TextInputFormContainer;