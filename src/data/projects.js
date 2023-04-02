import euromobila from "../assets/euromobila.png";
import vag from "../assets/vag.png";
import kbk from "../assets/kbk.png";
import inviapacchi from "../assets/inviapacchi.png";

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