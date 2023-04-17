import euromobila from "../assets/euromobila.webp";
import vag from "../assets/vag.webp";
import kbk from "../assets/kbk.webp";
import inviapacchi from "../assets/inviapacchi.webp";

const projects = [
    {
        id: 1,
        name:"InviaPacchi",
        type: "Design",
        title: "InviaPacchi is your best friend for delivering packages all across Italy.",
        subtitle: "We've designed a modern, sleek, user friendly website, that helps customers deliver their packages. Currently working on implementing the design.",
        status: "Work in progress",
        img: inviapacchi
    },
    {
        id: 2,
        name: "Euromobila",
        type: "Live Site",
        title: "Euromobila. Need some new furniture? Look no further.",
        subtitle: "We've designed a modern, sleek, user friendly website that helps customers browse the catalogue of furniture offered by Euromobila.",
        status: "Finished",
        img: euromobila
    },
    {
        id: 3,
        name: "KBK",
        type: "Live Site",
        title: "KBK - german quality.",
        subtitle: "Website showcasing information and services offered by KBK.",
        status: "Finished",
        img: kbk
    },
    {
        id: 4,
        name: "Vag Service",
        type: "Design",
        title: "Vag service. Your vag-mobile is in safe hands.",
        subtitle: "Website concept for our friends over at Vag Service.",
        description: "Concept",
        status: "Finished",
        img: vag
    }
];

export default projects;