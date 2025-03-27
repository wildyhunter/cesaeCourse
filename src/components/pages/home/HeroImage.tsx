import { motion } from 'framer-motion';
import style from './heroImage.module.css';
const HeroImage = () => {
    return (
        <>
            <div className={`${style.heroImage} ${style.ImageContainer}`}></div>
            <div className={style.textContainer}>
                <motion.h1
                    className={style.h1}
                    initial={{ opacity: 0, x: -1600 }}
                    animate={{ opacity: 1, x: 80 }}
                    transition={{
                        type: 'spring',
                        stiffness: 50,
                        damping: 15,
                        bounce: 0.05,
                    }}
                >
                    Aprenda, Cresça, Evolua Tudo Numa Só Plataforma!
                </motion.h1>
                <motion.h3
                    className={style.h3}
                    initial={{ opacity: 0, x: -1600 }}
                    animate={{ opacity: 1, x: 80 }}
                    transition={{
                        type: 'spring',
                        stiffness: 50,
                        damping: 20,
                        bounce: 0.05,
                    }}
                >
                    Aceda a cursos de qualidade na aplicação web do CESAE
                    Digital e desenvolva novas competências a qualquer hora, em
                    qualquer lugar.
                </motion.h3>
            </div>
            <div className={`${style.bodyImage} ${style.ImageContainer}`}></div>
        </>
    );
};

export default HeroImage;
