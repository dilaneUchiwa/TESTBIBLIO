import { extendTheme } from "@chakra-ui/react";

const theme=extendTheme({
    colors:{
        primary:'#78b4d5',
        secondary:'grey'

    },
    fonts:{
        body:'Roboto'
    },
    components:{
        
        Button :{
            baseStyle :{
                borderRaduis : '12 px'
            },
            variants:{
                primary:{
                    bg:'primary',
                    color:'white',
                    _hover:{
                        bg:'white',
                        color:'primary',
                        border : '2px',
                        borderColor: 'primary'
                    }
                },
                secondary:{
                    bg:'secondary',
                    color:'white',
                    _hover:{
                        bg:'white',
                        color:'secondary',
                        border : '2px',
                        borderColor: 'secondary'
                    }
                },
                update:{
                    bg:'teal',
                    color:'white',
                    _hover:{
                        bg:'white',
                        color:'teal',
                        border : '2px',
                        borderColor: 'teal'
                    }
                },
                delete:{
                    bg:'red.500',
                    color:'white',
                    _hover:{
                        bg:'white',
                        color:'red.500',
                        border : '2px',
                        borderColor: 'red.500'
                    }
                }
            }
        },
        Table:{
            baseStyle:{
                th :{

                }
            },
            td:{

            }
        }
    }
});
export default theme;