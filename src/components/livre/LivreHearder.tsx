import { AddIcon, Search2Icon } from "@chakra-ui/icons";
import { Button, Divider, Input, InputGroup, InputLeftElement, InputRightAddon, useDisclosure } from "@chakra-ui/react";
import ModalLivre from "./ModalLivre";

function LivreHeader(){
    const {onOpen,isOpen,onClose}=useDisclosure();

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
                    <Input className="" type="text" placeholder="Rechercher par le titre , l'auteur ou le genre..." border="1px solid #949494" />
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