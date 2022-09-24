import { useState } from "react"

const Content = () =>{
    const [name, setName] = useState('Abutech');

    const handleNameChange = () => {
        const names = ['Abutech', 'MadFlows', 'George'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
        

    }

    


    return(
        <div>
            <p>Hello {name}!</p>
            <button onClick={handleNameChange}>change name</button>
        
        </div>
    )
}

export default Content