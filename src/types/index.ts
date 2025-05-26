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
    originPlanet: OriginPlanet
}

type OriginPlanet = {
    name: string,
    image: string
    description: string
    isDestroyed: boolean

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