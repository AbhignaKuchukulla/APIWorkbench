import { Box, Select, MenuItem, TextField, Button } from "@mui/material";
import { useContext } from "react";
import { datacontext } from "../context/Data";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    component: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    Select: {
        width: 150,
        padding: 5,
        height: 40,
    },
    textField: {
        width: "100%",
        background: "#F6F6F6",
    },
    Button: {
        width: 100,
        height: 40,
        marginLeft: [5, "!important"],
    },
});

const Form = () => {
    const classes = useStyles();
    const { formData, setFormData } = useContext(datacontext); 

    const handleChange = (e) => {
        setFormData({...formData,type:e.target.value})
    };
    
    const onUrlchange=(e)=>{
        setFormData({...formData,url:e.target.value})

    }

    return (
        <Box className={classes.component}>
            <Select
                value={formData.type}
                label="POST"
                onChange={(e) => handleChange(e)}
                className={classes.Select}
            >
                <MenuItem value={"POST"}>POST</MenuItem> {/* Removed extra space */}
                <MenuItem value={"GET"}>GET</MenuItem>
            </Select>
            <TextField size="small" className={classes.textField} 

                    onChange={(e)=>onUrlchange(e)}
            
            
            
            
            />
            <Button className={classes.Button} variant="contained">
                Send
            </Button>
        </Box>
    );
};

export default Form;
