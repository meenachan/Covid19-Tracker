import React,{useState, useEffect} from 'react';
import {NativeSelect , FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchcountries } from '../../api';

const CountryPicker = ({handleCountrychange})=>{
       const [fetchedcounteries, setfetchedcountries] = useState([]) ;
    useEffect(()=>{
        const fetchapi = async ()=>{
                setfetchedcountries( await fetchcountries())
        }
        fetchapi();
    },[setfetchedcountries])
    return(
        <FormControl className={styles.container}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountrychange(e.target.value)}>
                <option value="">global</option>
    {fetchedcounteries.map((country,i)=><option key={i} value={country}>{country}</option>)}

            </NativeSelect>
        </FormControl>
    );
}
export default CountryPicker;