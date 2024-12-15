export default {
    addItem(name: string, value: string): void {
        localStorage.setItem(name, value);
    },

    getItem(name: string): any {
        const item = localStorage.getItem(name);

        return item;
    },

    deleteItem(name: string): void {
        localStorage.removeItem(name);
    },
};