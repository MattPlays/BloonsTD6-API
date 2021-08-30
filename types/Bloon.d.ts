export interface Bloon {
    id: string,
    name: string,
    type: string,
    rbe: number,
    speed: number,
    types: string[],
    immunity: string[],
    children: {
        id: string,
        count: number,
        type: string
    }[],
    parents: {id: string}[],
    initalRound: number,
    initalRoundABR: number,
}