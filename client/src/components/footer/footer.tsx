import { Link } from 'react-router-dom';
import './style.css';

function Footer() {
  return (
    <div
      className="footer"
    >
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
          <ol>
            <h1>Used cars by brand</h1>
            <Link to="/"><li>Toyota Cars</li></Link>
            <Link to="/"><li>Toyota Cars</li></Link>
            <Link to="/"><li>Nissan Cars</li></Link>
            <Link to="/"><li>Ford Cars</li></Link>
            <Link to="/"><li>BMW Cors</li></Link>
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
            <li>2020</li>
            <li>2019</li>
            <li>2018</li>
            <li>2017</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Footer;
