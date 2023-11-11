import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton, useDisclosure } from "@chakra-ui/react";

interface Prop{
    status:"info" | "warning" | "success" | "error" | "loading" | undefined
    title:string | undefined
    description:string
}

function MyAlert({status,title,description}:Prop){
    const { isOpen:isVisible, onClose, onOpen} = useDisclosure({defaultIsOpen:true});
    return (
        isVisible ?
            <Alert status={status}>
                <AlertIcon/>
                <Box>
                    <AlertTitle>
                        {title}
                    </AlertTitle>
                    <AlertDescription>
                        {description}
                    </AlertDescription>
                </Box>
                <CloseButton
                    alignSelf={'flex-start'}
                    position={'relative'}
                    right={-1}
                    top={-1}
                    onClick={onClose}
                />
            </Alert>
        : null
    )
}
export default MyAlert;