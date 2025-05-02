import {makeStyles} from '@mui/styles';


const useStyles = makeStyles({
    logo:{
        width:100,
        padding:5
    }
})


const Header= ()=>{
    const classes=useStyles();
    const logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5yPOAbr-LrEa8ANO47RBo4f2txsvjPL-fw&s"
    return (

        <img src={logo} alt="logo" className={classes.logo}/>
    )
}

export default Header;