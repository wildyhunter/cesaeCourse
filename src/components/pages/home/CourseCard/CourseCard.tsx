import { useNavigate } from 'react-router-dom';
import { Course, course } from '@/services/CardCourseService';
import { useEffect } from 'react';

import Button from '@/components/ui/Button';
import style from './courseCard.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const CourseCard = () => {
    const navigate = useNavigate();
    const cardCourse: Course[] = course;
    useEffect(() => {
        Aos.init({ duration: 500 });
    });

    return (
        <>
            <div
                className={style.coursesContainer}
                onClick={() => navigate('/')}
            >
                {cardCourse.map((card, index) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                        data-aos-offset={index * 100}
                        key={card.id}
                    >
                        <div className={style.card}>
                            <img
                                src={card.image}
                                alt={card.title}
                                className={style.img}
                            />
                            <h4 className={style.h4}>{card.title}</h4>
                            <p className={style.p}>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={style.buttonCourse}>
                <Button textContent="MOSTRAR TODOS" link="/" />
            </div>
        </>
    );
};

export default CourseCard;
