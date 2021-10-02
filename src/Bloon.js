class Bloon {
    /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} type 
     * @param {number | object} rbe 
     * @param {number} speed 
     * @param {string[]} types 
     * @param {string[]} immunity 
     * @param {{id: string, count: number, type: string}[]} children 
     * @param {{id: string}[]} parents 
     * @param {number} [initalRound] 
     * @param {number} [initalRoundABR] 
     * @returns {Bloon}
     */
    constructor(id, name, type, rbe, speed, types, immunity, children, parents, initalRound, initalRoundABR) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.rbe = rbe;
        this.speed = speed;
        this.types = types;
        this.immunity = immunity;
        this.children = children;
        this.parents = parents;
        this.initalRound = initalRound ?? null;
        this.initalRoundABR = initalRoundABR ?? null;
    }
}
module.exports = Bloon;