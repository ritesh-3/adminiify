import { Box, Typography } from '@mui/material'
import { tokens } from '../theme';
import { useTheme } from '@emotion/react';

const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <Box mb='18px' display='flex' justifyContent={'space-between'}>
            <Typography variant='h2' color={colors.grey[100]} sx={{ mb: '5px' }} >{title}</Typography>
            <Typography variant='h5' color={colors.greenAccent[400]} >{subtitle}</Typography>
        </Box>
    )
}

export default Header
