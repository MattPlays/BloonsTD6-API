export interface Hero {
    id: string,
    name: string,
    description: string,
    skinChange: number[],
    skins: {id: string, name: string}[],
    cost: {
        easy: number, 
        medium: number, 
        hard: number, 
        impoppable: number
    },
    stats: {
        damage: string,
        pierce: string,
        attackSpeed: string,
        range: string,
        type: string,
        special: {name: string, value: string}[],
    },
    unlock: {
        how: string, 
        value: string,
    },
    levelSpeed: string,
    levels: {
        level: number,
        description: string,
        xp: number,
        rounds: {easy: string, medium: string, hard: string, impoppable: string},
        effects: string[],
        source: string,
    }[],
}