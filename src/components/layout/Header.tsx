import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import style from './header.module.css';
import logo from '../../assets/images/logo.svg';

function Header() {
    return (
        <div className={style.header}>
            <div className={`${style.box} ${style.box1ColorPosition}`}></div>
            <div className={`${style.box} ${style.box2ColorPosition}`}></div>
            <nav>
                <div className={style.navBarContainer}>
                    <Link to="/">
                        <img src={logo} alt="LogoTipoCesae" />
                    </Link>
                    <div>
                            <ul className={style.ul}>
                                <li className={style.li}>
                                    <a href="">HOME</a>
                                </li>
                                <li className={style.li}>
                                    <a href="">CURSOS</a>
                                </li>
                                <li className={style.li}>
                                    <a href="">FÓRUM</a>
                                </li>
                                <li className={style.li}>
                                    <a href="">LOGIN</a>
                                </li>
                                <li>
                                    <Button textContent="REGISTER" link="/" />
                                </li>
                            </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
