import style from './Title.module.css';

const Title = () => {
    return (
        <div className={style.titleContainer}>
            <h2 className={style.h2}>Nossos Cursos</h2>
            <div className={style.line}></div>
        </div>
    );
};

export default Title;
