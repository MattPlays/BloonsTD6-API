class Tower {
    /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} description 
     * @param {string} type 
     * @param {{easy: number, medium: number, hard: number, impoppable: number}} cost 
     * @param {{damage: string, pierce: string, attackSpeed: string, range: string, type: string}} stats 
     * @param {number} footprint 
     * @param {string} defaultHotkey 
     * @param {object} paths
     * @returns {Tower} 
     */
    constructor (id, name, description, type, cost, stats, footprint, defaultHotkey, paths) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
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
        };
        this.footprint = footprint;
        this.defaultHotkey = defaultHotkey;
        this.paths = {
            path1: {
                crosspaths: {
                    first: {
                        name: paths.path1.crosspaths.first.name ?? null,
                        path: paths.path1.crosspaths.first.path ?? null,
                        score: paths.path1.crosspaths.first.score ?? null,
                        reason: paths.path1.crosspaths.first.reason ?? null
                    },
                    second: {
                        name: paths.path1.crosspaths.second.name ?? null,
                        path: paths.path1.crosspaths.second.path ?? null,
                        score: paths.path1.crosspaths.second.score ?? null,
                        reason: paths.path1.crosspaths.second.reason ?? null
                    }
                },
                upgrades: paths.path1.upgrades.map((upgrade) => {return {
                    name: upgrade.name,
                    description: upgrade.description,
                    cost: {
                        easy: upgrade.cost.easy ?? null,
                        medium: upgrade.cost.medium ?? null,
                        hard: upgrade.cost.hard ?? null,
                        impoppable: upgrade.cost.impoppable ?? null,
                    },
                    unlockXp: upgrade.unlockXp,
                    effects: upgrade.effects,
                    source: upgrade.source,
                }})
            }
        }
    }
}
module.exports = Tower;