import style from './imageSection.module.css';
import imageSection from '@/assets/images/home/imageSection.png';

const ImageSection = () => {
    return (
        <div className={style.ImageContainer}>
            <img className={style.img} src={imageSection} alt="" />
            <div className={style.textContainer}>
                <h1 className={style.h1}>
                    Transforme código em conquistas e mude seu futuro!
                </h1>
            </div>
        </div>
    );
};

export default ImageSection;
