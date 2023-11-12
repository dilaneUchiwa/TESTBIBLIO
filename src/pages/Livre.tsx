import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import LivreTable from "../components/livre/LivreTable";
import Navigation from "../components/Navigation";
import axios from "../api/axios";
import LivreHeader from "../components/livre/LivreHearder";
import Footer from "../components/Footer";

const API_URL='api/livre/all';

// const useLivre=()=>{
//     const [data,setData] = useState([]);

//     axios.get(API_URL)
//     .then(response=>{
//         setData(response.data);
//     })
//     .catch(error=>console.log(error))

//     return useMemo(()=>{
//         return data;
//     },[data]);

// }


function Livre(){
    const [livres,setLivres]=useState([]);

   useEffect(()=>{
        axios.get(API_URL)
        .then(response=>{
            setLivres(response.data);
        })
   },[])


    console.log(livres)

    return ( 
        <>
            <Header />
            <Navigation />
            <LivreHeader setLivres={setLivres} />
            <LivreTable livres={livres} />
            <Footer />
        </>
     );
}
export default Livre;