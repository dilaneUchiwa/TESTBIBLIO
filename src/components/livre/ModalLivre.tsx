import { Button, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useToast} from "@chakra-ui/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { AxiosError } from "axios";
import { Livre } from "./LivreTable";
import axios from "../../api/axios";
import MyAlert from "../MyAlert";

const API_URL="api/livre"
const API_URL_AUTEUR="api/auteur/all"
const API_URL_GENRE="api/genre/all"

interface PropType{
    onOpen:()=>void
    isOpen:boolean
    onClose:()=>void
    setModifyClick:any
    livre: null | Livre
}
function ModalLivre({onOpen,isOpen,onClose,livre,setModifyClick}:PropType){
    
    const [titre,setTitre]=useState("");
    const [annee,setAnnee]=useState(0);
    const [edition ,setEdition]=useState("");
    const [selectedAuteur,setSelectedAuteur]=useState('');
    const [selectedGenre,setSelectedGenre]=useState('');

    const [image,setImage]=useState<File | null>()
    
    const [auteurs,setAuteurs]=useState<any[]>([]);
    const [genres,setGenres]=useState<any[]>([]);


    const [isDuplicate , setIsDuplicate]=useState(false);
    const [isInvalidYear , setIsInvalidYear]=useState(false);

    const [errMessage,setErrMessage]=useState("");
    
    const toast= useToast()



    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault();
        axios.post(
            API_URL,
            {
                titre : titre,
                annee:annee,
                edition:edition,
                image:image,
                auteurId:selectedAuteur,
                genreId:selectedGenre
            }
        ).then((response)=>{
            toast({
                status:'success',
                title:'success',
                description : `Livre ${titre} crée avec success `,
                duration : 10000,
                isClosable : true
            })
            customOnClose()
        })
        .catch(error=>{
            if(error as AxiosError){
                if ((error as AxiosError).response?.status===409)setIsDuplicate(true);
                else  setErrMessage("service non disponible");
            }
            else{
                setErrMessage(`${error}`);
            }
        })
    }
   
    useEffect(()=>{

        axios.get(API_URL_AUTEUR)
            .then(response=>{
                setAuteurs(response.data);
            })
            .catch(error=>console.log(error))

        axios.get(API_URL_GENRE)
            .then(response=>{
                setGenres(response.data);
            })
            .catch(error=>console.log(error))

        if(livre){
            setTitre("");
        setAnnee(1900);
        setEdition("");
        setImage(null);
        }        
    },[])

    const customOnClose=()=>{
        setTitre("");
        setAnnee(0);
        setEdition("");
        setImage(null);
        setSelectedAuteur('');
        setSelectedGenre('');
        setErrMessage("");
        setIsDuplicate(false)
        livre!==null && setModifyClick();
        onClose()    
    }


    return (<>
        <Modal isOpen={isOpen} onClose={customOnClose} closeOnOverlayClick={false} isCentered >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Nouveau Livre</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit}>
                <ModalBody pb={6}>
                   
                     <FormControl isRequired isInvalid={isDuplicate}>
                            <FormLabel>
                                Titre
                            </FormLabel>
                            <Input value={titre} onChange={e=>setTitre(e.target.value)}/>
                            <FormErrorMessage>
                                Le titre {titre} existe déjà.
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>
                                Auteur
                            </FormLabel>
                            <Select variant={'filled'} colorScheme="primary" placeholder="selectionner un auteur" value={selectedAuteur} onChange={e=>setSelectedAuteur(e.target.value)}>
                                {auteurs.map(auteur=>{
                                    
                                    return <option value={auteur.id} >{auteur.nom}</option>
                                })}
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>
                                Genre
                            </FormLabel>
                            <Select variant={'filled'} colorScheme="primary" placeholder="selectionner un genre" value={selectedGenre} onChange={e=>setSelectedGenre(e.target.value)}>
                                {genres.map(genre=>{
                                    
                                    return <option value={genre.id} >{genre.nom}</option>
                                })}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Edition
                            </FormLabel>
                            <Input value={edition} onChange={e=>setEdition(e.target.value)}/>
                        </FormControl>
                        <FormControl isInvalid={isInvalidYear}>
                            <FormLabel>
                                Annee
                            </FormLabel>
                            <Input type="number" value={annee===0?undefined:annee} onChange={e=>{let temp=parseInt(e.target.value); if (temp>1000 && temp < 9999 ){ setAnnee(temp) ; setIsInvalidYear(false) }  setIsInvalidYear(true)  }}/>
                            <FormErrorMessage>
                                l'annee entre n'est pas valide
                            </FormErrorMessage>
                        </FormControl>`
                        <FormControl>
                            <FormLabel>Image</FormLabel>
                            <Input type="file" onChange={e=>setImage(e.target.files![0])} />
                        </FormControl>
                        { errMessage && <MyAlert status='error' title="Erreur" description={errMessage} />}
                </ModalBody>
                <ModalFooter>
                    <Button 
                    mx={{md:'10px'}}
                     variant={'primary'}
                      type="submit"
                    >
                        Enregistrer
                    </Button>
                    <div style={{width:'2px'}} ></div>
                    <Button onClick={customOnClose}  mr={3} 
                    variant={'secondary'}>
                       Annuler 
                    </Button>
                </ModalFooter>

                </form>
            </ModalContent>            
        </Modal>
        </>
    )
}
export default ModalLivre;