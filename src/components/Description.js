import React from 'react'
import {FaArrowDown,FaArrowUp,FaWind  } from 'react-icons/fa'
import {BiHappy} from "react-icons/bi"
import {MdCompress, MdOutlineWaterDrop} from 'react-icons/md'

import './description.css'

export default function Description({weather,units}) {
 
  const tempUnit=units==='metric'? '°C' : '°F'
  const windUnit=units==='metric'?'m/s':'m/h'

  const cards=[
    {
      id:1,
      icon:<FaArrowDown/>,
      title:"min",
      data:weather.temp_min.toFixed(),
      unit:tempUnit
    },
    {
      id:2,
      icon:<FaArrowUp/>,
      title:"max",
      data:weather.temp_min.toFixed(),
      unit:tempUnit
    },
    {
      id:3,
      icon:<BiHappy/>,
      title:"feels like",
      data:weather.temp_min.toFixed(),
      unit:tempUnit
    },
    {
      id:4,
      icon:<MdCompress/>,
      title:"pressure",
      data:weather.temp_min.toFixed(),
      unit:"hPa"
    },
    {
      id:5,
      icon:<MdOutlineWaterDrop/>,
      title:"humidity",
      data:weather.temp_min.toFixed(),
      unit:"%"
    },
    {
      id:6,
      icon:<FaWind/>,
      title:"Wind Speed",
      data:weather.temp_min.toFixed(),
      unit:windUnit
    }

]


  return (
    <div className='section section__descriptions'>
      {cards.map(({id, icon ,title, data, unit})=>{
        return(
      <div key={id} className='card'>
        <div className='description__card-icon'>
           {icon}
              <small>{title}</small>
        </div>
        <h2>{`${data} ${unit}`}</h2>
      </div>)
      })}
    </div>
  )
}
