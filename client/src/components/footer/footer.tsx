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
            <h1>Used cars by Budget</h1>
            <li>Sell any  in Dhabi</li>
            <li>Sell any  in Sharjah</li>
            <li>Sell any  in Ajman</li>
            <li>Sell any  in Al Ain</li>
          </ol>
          <ol>
            <h1>Used cars by Body Type</h1>
            <li>Toyota Cars </li>
            <li>Nissan Cars </li>
            <li>Ford Cars </li>
            <li>BMW Cors </li>
          </ol>
          <ol>
            <h1>Used Cars by Year</h1>
            <li>2020 used cars for sale in USE</li>
            <li>2019 used cars for sale in USE</li>
            <li>2018 used cars for sale in USE</li>
            <li>2017 used cars for sale in USE</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Footer;
