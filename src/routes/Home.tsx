import HeroImage from '../components/pages/home/HeroImage/HeroImage';
import Title from '../components/pages/home/Title/Title';
import CourseCard from '../components/pages/home/CourseCard/CourseCard';
import OurTools from '../components/pages/home/OurTools/OurTools';
import About from '../components/pages/home/About/About';
import ImageSection from '../components/pages/home/ImageSection/ImageSection';

import style from './home.module.css';

const Home = () => {
    return (
        <div className={style.home}>
            <HeroImage />
            <div className={style.homeContainer}>
                <Title />
                <CourseCard />
            </div>
            <OurTools />
            <div className={style.homeContainer}>
                <About />
            </div>
            <ImageSection />
        </div>
    );
};

export default Home;
