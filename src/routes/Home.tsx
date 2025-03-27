import HeroImage from '../components/pages/home/HeroImage';
import Title from '../components/pages/home/Title';
import CourseCard from '../components/pages/home/CourseCard';
import OurTools from '../components/pages/home/OurTools';

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
        </div>
    );
};

export default Home;
