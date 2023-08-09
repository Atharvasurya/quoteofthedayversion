import LOGO from '../../assets/images/logo.png';
import './home.css';

const Home = () => {
 return (
  <>
  <div className='container'>
    <div className="logo-container">
      <img
        className="logo"
        src={LOGO}
      />
    </div>
    <div className='btn-const'>
      <button className='btn-let'>Get Quotes!</button>
    </div>
    </div>
    </>
  )
}

export default Home;