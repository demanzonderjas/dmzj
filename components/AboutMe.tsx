import Link from "next/link";

export const AboutMe: React.FC = () => {
    const startingYear = 2005;
    const currentYear = new Date().getFullYear();
    const noJasTime = currentYear - startingYear;
    return (
        <div className="AboutMe max-w-3xl">
            <p className="my-4">
                Hoi, ik ben Daan en ik <Link href="/schrijfsels">schrijf gedichten</Link> onder de alias &quot;
                <strong>de man zonder jas</strong>&quot;.
            </p>
            <p className="my-4">
                Het niet meer dragen van een jas sinds {noJasTime} jaar, heeft gezorgd voor veel bekijks, leuke gesprekken en
                zelfs een gezondheidscheck van de politie.
            </p>
            <p className="my-4">
                Ik zie het als een mooie uitdaging voor wat mentale weerbaarheid en het bouwen van vertrouwen in je lichaam.
            </p>
            <p className="my-4">
                Verder heb ik mezelf leren programmeren als webdeveloper en bouw ik met veel plezier zelfstandig aan enkele{" "}
                <Link href="/projecten">projecten</Link>.
            </p>
            <p className="my-4">
                Mocht je een keertje willen mailen, tof! Dat kan via{" "}
                <a href="mailto:daan@demanzonderjas.nl">daan@demanzonderjas.nl</a>
            </p>
        </div>
    );
};
