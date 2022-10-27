import {
  Box, Button, ButtonGroup, Container,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

const taps = [{ name: 'HOME', path: '/', id: 1 },
  { name: 'SHOP', path: '/cars', id: 2 },
  { name: 'CONTACT', paht: '/contact', id: 3 }];
export default function NavBar() {
  const { pathname } = useLocation();
  return (
    <Container sx={{
      background: '#dbdbdb',
      height: '4.5rem',
      position: 'sticky',
      top: 0,
      maxWidth: '100vw !important',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 3rem !important',
      mb: '1rem',
    }}
    >
      <Box>
        LOGO
      </Box>
      <Box sx={{
        height: '100%',
        width: '40rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
      >
        {taps.map(({ name, path, id }) => (
          <Link className={pathname === path ? 'active' : 'link'} key={id} to={`${path}`}>
            {name}
          </Link>
        ))}
      </Box>
      <Box sx={{
        width: '45vw',
        display: 'flex',
        justifyContent: 'end',
        height: '80%',
      }}
      >
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          sx={{ borderRadius: '15px', boxShadow: 'none' }}
        >
          <Button sx={{
            width: '9rem',
            backgroundColor: '#dbdbdb',
            color: '#000',
            borderRadius: '15px !important',
            border: '1px solid #dbdbdb',
          }}
          >
            <Link to="/login">
              LOGIN
            </Link>
          </Button>
          <Button sx={{
            width: '9rem',
            border: '1px solid black',
            boxShadow: '0 4 25% #000000',
            backgroundColor: '#f5eeee',
            color: '#000',
            borderRadius: '15px !important',
            marginLeft: '1rem',
          }}
          >
            <Link to="/signup">
              SIGNUP

            </Link>
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
