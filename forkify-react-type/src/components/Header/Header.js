import Form from './Form/Form';
import Nav from './Nav/Nav';
import logo from '../../img/logo.png'
import classes from './Header.module.css';

const Header = () => {
    return (
    <header className={classes.header}>
        <img src={logo} alt="Logo" className={classes['header__logo']} />
        <Form />
        <Nav />
    </header>
    )
}

export default Header;