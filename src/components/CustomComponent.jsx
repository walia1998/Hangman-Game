import { useState } from "react";

function CustomComponent() {

    const [x, setX] = useState(10);

   return (
    <>
     <button 
     className="px-2 py-2 mr-2 border-2"
     onClick={() => {
        setX(x + 1);
        console.log(x);
    }}>Click Me</button>

    {x}
    
    </>
   )
}

export default CustomComponent;