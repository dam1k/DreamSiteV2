import euromobila from "../assets/euromobila.webp";
import vag from "../assets/vag.webp";
import kbk from "../assets/kbk.webp";
import inviapacchi from "../assets/inviapacchi.webp";

const projects = [
    {
        id: 1,
        name:"InviaPacchi",
        type: "Design",
        description: "From concept to Frontend Implementation",
        status: "Work in progress",
        img: inviapacchi
    },
    {
        id: 2,
        name: "Euromobila",
        type: "Live Site",
        description: "From concept to fully working website",
        status: "Finished",
        img: euromobila
    },
    {
        id: 3,
        name: "KBK",
        type: "Live Site",
        description: "Concept",
        status: "Finished",
        img: kbk
    },
    {
        id: 4,
        name: "Vag Service",
        type: "Design",
        description: "Concept",
        status: "Finished",
        img: vag
    }
];

export default projects;