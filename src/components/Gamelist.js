import React from 'react'
import Gamecard from './Gamecard'
import { useSelector } from 'react-redux';
import ADDGame from './ADDGame';

function Gamelist() {
  const games=useSelector((state)=>state.game.gamelist);
  console.log(games);
  return (
    <>
    <div className="addgame">
      <ADDGame/>
    </div>
    <div className="list-card">
     {games.map((el)=><Gamecard game={el}/>)}
    </div>
    </>
  )
}

export default Gamelist
