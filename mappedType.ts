interface IPet{
    name: String
    age: number
}

type ReadOnlyPet = {
    readonly [K in keyof IPet]: IPet[K]
}
