

import './App.css';

import { useEffect, useState } from 'react';

import axios from 'axios';

 

function Weath() {

 

const apiKey = "5369f81fc8c2e3b624304807d50b4278"

const[inputCity,setInputCity] = useState("")

const [data, setData]=useState({})



const getWeatherDetails = (cityName) =>{

  if (!cityName) return

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`

  axios.get(apiURL).then((res)=>{

    console.log("response",res.data)

    setData(res.data)

  }).catch((err)=>{

    console.log("err",err)

    alert("City Name Nhi hai")

  })

}

const handleChangeInput=(e)=>{

  console.log("value",e.target.value)

  setInputCity(e.target.value)

}


const handleSearch =()=>{

  getWeatherDetails(inputCity)

}


useEffect(()=>{

  getWeatherDetails("muzaffarpur")

},[])

  return (

    <div className="col-md-12">

     <div className='weatherBg'>

      <h1 className='heading'style={{backgroundColor:"yellow"}}>My Weather Application!</h1>

 

      <div className='d-grid gap-3 col-4 mt-4'>

      <input type='text' className='form-control'

      value={inputCity}

      onChange={handleChangeInput} style={{height:'25px',width:'200px'}}/>

      <button className="btn btn-primary" type='button'

      onClick={handleSearch} style={{height:'30px'}}>Search</button>

      </div>

      </div>

 

      <div className='col-md-12 text-center mt-5'>

 

      <div className="shadow rounded weatherResultBox">

 

        {/* <img className='weatherIcon'

        src="https://thumb.ac-illust.com/b9/b984471f96add96be7129ab1e061becc_w.jpeg"/> */}

      <h5 className='weatherCity'>{data?.name}</h5>

      <h6 className="weatherTemp">{((data?.main?.temp))}°C</h6>

      </div>

     </div>

    </div>

  );

}

 

export default Weath;

 