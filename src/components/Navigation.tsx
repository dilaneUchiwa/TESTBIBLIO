import { Breadcrumb,BreadcrumbItem,BreadcrumbLink, Divider} from '@chakra-ui/react'
function Navigation(){
    return (
        <div>

                <Breadcrumb fontWeight='medium' fontSize='md'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Accueil</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Emprunt</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='/livre'>Livre</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Auteur</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Genre</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Divider orientation='horizontal' />
        </div>
    )
}

export default Navigation;