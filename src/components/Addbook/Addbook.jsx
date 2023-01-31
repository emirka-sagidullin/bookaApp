import React, {useState} from 'react'
import About from '../About/About'

const Addbook = ({books, setBooks}) => {
    const [input, setInput] = useState('')
    
    function addBook(){
        setBooks([...books, input])
    }
  return (
    <div>
        <input type="text" onChange={(e) => {setInput(e.target.value)}}/>
        <button onClick={addBook}>Add</button><br />
    </div>
  )
}

export default Addbook
