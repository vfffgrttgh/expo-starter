import { db, postingData } from "./Database";

// FETCHING
export async function GET(type: string) {
    if(type === "XML") {
        return db.xml;
    } else if(type === "USERS") {
        return db.users;
    }
};

export async function POST({ id, value, type }: postingData) {
    if(type === "XML") {
        db.xml.push({ id: id, value: value});
    } else if(type === "USERS") {
        db.users.push({ id: id, value: value});
    }
};