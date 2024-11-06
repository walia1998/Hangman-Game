import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({}) {

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log('Form submitted')
    }

return (

   <form className="flex" onSubmit={handleFormSubmit}>

    <div className="mr-2 flex-1">
        <TextInput
        label="Enter a word or phrase"
        type="password"
        
        />
    </div>

    <div className="flex">
        <Button 
          text="OK"
          type="Submit"
        />
    </div>
   </form>
)
    
}

export default TextInputForm;