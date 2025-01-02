
import { Route, Routes } from "react-router-dom";
import PlayGame from "./pages/PlayGame/PlayGame.jsx";
import StartGame from "./pages/StartGame/StartGame.jsx";


function App() {
  return (
    //<div>
    //   <h1 className="text-3xl font-semibold">Welcome To HangMan Game</h1>
    // <TextInputFormContainer  onSubmit={(value) => console.log("The hidden value from the form is", value)}/>
    //   <CustomComponent />
    // </div>
    
    
    <>
    <div>
      Navbaar
    </div>
    
    <Routes>
      <Route path="/play" element={<PlayGame  />}/>
      <Route path="/start" element={<StartGame />}/>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
    
    </>

  )
}

export default App;