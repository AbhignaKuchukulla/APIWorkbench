import { Typography, TextareaAutosize } from "@mui/material";

const textareaStyle = {
    width: "100%",
    padding: 10,
    background: `url(https://i.imgur.com/2cOaJ.png)`, 
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "local",
    paddingLeft:35,
    paddingTop:10,
    borderColor:'#ccc'
};


const CreateJsonText = () => {

    return (
        <>

            <Typography mt={2} mb={2}>
                JSON
            </Typography>

            <TextareaAutosize
                minRows={3}
                maxRows={5}
                style={textareaStyle}

                
            />
        </>
    )
}
export default CreateJsonText;