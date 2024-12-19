export type postingData = {
    id?: any;
    value?: number | string;
    type?: string
};

type db = {
    xml: Array<any>;
    users: Array<any>;
}

export const db: db = {
    xml: [],
    users: [],
};