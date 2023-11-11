import logo from '../assets/logo.png';
import '../styles/header.css'

function Header(){
    return (
        <div className='contaner-fluid d-flex py-2' >
            <div className="row">
                    <div className='col-3 offset-md-2'>
                    <img className='img-fluid' src={logo} alt="logo" />
                    </div>
                    <div className='col-7 fw-bold fs-md-1 d-flex  align-items-center' >GESTION BIBLIOTHEQUE</div>
            </div>
        </div>
    )
}
export default Header;