
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({handleFormSubmit, handleTextInputChange, value,
    inputType='text', setInputType
}) {


return (

   <form className="flex" onSubmit={handleFormSubmit}>

    <div className="mr-2 flex-1">
        <TextInput
        label="Enter a word or phrase"
        type={inputType}
        onChange={handleTextInputChange}
        value={value}
        />
    </div>


    <div>

       <Button  
            styleType="secondary"
            text={inputType ==='password' ? 'Show' : 'Hide'}
            onClickHandler={() => setInputType(inputType === 'password' ? 'text' : 'password')}
       />


    </div>

    <div >
        <Button 
          text="OK"
          styleType="primary"
          type="Submit"
        />
    </div>
   </form>
)
    
}

export default TextInputForm;