export interface Tower {
    id: number;
    name: string;
    description: string
    type: string;
    cost: {
        easy: number,
        medium: number,
        hard: number,
        impoppable: number,
    };
    stats: {
        damage: string,
        pierce: string,
        attackSpeed: string,
        range: string,
        type: string,
    }
    footprint: number,
    defaultHotkey: string,
    paths: {
        path1: {
            crosspaths: {
                first: {
                    name: string,
                    path: string,
                    score: string,
                    reason: string,
                },
                second: {
                    name: string,
                    path: string,
                    score: string,
                    reason: string,
                }
            },
            upgrades: {
                name: string,
                description: string,
                cost: {
                    easy: number, 
                    medium: number, 
                    hard: number, 
                    impoppable: number
                },
                unlockXp: number,
                effects: string[],
                source: string
            }[]
        }
    }
}