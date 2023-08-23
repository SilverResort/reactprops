import React from 'react'
import Player from './Player'
import {PlayersData} from './Data'

const PlayerList = () => {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      {
        PlayersData.map((player)=>
        (<Player data={player} key={player.id}/>))
      }
    </div>
  )
}

export default PlayerList