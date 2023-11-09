
import './Header.css';
// 
const Header = () => {
 return(
   <header>
    <nav className="navbar navbar-expand-lg bg-dark sticky-top" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand" href="/">MyAppLogo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <div className="navbar-nav">
            <div className="nav-item">
              <a href="/home" className="nav-link">Inicio</a>
            </div>
            <div className="nav-item">
              <a href="/prod" className="nav-link">Productos</a>
            </div>
            <div className="nav-item">
              <a href="/cont" className="nav-link">Contacto</a>
            </div>
            {/* <div className="nav-item">
              <div className="nav-link"><i className="fa-solid fa-cart-shopping"></i></div>
            </div> */}
          </div>
        </div>
        
        <div className='d-flex ms-2'>
          <a href="/" className='shop-cart'><i className="fa-solid fa-cart-shopping fa-lg"></i></a>
          
        </div>
      </div>
    </nav>
   </header>
 )
}

export { Header }