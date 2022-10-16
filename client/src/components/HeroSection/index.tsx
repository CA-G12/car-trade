import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import './styles.css';

function HeroSection() {
  return (

    <section className="hero-section">
      <Box
        className="hero-image"
        sx={{
          display: {
            xs: 'none',
            md: 'block',
          },
        }}
        component="img"
        alt=""
        // src="../../assets/banner.jpg"
        src="https://carswitch.com/components/choose-country/images/banner.jpg"
      />
      <CssBaseline />
      <Container
        className="container"
        sx={{
          justifyContent: {
            xs: 'center',
            md: 'flex-end',
          },
          // backgroundColor: '#F6F7F9',
        }}
        fixed
      >
        <section className="brief-statement">
          <Typography
            className="hero-txt1"
            variant="h4"
            gutterBottom
          >
            The better way
          </Typography>

          <Typography
            className="hero-txt2"
            variant="subtitle1"
            gutterBottom
          >
            to buy or sell a used car
          </Typography>

          <Typography
            variant="subtitle2"
            gutterBottom
          >
            Great Value | Trusted Quality | All Online
          </Typography>
        </section>
      </Container>
    </section>
  );
}

export default HeroSection;