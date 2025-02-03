
import logo from './assets/logo.png';

function Navbar() {
  return (
    <>
    <nav>
      <a href="/"><img src={logo} alt="Company Logo" width="200" height="auto" id='logo' /></a>
      <div itemID='links'>
        <a href="projects" className='p'>Projects</a>
        <a href="services" className='p'>Services</a>
        <a href="about" className='p'>About</a>
      </div>
    </nav>
    </>
  )
}

export default Navbar;
