import MenuLinks from "./MenuLinks";
import "./Header.css";
import Search from "./Search";

function Header(){
    return (
        <header className="header">
            <MenuLinks/>
            <Search/>
        </header>
    );
}

export default Header