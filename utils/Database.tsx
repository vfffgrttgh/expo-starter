type db = {
    json: any;
    xml: any;
}

export const db: db = {
    json: function() {
        return {
            "name": "Aayansh",
            "age": 11,
            "city": "Delhi",
        };
    },

    xml: function() {
        return [
            { id: 1, data: "https://media.tenor.com/899ZxzqJhs0AAAAM/lr-agl-goku-carnival.gif" },
            { id: 2, data: "https://media.tenor.com/DfQaBZTaR-QAAAAM/dokkan-battle-top.gif" },
            { id: 3, data: "https://i.redd.it/rce25dh244xc1.gif" },
            { id: 4, data: "https://i.pinimg.com/originals/f2/74/53/f274537087bf0fef20fe24b6bb9f5cdc.gif" },
            { id: 5, data: "https://i.pinimg.com/originals/9b/61/b8/9b61b81d4f9e7bc8a2b84ffe9060eda4.gif" },
        ]
    },
};