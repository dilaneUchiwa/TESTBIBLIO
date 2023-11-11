import { Button, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

export interface Livre{
    id:string,
    titre:string,
    annee:any
    edition:any
    image:any
    auteur:{
        id:string,
        nom:string
    }
    genre:any
    createdAt:any
    updatedAt:any
}

interface PropType{
    livres : Livre[]
}

function LivreTable({livres}:PropType){
    return (
        livres.length===0?
        <div >
            <div className="d-flex justify-content-center" style={{height:'80vh'}}>
                <div className="d-flex align-items-center">
                    <span className="text-capitalize fw-bolder fs-1">aucun livre trouvé !</span>
                </div>
            </div>
        </div>
        :<div className="container-fluid">
            <TableContainer>
                <Table variant='striped' colorScheme='primary'>
                <TableCaption>Liste de livre</TableCaption>
                <Thead>
                <Tr>
                    <Th>TITRE</Th>
                    <Th>GENRE</Th>
                    <Th>AUTEUR</Th>
                    <Th>ANNEE</Th>
                    <Th>EDITION</Th>
                    <Th>IMAGE</Th>
                    <Th>CREE LE</Th>
                    <Th>MODIFIE LE</Th>
                    <Th>Actions</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {livres.map(livre=>{
                        return (
                            <Tr>
                                <Td>{livre.titre}</Td>
                                <Td>{livre.genre?livre.genre.nom : 'Non definie'}</Td>
                                <Td>{livre.auteur?livre.auteur.nom : 'Non definie'}</Td>
                                <Td>{livre.annee || 'Non definie'}</Td>
                                <Td>{livre.edition || 'Non definie'}</Td>
                                <Td>{!livre.image? 'Non definie' : <Button variant="primary" leftIcon={<ViewIcon /> } >voir</Button> }</Td>
                                <Td>{livre.createdAt || 'Non definie'}</Td>
                                <Td>{livre.updatedAt || 'Non definie'}</Td>
                                <Td>
                                    <div className="d-flex justify-content-around">
                                        <Button variant={'update'} >Modifier</Button>
                                        <Button variant={'delete'} >supprimer</Button>
                                    </div>
                                </Td>
                            </Tr>
                        )
                    })}
                </Tbody>
                {/* <Tfoot>
                <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                </Tr>
                </Tfoot> */}
            </Table>
        </TableContainer>
    </div>
    )
}
export default LivreTable;