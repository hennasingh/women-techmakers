import { Navbar, NavbarBrand} from 'reactstrap'
import TechmakersLogo from '../assets/femleads.png'

export default function Header() {

    return(
    <Navbar sticky='top' dark expand='md'>      
        <NavbarBrand href='#'>
            Dublin Techmakers
            <img className ='logo' src={TechmakersLogo} alt='Dublin techmakers logo'/>
        </NavbarBrand>   
    </Navbar>
    )
}