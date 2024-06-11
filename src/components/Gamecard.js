import React from 'react'
import { removegame } from '../redux/gameslice'
import { useDispatch } from 'react-redux'
import Editgame from './Editgame';

function Gamecard({game}) {
  const dispatch=useDispatch();
  return (
    <div className="cards">
      <img src={game.img} />
      <div className="body-card">
        <p>ID : {game.id}</p>
        <Editgame game={game}/>
      <h3>{game.name}</h3>
      <p>{game.description}</p>
      <button style={{border:"none",backgroundColor:"#d4abe1",borderRadius:"10px",fontSize:"15px",fontWeight:"400",boxShadow:"2px 2px 2px gray",width:"130px"}} onClick={()=>dispatch(removegame({id:game.id}))}>Remove Card</button>
   
      </div>
    </div>
  )
}

export default Gamecard
