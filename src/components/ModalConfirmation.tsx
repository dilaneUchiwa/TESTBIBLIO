import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

interface PropType{
    onOpen:()=>void
    isOpen:boolean
    onClose:()=>void
    handleAction:()=>void
    question:String
}

function ModalConfirmation({onOpen,isOpen,onClose,handleAction,question}:PropType){

    return (
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} isCentered >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Confirmation</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <div className="d-flex justify-content-center" >
                        Êtes-vous sûr de vouloir<span className="fw-bold" style={{"marginLeft":'2px'}} > {question}</span> ?
                    </div>
                </ModalBody>
                <ModalFooter>
                <Button 
                    onClick={()=>handleAction()}
                    mx={{md:'10px'}}
                     color={'white'} bg="#DF1B33"  mr={3} 
                    _hover={{
                        bg: 'white',
                        color:'#DF1B33',
                        border:'2px',
                        borderColor:'#DF1B33'
                      }}
                    >
                        Confirmer
                    </Button>
                    <Button onClick={onClose} color={'white'} bg="grey"  mr={3} 
                    _hover={{
                        bg: 'white',
                        color:'grey',
                        border:'2px',
                        borderColor:'#grey'
                      }}
                      >
                       Annuler 
                    </Button>
                </ModalFooter>
            </ModalContent>

        </Modal>
    )
}
export default ModalConfirmation;