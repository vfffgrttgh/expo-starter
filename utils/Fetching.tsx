import { db } from "./Database";

export function fetchData(type: string) {
    if(type === "JSON") {
        return db.json();
    } else {
        return db.xml();
    }
}