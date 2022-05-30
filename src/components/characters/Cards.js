import React from 'react';
import CharacterItem from './CharacterItem'

const Cards = ({chars,isLoading}) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className='cards'>
        {chars.map((char) => (
            <CharacterItem key={char.char_id} char={char}></CharacterItem>
        ))}
    </section>)
       
}

export default Cards
