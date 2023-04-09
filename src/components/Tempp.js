import React,{useState,useEffect} from "react"
import "./CSS/style.css"
//const api="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={a1d756c9ca3e444a22daebd6dbc516ce}"
const Tempp=()=>{
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState('Mumbai')

    useEffect(()=>{
        const fetchapi=async()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a1d756c9ca3e444a22daebd6dbc516ce`
         const response= await fetch(url);
         const resJson=await response.json();
         setCity(resJson.main)

        }
        fetchapi(); 

    },[search])

  return(
    <div>
        
        <div className="box">
            <div className="inputData">
                <input type="search" className="input Field" onChange={(event)=>{setSearch(event.target.value)}}></input>

            </div>
        {
            !city ? (
                <p className="errorMsg"> No Data Found or type full city name</p>
            ):(
                <div>
                <div className="info">
            <h2 className="location">
            <i className="fa fa-solid fa-street-view"></i>{search}
            </h2>
            <h1 className="temp">
             {city.temp} Celcius
            </h1>
            <h3 className="tempmin_max">
               Min:{ city.temp_min} Celcius | Max: {city.temp_max} Celcius
            </h3>

        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div> 
    </div>

            )
        }
        </div>
    </div>  
  )

}

export default Tempp
