import { Box, useTheme } from "@mui/material"
import Header from "../../components/Header"
import GeographyChart from "../../components/GeographyChart"
import { tokens } from "../../theme";


const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <Box m='20px'>
            <Header title='Bar Chart' subtitle='Simple  Geo map' />
            <Box height='75vh' border={`1px solid ${colors.grey[100]}`}>
                <GeographyChart />
            </Box>
        </Box>
    )
}
export default Geography