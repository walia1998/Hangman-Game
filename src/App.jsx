
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer.jsx";


function App() {
  return (
    <div>
      <h1 className="font-semibold text-3xl">Welcome To HangMan Game</h1>
    <TextInputFormContainer  onSubmit={(value) => console.log("The hidden value from the form is", value)}/>
    </div>

  )
}

export default App;