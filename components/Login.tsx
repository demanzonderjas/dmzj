import { useRouter } from "next/router";
import { useDatabase } from "../hooks/useDatabase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { useAdmin } from "../hooks/useAdmin";

export const Login: React.FC = observer(() => {
    const { db } = useDatabase();
    const { isAdmin } = useAdmin();
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData) as { [k in string]: string };

        try {
            await signInWithEmailAndPassword(db.auth, email, password);
            router.push("/");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (isAdmin) {
            router.push("/");
        }
    }, [isAdmin]);

    return (
        <form onSubmit={handleSubmit} className="flex justify-center w-full flex-wrap">
            <div className="fields flex flex-wrap justify-center w-full">
                <input name="email" type="text" readOnly={true} value="daan@demanzonderjas.nl" />
                <input name="password" type="password" />
            </div>
            <button type="submit" className="my-4 px-6">
                Start
            </button>
        </form>
    );
});
