import { Button, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import ModalLivre from "./livre/ModalLivre";

interface PropType{
    icon:any
    texte:string
    variant:string
    livre:any
}
function ButtonWithModal({icon,variant,texte,livre}:PropType){
    
    const { onOpen, isOpen,onClose} =useDisclosure();

    return (
        <div className='mx-1'>
            <Button onClick={onOpen} variant={variant} >
                {icon}
                {texte}
            </Button>
            {isOpen &&  <ModalLivre onClose={onClose} onOpen={onOpen} isOpen={isOpen} livre={livre} /> }
        </div>
    )
}
export default ButtonWithModal;