import style from './ourTools.module.css';
import { motion } from 'framer-motion';
import { languages, Language} from '@/services/LanguagesServices';


const OurTools = () => {
const imageLanguages: Language[] = languages
const imageLanguages2: Language[] = languages
    return (
        <div className={style.toolsContainer}>
            <motion.div
                className={style.motionContainer}
                initial={{ x: '0' }}
                animate={{ x: '-100%'}}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: 'linear',
                }}
            >
                {imageLanguages.map((src, i) => (
                    <div key={i} className={style.imageCard}>
                        <img
                            src={src.image}
                            alt={src.name}
                            className={style.image}
                        />
                        <p className={style.p}>{src.name}</p>
                    </div>
                ))}
            </motion.div>
            <motion.div
                className={style.motionContainer}
                initial={{ x: '0' }}
                animate={{ x: '-100%'}}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: 'linear',
                }}
            >
                {imageLanguages2.map((src, i) => (
                    <div key={i} className={style.imageCard}>
                        <img
                            src={src.image}
                            alt={src.name}
                            className={style.image}
                        />
                        <p className={style.p}>{src.name}</p>
                    </div>
                ))}
            </motion.div>
            <div className={style.blur}></div>
        </div>
    );
};

export default OurTools;
