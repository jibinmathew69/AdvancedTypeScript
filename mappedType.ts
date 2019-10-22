interface IPet{
    name: String
    age: number
}

type ReadOnlyPet = {
    readonly [K in keyof IPet]: IPet[K]
}

let pet:IPet = {name: "Tom", age: 3}
let readPet:ReadOnlyPet = {name: "Tom", age: 3}

pet.age = 2
readPet.age = 2 // throws error