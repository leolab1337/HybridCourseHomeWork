import About from "./about";
import Counter from './counter';
// import HexConverter from "./hex-converter";
// import Fade from "./fade";
import { OS } from "./os";
import { Counter2 } from "./counter2";
import { Counter3 } from "./counter3";
import { Elements } from "./elements";
// import Calc from "./calc";

export const screens = [
    {
        name: 'About',
        component: About
    },
    // {
    //     name: 'Hex-converter',
    //     component: HexConverter
    // },
    {
        name: 'Counter',
        component: Counter
    },
    {
        name: 'Counter2',
        component: Counter2
    },

    {
        name: 'Counter3',
        component: Counter3
    },

    {
        name: 'Elements',
        component: Elements
    },
    // {
    //     name: 'Fade',
    //     component: Fade
    // },
    {
        name: 'OS',
        component: OS
    },


    // {
    //     name: 'Calc',
    //     component: Calc
    // }
];
