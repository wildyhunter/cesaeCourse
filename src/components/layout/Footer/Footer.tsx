import { Link } from 'react-router-dom';
import style from '@/components/layout/Footer/footer.module.css';
import logo from '@/assets/images/logo.svg';
import instagram from '@/assets/icons/socialMidia/InstagramOld.svg'
import linkedin from '@/assets/icons/socialMidia/LinkedIn.svg'
import gmail from '@/assets/icons/socialMidia/GmailLogo.svg'

const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div className={`${style.box} ${style.box1ColorPosition}`}></div>
            <div className={`${style.box} ${style.box2ColorPosition}`}></div>
            <div className={style.footer}>
                <div className={style.newsletterContainer}>
                    <h2 className={style.h2}>
                        Assine nossa newsletter e fique por dentro das
                        novidades!
                    </h2>
                    <form action="" className={style.form}>
                        <input
                            className={style.input}
                            type="text"
                            name="newsletter"
                            placeholder="Insira seu email"
                        />
                        <button type="submit" className={style.button}>
                            INSCREVER
                        </button>
                    </form>
                    <div className={style.line}></div>
                </div>
                <div className={style.linksContainer}>
                    <img
                        className={style.img}
                        src={logo}
                        alt="Logo Marca Cesae"
                    />
                    <div className={style.links}>
                        <ul className={style.ul}>
                            <li>
                                <Link className={style.link} to={"/"}>HOME</Link>
                            </li>
                            <li>
                                <Link className={style.link} to={"/"}>CURSES</Link>
                            </li>
                            <li>
                                <Link className={style.link} to={"/"}>FORUM</Link>
                            </li>
                            <li>
                                <Link className={style.link} to={"/"}>SUPORT</Link>
                            </li>
                        </ul>
                        <div className={style.socialMidia}>
                            <Link className={style.sociallink} to={"/"}><img src={linkedin} alt="Linkedin" /></Link>
                            <Link className={style.sociallink} to={"/"}><img src={instagram} alt="Instagram" /></Link>
                            <Link className={style.sociallink} to={"/"}><img src={gmail} alt="Gmail" /></Link>
                        </div>
                    </div>
                </div>
                <div className={style.copyright}>
                    <div className={style.team}>
                        <p>Team Developers:</p>
                        <p>Vagner - Marina - Carol</p>
                    </div>
                    <div className={style.contacto}>
                        <p>porto@cesae.pt</p>
                        <p>226 195 200*</p>
                    </div>
                    <div className={style.termsContainer}>
                        <div className={style.termos}>
                            <Link className={style.link} to={"/"}><p>Termos e Conditions</p></Link>
                            <Link className={style.link} to={"/"}><p>Privacy Policy</p></Link>
                        </div>
                        <div className={style.copyrightContainer}>
                            <p>Copyright © 2025 CESAE.
                            All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
