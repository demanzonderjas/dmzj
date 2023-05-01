import { FirebaseApp } from "firebase/app";
import firebaseApp from "../config/database";
import {
    Database,
    DatabaseReference,
    child,
    get,
    getDatabase,
    ref,
    remove,
    push,
    set,
    query,
    equalTo,
    orderByChild,
    limitToFirst,
    limitToLast,
} from "firebase/database";
import { Auth, User, getAuth, onAuthStateChanged } from "firebase/auth";
import { action, makeObservable, observable } from "mobx";
import { TArticle } from "../typings/article";

export class Db {
    firebase: FirebaseApp;
    database: Database;
    dbRef: DatabaseReference;
    auth: Auth;
    user: User;

    constructor() {
        this.firebase = firebaseApp;
        this.database = getDatabase(this.firebase);
        this.auth = getAuth(this.firebase);
        this.dbRef = ref(this.database);
        this.user = null;

        onAuthStateChanged(this.auth, (user) => {
            action(() => {
                this.user = user;
            })();
        });

        makeObservable(this, { user: observable });
    }

    async getArticles() {
        const snapshot = await get(child(this.dbRef, "articles"));
        return snapshot.val();
    }

    async getLatestArticles() {
        const snapshot = await get(query(ref(this.database, "articles"), limitToLast(5)));
        return snapshot.val();
    }

    saveArticle(article: TArticle) {
        return push(child(this.dbRef, "articles"), article);
    }

    updateArticle(key: string, article: TArticle) {
        return set(child(this.dbRef, `articles/${key}`), article);
    }

    deleteArticle(key: string) {
        return remove(child(this.dbRef, `articles/${key}`));
    }

    async getArticle(slug: string): Promise<TArticle> {
        const snapshot = await get(
            query(ref(this.database, "articles"), orderByChild("slug"), equalTo(slug), limitToFirst(1))
        );
        const articlesMatching = snapshot.val();
        const key = Object.keys(articlesMatching)[0];
        return { ...articlesMatching[key], key };
    }
}
