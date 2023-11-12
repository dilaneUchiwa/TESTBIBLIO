import { AddIcon, Search2Icon } from "@chakra-ui/icons";
import { Button, Divider, Input, InputGroup, InputLeftElement, InputRightAddon, useDisclosure } from "@chakra-ui/react";
import ModalLivre from "./ModalLivre";
import { useState } from "react";
import axios from "../../api/axios";

const API_URL='api/livre/search';

interface PropType{
    setLivres:(val:any)=>void
}


function LivreHeader({setLivres}:PropType){
    const {onOpen,isOpen,onClose}=useDisclosure();
    const [key,setKey]=useState('');

    const handleSearch=(e:any)=>{
        const temp=e.target.value.trim();
        setKey(temp);

        axios.post(API_URL,{"key":"key","value":key})
        .then(response=>{
            setLivres(response.data);
        })
        .catch(error=>console.log(error))
    
    }
    return (
     <div>   
        <div className="row pb-4 \" >
            <div className="col-2 fw-bold text-uppercase fs-2">
                Livres
            </div>
            <div className="col-6 offset-2">
                <InputGroup borderRadius={20} size="md" colorScheme={'primary'}>
                    <InputLeftElement
                    pointerEvents="none"
                    children={<Search2Icon color="gray.600" />}
                    />
                    <Input className="" type="text" placeholder="Rechercher par le titre , l'auteur ou le genre..." border="1px solid #949494" value={key} onChange={handleSearch}/>
                    <InputRightAddon
                    p={0}
                    border="none"
                    >
                    <Button variant="primary">Chercher</Button>
                    </InputRightAddon>
                </InputGroup>
                
            </div>
           <div className="col-2">
           <Button variant={'primary'} leftIcon={<AddIcon />} onClick={onOpen}>
                 Ajouter
            </Button>

            { isOpen && <ModalLivre onClose={onClose} onOpen={onOpen} isOpen={isOpen} livre={null} setModifyClick={null}/> }

           </div>
        </div>
        <Divider orientation='horizontal' />
    </div>    
    )
}
export default LivreHeader;