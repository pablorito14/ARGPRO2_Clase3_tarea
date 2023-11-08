import './Footer.css';

const Footer = () => {
 return(
   <footer className="bg-dark text-light">
    <div className="container d-flex justify-content-between align-items-center sticky-bottom">
      <div>
        Pablo Rito - {new Date().getFullYear()}
      </div>
      <div>
        <a href="/"><i className="fa-brands fa-twitter fa-lg ms-2"></i></a>
        <a href="/"><i className="fa-brands fa-whatsapp fa-lg ms-2"></i></a>
        <a href="/"><i className="fa-brands fa-linkedin fa-lg ms-2"></i></a>
      </div>
    </div>
   </footer>
 )
}

export { Footer }