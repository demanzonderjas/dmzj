import { FirebaseApp } from "firebase/app";
import firebaseApp from "../config/database";
import { Database, DatabaseReference, child, get, getDatabase, ref } from "firebase/database";
import { Auth, User, getAuth, onAuthStateChanged } from "firebase/auth";
import { makeObservable, observable } from "mobx";

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
            this.user = user;
        });

        makeObservable(this, { user: observable });
    }

    async getArticles() {
        const dbRef = ref(this.database);

        const snapshot = await get(child(dbRef, "articles"));
        return snapshot.val();
    }
}
