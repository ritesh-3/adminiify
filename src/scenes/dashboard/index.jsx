import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/Statbox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m='20px'>
      <Header title='DASHBOARD' subtitle='welcome to your dashboard' />

      {/* Grids & Charts */}
      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gridAutoRows='140px'
        gap="20px"
        height='78vh'
        overflow='auto'
      >
        {/* Row 1 */}
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox
            title='10,371'
            subtitle='Email Sent'
            progress='0.75'
            increase='+14%'
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox
            title='8,371'
            subtitle='Sales obtained'
            progress='0.5'
            increase='+21%'
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox
            title='100M'
            subtitle='Traffix'
            progress='0.67'
            increase='+2%'
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox
            title='40,371'
            subtitle='New usets'
            progress='0.30'
            increase='+41%'
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        {/* Row 2 */}
        <Box
          gridColumn='span 8'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt='25px'
            p='0 30px'
            display='flex'
            justifyContent='space-between'
          >
            <Box>
              <Typography variant="h5" fontWeight='600' color={colors.grey[100]}  >
                Revenue generated
              </Typography>
              <Typography variant="h3" fontWeight='bold' color={colors.greenAccent[500]}  >
                $24,221,32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: '26px', color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>
          <Box height='250px' mt='-20px' >
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* Transactions */}
        <Box gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          overflow='auto'
        >
          <Box display='flex'
            justifyContent='space-between'
            alignItems='center'
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p='15px'
          >
            <Typography
              color={colors.grey[100]}
              variant="h5"
              fontWeight='600'
            > Recent Transactions </Typography>
          </Box>
          {mockTransactions.map(
            (transaction, idx) => (
              <Box
                key={`${transaction.txId}-${idx}`}
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                borderBottom={`4px solid ${colors.primary[500]}`}
                p='15px'
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight='600'
                  > {transaction.txId} </Typography>
                  <Typography
                    color={colors.grey[100]}
                  > {transaction.user} </Typography>
                </Box>
                <Box color={colors.grey[100]} > {transaction.date} </Box>
                <Box backgroundColor={colors.greenAccent[500]} p='5px 10px' borderRadius='4px' >
                  ${transaction.cost}</Box>
              </Box>
            )
          )}
        </Box>
        {/* Row 3 */}
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          p='30px'
        >
          <Typography variant="h5" fontWeight='600'>
            Campaign
          </Typography>
          <Box display='flex' flexDirection='column' alignItems='center' mt='25px' >
            <ProgressCircle size="125" />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: '15px' }} >
              $34,567 revenue generated
            </Typography>
            <Typography >include extra misc const and expnd </Typography>
          </Box>
        </Box>
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
        >
          <Typography variant="h5" fontWeight='600' sx={{ p: '30px 30px 0 30px' }}>
            Saled Quantiy
          </Typography>
          <Box height='250px' mt='-20px' >
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          p='30px'
        >
          <Typography variant="h5" fontWeight='600' sx={{ mb: '15px' }}>
            GeoGraphy Based Traffic
          </Typography>
          <Box height='200px'  >
            <GeographyChart />
          </Box>
        </Box>
        {/*  */}

      </Box>
    </Box>
  )
}

export default Dashboard
