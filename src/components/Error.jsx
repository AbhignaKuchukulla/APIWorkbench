import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'


const useStyles=makeStyles({
    error:{
        width:'70%',
        height:'auto',
        margin:'auto',
        objectPosition:'center 0%'

    }
})




const Error=()=>{
    const error='https://i.sstatic.net/01tZQ.png'
    const classes=useStyles();

    return(
        <Box>
            <Typography mt={2} mb={2}>
                Response
            </Typography>

           <Box style={{display:'flex'}} >
            <img src={error} alt="Error" className={classes.error}/>
           </Box>
        </Box>
    )
}

export default Error;