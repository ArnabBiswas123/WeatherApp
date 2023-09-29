const API_KEY='a66d082c53563492b72cdcefa8dbdf31'
const makeIconURL=(iconId)=>`https://openweathermap.org/img/wn/${iconId}@2x.png`


const getFormatedWhetherData= async(city,units= 'metric')=>{
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    const response=await fetch(URL);
    const data=await response.json();
    console.log(data);
    if(data.message==='city not found'){
        alert('This city is not exists')
        return undefined
    }
 
    const {weather, main:{temp,feels_like,temp_min,temp_max,humidity,pressure},wind:{speed},sys:{country},name,
        }=data;

        const {description,icon}=weather[0];
      

        return{
            description,
            iconURL:makeIconURL(icon),
            temp,feels_like,temp_min,temp_max,pressure,humidity,speed,country,name
        }

    }

export {getFormatedWhetherData}