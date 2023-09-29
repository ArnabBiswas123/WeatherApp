// import './App.css';
import './index.css'
// import hotbg from './assets/HotWhether.jpg'
import bgimg from './assets/background.jpg'
import coldbg from './assets/coldWhethwr.jpg'
// import rainbg from './assets/RainyWhether.jpg'
import Description from './components/Description';
import { useEffect,useState } from 'react';
import { getFormatedWhetherData } from './whetherService';

function App() {
  const [city,setCity]=useState('Delhi')
  const [weather,setWhether]=useState(null);
  const [units,setUnits]=useState("metric")
  const [bg,setBg]=useState(bgimg)
  // require('dotenv').config()

  useEffect(()=>{
    const FetchWhetherData=async()=>{
        const data=await getFormatedWhetherData(city,units);
        console.log('running')
        if(!data){
          return
        }

      //  if(!data.temp){
       
      //     alert('This city is not Defined');
      //     return;
      
      //  }
        setWhether(data);


      const threshold=units==="metric"?18:60;
      if(data.temp<=threshold) setBg(coldbg);
      else setBg(bgimg)


    }
    FetchWhetherData();
  },[units,city])

 const handleUnitsClick=(e)=>{
    const button=e.currentTarget;
    const currentUnit=button.innerText.slice(1);
    const isCelsies= currentUnit === 'C';
    button.innerText=isCelsies?'°F':'°C';
    setUnits(isCelsies?"metric":"imperial");
 }


const enterKeyPressed=(e)=>{
      if(e.keyCode===13){
        setCity(e.currentTarget.value);
      }
}



  return (
    <div className="app" style={{backgroundImage:`url(${bg})`}}>
        <div className='overlay'>
          {weather&&(

          <div className='container'>
            <div className='section section__inputs'>
              <input onKeyDown={enterKeyPressed} type='text' name='city' placeholder='Enter City'/>
              <button onClick={(e)=>{handleUnitsClick(e)}}>°F</button>
            </div>
            <div className='section section__temperature'>
              <div className='icon'>
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src= {weather.iconURL}
                alt='whetherIcon' height={'80px'}></img>
                <h3>{weather.description}</h3>
              </div>
              <div className='temparature'>
                {weather.temp?
                <h1>{`${weather.temp.toFixed()}°${units==="metric"?"C":"F"}`}</h1>:''
                
              }
                </div>
            </div>
            <Description weather={weather} units={units}></Description>
            {/* bottom description */}
          </div>
          )}
        </div>
    </div>
  );
}

export default App;
