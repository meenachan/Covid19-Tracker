import React from 'react';
// import Cards from './components/Cards/Card';
// import Chart from './components/Chart/chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
import {Cards , Chart , CountryPicker} from './components';
import styles from  './App.module.css';
import {fetchdata} from './api';
import covid from './images/image.png';

class App extends React.Component {

state = {
  data: {},
  country: "",
}

async componentDidMount(){
  const fetcheddata = await fetchdata();
  this.setState({data:fetcheddata});
 
}
handleCountrychange = async( country)=>{
  const fetcheddata = await fetchdata(country);
  this.setState({data:fetcheddata, country: country});

}

  render(){
    const {data,country} = this.state;
  return (  
   
   <div className={styles.container}>
     <img src={covid} className={styles.image}></img>
     <Cards data ={data}></Cards>
     <CountryPicker handleCountrychange={this.handleCountrychange}></CountryPicker>
     <Chart data={data} country ={country}></Chart>
    
    </div>
    
  );
}
}

export default App;
