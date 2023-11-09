
import './Header.css';
// 
const Header = () => {
 return(
   <header>
    <nav className="navbar navbar-expand-lg bg-dark sticky-top" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand font-russo-one" href="/">RitoStore</a>
        <div className='d-flex gap-4 align-items-center order-0 order-md-1'>
          <div className='d-flex ms-2 order-0-'>
            <a href="/" className='shop-cart position-relative'><i className="fa-solid fa-cart-shopping fa-lg"></i></a>
          </div>
          <button className="navbar-toggler order-1-" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        
        <div className="collapse navbar-collapse justify-content-end order-1 order-md-0 " id="navbarNavDropdown">
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
          </div>
        </div>
        
      </div>
    </nav>
   </header>
 )
}

export { Header }