import { useEffect } from 'react';

import style from './about.module.css';
import Aos from 'aos';
import about from '../../../../assets/images/home/imgAbout.jpg';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    });
    return (
        <div className={style.container}>
            <div
                className={style.imgContainer}
                data-aos="fade-right"
                data-aos-delay='500'
                data-aos-offset='100'
            >
                <img src={about} alt="about" className={style.img} />
            </div>
            <div className={style.textContent}
            data-aos="fade-left"
            data-aos-delay='500'
            data-aos-offset='100'>
                <h2 className={style.h2}>SOBRE</h2>
                <p className={style.p}>
                    O CESAE Digital é um centro de formação especializado em
                    competências digitais, focado na qualificação profissional e
                    certificação de competências em tecnologia. Com mais de 30
                    anos de experiência, apoia empresas e profissionais na
                    adaptação às exigências do mercado digital. Oferece cursos
                    presenciais e online em áreas como marketing digital,
                    administração de sistemas e desenvolvimento web, além de
                    serviços como incubação de empresas e certificação
                    profissional. Atua em diversas regiões de Portugal,
                    contribuindo para a inovação e inclusão digital.
                </p>
            </div>
        </div>
    );
};

export default About;
