import { useMemo, useState } from "react";
import Header from "../components/Header";
import LivreTable from "../components/livre/LivreTable";
import Navigation from "../components/Navigation";
import axios from "../api/axios";
import LivreHeader from "../components/livre/LivreHearder";

const API_URL='api/livre/all';

const useLivre=()=>{
    const [data,setData] = useState([]);

    axios.get(API_URL)
    .then(response=>{
        setData(response.data);
    })
    .catch(error=>console.log(error))

    return useMemo(()=>{
        return data;
    },[data]);

}

function Livre(){
    
    // let livres=useLivre();

    return ( 
        <>
            <Header />
            <Navigation />
            <LivreHeader />
            <LivreTable livres={[]} />
        </>
     );
}
export default Livre;