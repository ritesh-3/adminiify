import { Accordion, AccordionSummary, AccordionDetails, Typography, useTheme, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Header from '../../components/Header';
import { tokens } from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m='20px' >
            <Header title='FAQ' subtitle='Frequently Asked Question Page' />
            <Box height='75vh' overflow='scroll' >
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                        <Typography color={colors.greenAccent[500]} variant='h5' >
                            An Important Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            A accusantium impedit, maxime mollitia
                            , expedita quia vel harum iure fugiat, totam laboriosam magni suscipit velit illum
                            accusamus beatae similique optio repellendus!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                        <Typography color={colors.greenAccent[500]} variant='h5' >
                            Another Important Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            A accusantium impedit, maxime mollitia
                            , expedita quia vel harum iure fugiat, totam laboriosam magni suscipit velit illum
                            accusamus beatae similique optio repellendus!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                        <Typography color={colors.greenAccent[500]} variant='h5' >
                            Some other Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            A accusantium impedit, maxime mollitia
                            , expedita quia vel harum iure fugiat, totam laboriosam magni suscipit velit illum
                            accusamus beatae similique optio repellendus!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                        <Typography color={colors.greenAccent[500]} variant='h5' >
                            what the is Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            A accusantium impedit, maxime mollitia
                            , expedita quia vel harum iure fugiat, totam laboriosam magni suscipit velit illum
                            accusamus beatae similique optio repellendus!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                        <Typography color={colors.greenAccent[500]} variant='h5' >
                            still Question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            A accusantium impedit, maxime mollitia
                            , expedita quia vel harum iure fugiat, totam laboriosam magni suscipit velit illum
                            accusamus beatae similique optio repellendus!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

        </Box>
    )
}

export default FAQ