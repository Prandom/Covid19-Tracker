import React,{useState,useEffect} from 'react'
import "../components/countriesList.css"


const CountriesList = () => {
    const [data,setData] = useState([]);
    const [dataC,setDataC] = useState([]);
    const [country,setCountry] = useState([]);
    const getCovidData = async()=>{
        try{
            const response = await fetch('https://disease.sh/v3/covid-19/countries');
            const apiData = await response.json();
            setData(apiData);
        } catch(err){
            console.log(err);
        }
    }
    const getCovidDataCountry = async()=>{
        try{
            const response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
            const apiDataC = await response.json();
            setDataC(apiDataC);
        } catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getCovidData();
    },[]);
    return (
       <>
            <div className="wrap container w-5/6 flex flex-col items-center justify-center mx-auto ">
                <div className="comp3 right uppercase flex justify-center">
                    <h3>Country Wise Stats</h3>
                </div>
                { <select className="custom mont" onChange={
                    (e)=>{
                        var selectedCountry = e.target.value;
                        setCountry(selectedCountry);
                        getCovidDataCountry();
                    }
                }>
                    {
                        data.map((element,index)=>{
                        return(
                            <option className="option" value={element.country} key={index}>{element.country}</option>
                        )
                        })
                    }
                </select> }
            
                <div className="container-wrap flex flex-col shadow-md w-full">  
                    <div className="flex flex-col sm:flex-row mt-6 mont p-4 justify-evenly ">
                        <div className="data-cont bg-yellow-200 ">
                            Total Cases<div className="country">{country}</div>
                            <div className="data text-yellow-500 shadow-sm">{dataC.cases}</div>
                        </div>
                        <div className="data-cont bg-red-200">
                            Total Deceased<div className="country">{country}</div>
                            <div className="data text-red-500 shadow-sm">{dataC.deaths}</div>
                        </div>
                        <div className="data-cont bg-green-100">
                            Total Recovered<div className="country">{country}</div>
                            <div className="data text-green-500 shadow-sm">{dataC.recovered}</div>
                        </div>
                    </div>
                </div>   
            </div>
       </>  
    )
}

export default CountriesList;
