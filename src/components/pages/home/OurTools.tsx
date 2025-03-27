import style from './ourTools.module.css';
import { motion } from 'framer-motion';

const images = [
    '/react.png',
    '/vue.png',
    '/angular.png',
    '/javaScript.png',
    '/html.png',
    '/css.png',
    '/csharp.png',
    '/adobe.png',
    '/python.png',
    '/linux.png',
    '/type.png',
    '/android.png',
];

const OurTools = () => {
    const path = '../../../src/assets/images/home/ourTools/';
    return (
        <div className={style.toolsContainer}>
            <motion.div
                className={style.motionContainer}
                initial={{ x: '0' }}
                animate={{ x: '-50%' }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: 'linear',
                }}
            >
                {[...images, ...images].map((src, i) => (
                    <div key={i} className={style.imageCard}>
                        <img
                            src={`${path}${src}`}
                            alt={`Image ${i}`}
                            className={style.image}
                        />
                    </div>
                ))}
            </motion.div>
            <div className={style.blur}></div>
        </div>
    );
};

export default OurTools;
