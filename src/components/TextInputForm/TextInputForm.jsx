//Presentation Layer component
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
function TextInputForm({
  handleFormSubmit,
  handleTextInputChange,
  value,
  inputType = "text",
  setInputType,
}) {
  return (
    <form className="flex" onSubmit={handleFormSubmit}>
      <div className="flex-1 mr-2">
        <TextInput
          label="Enter a word or phrase"
          type={inputType}
          onChange={handleTextInputChange}
          value={value}
        />
      </div>
      <div>
        <Button
          text={inputType === "password" ? "Show" : "Hide"}
          styleType="success"
           buttonType="button"
          onClickHandler={() =>
          setInputType(inputType === "password" ? "text" : "password")
         }
        />
      </div>
      <div>
        <Button text="submit" styleType="primary" buttonType="Submit" />
      </div>
    </form>
  );
}

export default TextInputForm;
