class Hero {
    /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} description 
     * @param {number[]} skinChange 
     * @param {{id: string, name: string}[]} skins 
     * @param {{easy: number, medium: number, hard: number, impoppable: number}} cost 
     * @param {{damage: string, pierce: string, attackSpeed: string, range: string, type: string, special: string[] }} stats 
     * @param {{how: string, value: string}} unlock 
     * @param {string} levelSpeed 
     * @param {{level: number, description: string, xp: number, rounds: {easy: string, meidum: string, hard: String, impoppable: string}, effects: string[], source: string}[]} levels
     * @returns {Hero}
     */
    constructor (id, name, description, skinChange, skins, cost, stats, unlock, levelSpeed, levels) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.skinChange = skinChange;
        this.skins = skins.map((d) => {return {
            id: d.id ?? null,
            name: d.name ?? null
        }});
        this.cost = {
            easy: cost.easy ?? null,
            medium: cost.medium ?? null,
            hard: cost.hard ?? null,
            impoppable: cost.impoppable ?? null,
        };
        this.stats = {
            damage: stats.damage ?? null,
            pierce: stats.pierce ?? null,
            attackSpeed: stats.attackSpeed ?? null,
            range: stats.range ?? null,
            type: stats.type ?? null,
            special: stats.special ?? null,
        };
        this.unlock = {
            how: unlock.how ?? null,
            value: unlock.value ?? null,
        };
        this.levelSpeed = levelSpeed;
        this.levels = levels.map((level) => {return {
            level: level.level ?? null,
            description: level.description ?? null,
            xp: level.xp ?? null,
            rounds: {
                easy: level.rounds.easy ?? null,
                medium: level.rounds.medium ?? null,
                hard: level.rounds.hard ?? null,
                impoppable: level.rounds.impoppable ?? null,
            },
            effects: level.effects,
            source: level.source
        }});
    }
}
module.exports = Hero;