import LogoFooter from '../../assets/logoWhite.png'
import './footer.css'



function Footer() {
    
    return (
    <footer className='footer'>
        <img className='footer_logo' src={LogoFooter} alt="logo"/>
        <div className='footer_info'>© 2020 Kasa. All rights reserved </div>
    </footer>
    )
}
export default Footer
  