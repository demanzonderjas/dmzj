import Link from "next/link";
import { Page } from "../components/layout/Page";
import { TProject } from "../typings/project";
import { ProjectDescription } from "../components/ProjectDescription";

export default function Projecten() {
    const currentProjects: TProject[] = [
        {
            title: "Puzzel.org",
            summary:
                "<p>Puzzel.org is een tool waarmee je eenvoudig zelf online puzzels kunt bouwen. Deze kan je vervolgens delen met je achterban en online laten oplossen. 20+ puzzelsoorten, vele features en mijn primaire levensonderhoud :-).</p>",
            link: "https://puzzel.org",
            image: "puzzelorg.png",
        },
        {
            title: "ATEX",
            summary:
                "<p>ATEX is een online platform voor universiteiten waarbij uitwisseling van proefdieren en weefsels wordt bevorderd zodat in totaal minder dieren nodig zijn.</p>",
            link: "https://atex.uu.nl",
            image: "atex.png",
        },
        {
            title: "Preclinicaltrials.eu",
            summary:
                "<p>Via Preclinicaltrials.eu kunnen onderzoekers hun studies/onderzoeken pre-registreren en ongeacht de uitslag, de resultaten publiceren.</p><p class='py-4'>Dit is een onderdeel van Open Science om transparantie te bevorderen.</p>",
            link: "https://preclinicaltrials.eu",
            image: "logo-pct.jpg",
        },
        {
            title: "TreesForAll - Bomen/bossen planten",
            summary: "<p>Klimaatverandering is een enorme uitdaging en ik draag graag mijn steentje bij door een flink deel van mijn resterende inkomsten om te zetten in groen via de ANBI stichting TreesForAll.</p><p>Op dit moment heb ik <strong>5.000+ bomen</strong> geplant.</p>",
            link: "https://treesforall.nl",
            image: "treesforall.svg",
        },
        {
            title: "Demanzonderjas.nl",
            summary: "<p>Eigen website met schrijfsels en overzicht van mijn lopende bezigheden :-).</p>",
            link: "https://demanzonderjas.nl",
            image: "logo.jpeg",
        },
    ];

    const oldProjects: TProject[] = [
        {
            title: "Supersubs.nl",
            summary:
                "<p>Online platform waarmee spelers binnen een korfbalvereniging eenvoudig invallers/reserves kunnen regelen voor hun wedstrijden.</p>",
            link: "https://supersubs.nl",
            image: "supersubs.png",
        },
        {
            title: "Dichtbundel - Onverwoestbaar",
            summary: "<p>Zelf uitgegeven dichtbundel met gedichten en vrolijke Paint-illustraties :-).</p>",
            link: "/onverwoestbaar-dichtbundel.pdf",
            image: "dichtbundel.png",
        },
    ];

    return (
        <Page header="projecten">
            <h1>Projecten</h1>
            <h2 className="w-full">Actief</h2>
            <div className="list">
                {currentProjects.map((p) => (
                    <ProjectDescription {...p} key={p.title} />
                ))}
            </div>
            <h2 className="w-full">Inactief</h2>
            <div className="list">
                {oldProjects.map((p) => (
                    <ProjectDescription {...p} key={p.title} />
                ))}
            </div>
        </Page>
    );
}
