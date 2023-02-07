import { Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import videoBg from '../video/videoBg.mp4';

export default function Home() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h1"
        component="h2"
        position="absolute"
        sx={{
          top: '20px',
          right: '40px',
          fontWeight: '400',
          fontSize: '70px',
          color: 'white',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        Contacts book
        <PhoneIcon fontSize="inherit" sx={{ marginLeft: '10px' }} />
      </Typography>

      <video src={videoBg} autoPlay loop muted></video>
    </Box>
  );
}
