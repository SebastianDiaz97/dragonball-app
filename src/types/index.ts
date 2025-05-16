export type InfoData = {
    items: InfoCharacter[],
    meta: Meta
}

export type InfoCharacter = {
    id: number,
    name: string,
    ki: string,
    maxKi: string,
    race: string,
    gender: string,
    image: string,
    affiliation: string
    description: string,
    transformations: Transformations[]
}

export type Transformations = {
    id: number,
    name: string,
    image: string,
    ki: string,
}


type Meta = {
    totalPages: number
}