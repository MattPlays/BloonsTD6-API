class Bloon {
    /**
     * 
     * @param {string} id 
     * @param {string} name 
     * @param {string} type 
     * @param {number | object} rbe 
     * @param {number} speed 
     * @param {string[] | []} types 
     * @param {string[] | []} immunity 
     * @param {{}[] | []} children 
     * @param {{}[] | []} parents 
     * @param {number | null} initalRound 
     * @param {number  | null} initalRoundABR 
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
        this.children = [];
        children.forEach((child) => {
            this.children.push({
                id: child.id ?? "",
                count: child.count ?? 0,
                type: child.type ?? ""
            });
        });
        this.parents = [];
        parents.forEach((parent) => {
            this.parents.push({
                id: parent.id ?? "",
            });
        });
        this.initalRound = initalRound ?? null;
        this.initalRoundABR = initalRoundABR ?? null;
    }
}
module.exports = Bloon;