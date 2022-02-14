import { createStyles, makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(()=>
    createStyles({
        logo: {
            fontFamily: "'Spartan', sans-serif !important", 
            fontSize: "28px"
        }, 
        header: {
            borderBottom: "2px solid gray",
            padding: "8px 0px"
        },
        button: {
            textTransform: "capitalize",
            color: "black"
        },
        link: {
            textDecoration: "none"
        }
    })
) 

export default useStyles;