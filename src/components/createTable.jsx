import { Box, Typography, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material'
import AddRow from './AddRow'

import {makeStyles} from  "@mui/styles";
const useStyles=makeStyles({
    tablecell :{
        border:'1px solid rgba(224,224,224,1)',
        borderCollapse:'collapse0',
        padding:['7px 5px','!important']
    }
})


const CreateTable = ({ text }) => {

const classses=useStyles();
    return (

        <Box>
            <Typography mt={2} mb={2}>
                {text}
            </Typography>

            <Table sx={{ minWidth: '100%',border:'1px solid rgba(224,224,224,1)' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classses.tablecell}></TableCell>
                        <TableCell className={classses.tablecell} >Key</TableCell>

                        <TableCell className={classses.tablecell} >Value</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>

                    <AddRow />
                </TableBody>
            </Table>
        </Box>
    )
}

export default CreateTable;