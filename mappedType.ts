interface IPet{
    name: String
    age: number
    fav?: number
}

type ReadOnlyPet = {
    +readonly [K in keyof IPet]-?: IPet[K]
}

let pet:IPet = {name: "Tom", age: 3}
// let readPet:ReadOnlyPet = {name: "Tom", age: 3} // throws error

pet.age = 2