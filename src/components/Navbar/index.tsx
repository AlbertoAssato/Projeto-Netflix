
import logoimg from '@images/logo.png';
import { Header, Menu, Options, LogoContainer, IconsContainer } from './style';
import { IoPersonSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const textMenu = ['Início','Filmes', 'Séries', 'Minha Lista']


function Navbar() {
    return (
        <Header>
            <LogoContainer>
                <img src={logoimg} alt='logo'/>
            </LogoContainer>
            <Menu>
                {textMenu.map((text) => (<Options><p>{text}</p></Options>))}
            </Menu>
            <IconsContainer>
                <IoSearch color = "#fff" size="1.5rem"/>
                <IoPersonSharp color = "#fff" size="1.5rem"/>
            </IconsContainer>
        </Header>
    );
}
export default Navbar;