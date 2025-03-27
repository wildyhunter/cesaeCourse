import { useNavigate } from 'react-router-dom';
import style from './Button.module.css';

interface ButtonProps {
    textContent: string;
    link: string;
}
const Button: React.FC<ButtonProps> = ({ textContent, link }) => {
    const navigate = useNavigate();
    return <button className={style.button} onClick={() => navigate(link)}>{textContent}</button>;
};
export default Button;
