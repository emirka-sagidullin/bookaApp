import React from 'react'

const Home = ({books}) => {
    const result = books.map(function(book){
        return <li>{book}</li>
    })
  return (
    <nav>
        <ul>{result}</ul>
    </nav>
  )
}

export default Home
