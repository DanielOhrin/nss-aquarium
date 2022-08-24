const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 3
        }
    ]
}

export const getFish = getFish = () => {
    return database.fish.map(fish => ({...fish}));
}
