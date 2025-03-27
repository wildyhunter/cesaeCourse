import adobe from '../assets/images/home/ourTools/adobe.png';
import android from '../assets/images/home/ourTools/android.png';
import angular from '../assets/images/home/ourTools/angular.png';
import csharp from '../assets/images/home/ourTools/csharp.png';
import css from '../assets/images/home/ourTools/css.png';
import html from '../assets/images/home/ourTools/html.png';
import javaScript from '../assets/images/home/ourTools/javaScript.png';
import linux from '../assets/images/home/ourTools/linux.png';
import python from '../assets/images/home/ourTools/python.png';
import react from '../assets/images/home/ourTools/react.png';
import typeScript from '../assets/images/home/ourTools/type.png';
import vue from '../assets/images/home/ourTools/vue.png';

export interface Language {
    name: string;
    image: string;
}

export const languages: Language[] = [
    { name: 'Adobe', image: adobe },
    { name: 'Android', image: android },
    { name: 'Angular', image: angular },
    { name: 'CSS', image: css },
    { name: 'C#', image: csharp },
    { name: 'HTML', image: html },
    { name: 'JavaScript', image: javaScript },
    { name: 'Linux', image: linux },
    { name: 'Python', image: python },
    { name: 'React', image: react },
    { name: 'TypeScript', image: typeScript },
    { name: 'Vue', image: vue },
];