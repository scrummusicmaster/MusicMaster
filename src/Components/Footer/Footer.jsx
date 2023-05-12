import "./Footer.css"
import {Link} from 'react-router-dom'
export function Footer() {
  return (
    <> 

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    
     <footer className="footer-48201">
  <div className="container">
    <div className="row">
      <div className="col-md-4 pr-md-5">
        <a href="#" className="footer-site-logo d-block mb-4">Pink Floyd fans-site</a>
        <p>Página dedicada a los amantes de la legendaria banda británica Pink Floyd, con información, noticias y contenido exclusivo</p>
      </div>
      <div className="col-md">
        <ul className="list-unstyled nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Historia</a></li>
          <li><a href="#">Integrantes</a></li>
          <li><a href="#">Tienda</a></li>
                  </ul>
      </div>
      
      <div className="col-md">
        <ul className="list-unstyled nav-links">
          <li><a href="#">Sobre Nosotros </a></li>
          <li><a href="#">Temininos &amp; Condiciones</a></li>
          
        </ul>
      </div>
      <div className="col-md">
        <ul className="social list-unstyled">
          <li><a href="https://twitter.com/amartinezvelez"><span className="fa fa-facebook-square" /></a></li>
          <li><a href="https://twitter.com/amartinezvelez"><span className="fa fa-twitter-square" /></a></li>
           <li><a href="https://www.youtube.com/channel/UCBNLxvETM8LlU_bcfudPtLg"><span className="fa fa-youtube-square" /></a></li>
          <li><a href="https://co.linkedin.com/in/alejandro-martinez-velez-a9ba56270/"><span className="fa fa-linkedin-square" /></a></li>
        </ul>
        <p className><a href="#" className="btn btn-tertiary">Hazte Fan</a></p>
      </div>
    </div>  <div class="row ">
          <div class="col-12 text-center">
            <div class="copyright mt-5 pt-5">
              <p><small>&copy; Power by Apps For the Wordl </small></p>
              <p><small>&copy; www.appsfortheworld.com </small></p>
              <p><small>&copy; Alejandro Martinez </small></p>
            </div>
          </div>
        </div> 

  
  </div>
</footer>


    </>
  )
}
