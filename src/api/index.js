import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchdata = async (country)=>{
    let ChangeableUrl = url;
    if(country){
        ChangeableUrl = `${url}/countries/${country}`;
    }
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(ChangeableUrl);
        const modified={confirmed,recovered,deaths,lastUpdate};
        return modified;
    }
    catch(error){

    }
}
export const fetchDailyDate = async ()=>{
    try{
        const {data} = await axios.get(`${url}/daily`);
       const modifiedData = data.map((dailyData)=>({
           confirmed:dailyData.confirmed.total,
           deaths:dailyData.deaths.total,
           date:dailyData.reportDate,
       }));
       return modifiedData;
    }
    catch(error){}
}

export const fetchcountries = async ()=>{
    try{
          const {data:{countries}}= await axios.get(`${url}/countries`);
          return countries.map((country)=>country.name)
    }
    catch(error){

    }
}