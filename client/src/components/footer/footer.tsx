import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './style.css';

function Footer() {
  return (
    <div
      className="footer"
    >
      <Typography
        variant="h6"
        noWrap
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          fontSize: '27px',
          letterSpacing: '.3rem',
          color: '#fff',
          textDecoration: 'none',
        }}
      >
        GoodCar
      </Typography>
      <div style={{
        display: 'flex',
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        color: '#fff',
      }}
      >
        <div
          className="footerCont"
        >
          <div className="table">
            <ol>
              <h1>Used cars by brand</h1>
              <Link to="/cars"><li>Toyota Cars </li></Link>
              <Link to="/cars"><li>Nissan Cars </li></Link>
              <Link to="/cars"><li>Ford Cars </li></Link>
              <Link to="/cars"><li>BMW Cors </li></Link>
              {' '}
            </ol>
            <ol>
              <h1>Used cars by Type</h1>
              <Link to="/cars"><li>Toyota Cars </li></Link>
              <Link to="/cars"><li>Nissan Cars </li></Link>
              <Link to="/cars"><li>Ford Cars </li></Link>
              <Link to="/cars"><li>BMW Cors </li></Link>
            </ol>
            <ol>
              <h1>Used Cars by Year</h1>
              <Link to="/cars"><li>2020 </li></Link>
              <Link to="/cars"><li>2021 </li></Link>
              <Link to="/cars"><li>2023 </li></Link>
              <Link to="/cars"><li>2019 </li></Link>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
