import Link from "next/link";
import { TProject } from "../typings/project";

export const ProjectDescription: React.FC<TProject> = (p) => {
    return (
        <div className="flex justify-center items-center gap-10 my-8">
            <div className="image-wrapper flex items-center justify-center" style={{ minWidth: "170px", maxWidth: "170px" }}>
                <img src={p.image} className="max-w-full max-h-full" alt="p.title" />
            </div>
            <div className="content flex flex-col gap-3">
                <h3 className="font-bold text-xl">{p.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: p.summary }} />
                {p.link && (
                    <span>
                        <Link href={p.link}>Open project</Link>
                    </span>
                )}
            </div>
        </div>
    );
};
