import Applify from "./Applify"

export const Items: any[] = [
    { name: "🍕", word: "Pizza", price: 130, key: 1, onSelect: function () { Applify.cache("ADD", "🍕", 130) }, onDelete: async function () { Applify.cache("DELETE", "🍕") } },
    { name: "🍔", word: "Burger", price: 60, key: 2, onSelect: function () { Applify.cache("ADD", "🍔", 60) }, onDelete: async function () { Applify.cache("DELETE", "🍔") } },
    { name: "🍝", word: "Chowmein", price: 70, key: 3, onSelect: function () { Applify.cache("ADD", "🍝", 70) }, onDelete: async function () { Applify.cache("DELETE", "🍝") } },
    { name: "🍜", word: "Maggi", price: 80, key: 4, onSelect: function () { Applify.cache("ADD", "🍜", 80) }, onDelete: async function () { Applify.cache("DELETE", "🍜") } },
    { name: "🍟", word: "Fries", price: 30, key: 5, onSelect: function () { Applify.cache("ADD", "🍟", 30) }, onDelete: async function () { Applify.cache("DELETE", "🍟") } },
    { name: "🍫", word: "Chocolate", price: 10, key: 6, onSelect: function () { Applify.cache("ADD", "🍫", 125) }, onDelete: async function () { Applify.cache("DELETE", "🍫") } },
];