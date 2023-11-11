import { Button, useDisclosure } from "@chakra-ui/react"
import ModalConfirmation from "./ModalConfirmation";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

interface PropType{
    icon:any
    action:string
    texte:string
    variant:string
    handleAction:()=>void
}
function ButtonWithConfirm({icon,variant,action,texte,handleAction}:PropType){
    

    const { onOpen, isOpen,onClose} =useDisclosure();

    return (    
        <div className='mx-1'>
            <Button onClick={onOpen} variant={variant} >
                {icon}
                {texte}
            </Button>
            {isOpen && <ModalConfirmation onOpen={onOpen} question={`${action}`} handleAction={()=>handleAction()} isOpen={isOpen} onClose={onClose} /> }
        </div>
    )
}
export default ButtonWithConfirm