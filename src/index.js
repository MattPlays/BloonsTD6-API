const axios = require("axios").default;
const Tower = require("./Tower");
const Hero = require("./Hero");
const Bloon = require("./Bloon");        
const api = "https://statsnite.com/api/btd/v1/"
const apiv2 = "https://statsnite.com/api/btd/v2/"
class BloonsTD6API {
    constructor();
    /**
     * @returns {Promise<Tower[]>}
     */
    GetAllTowers() {
        const url = api + `towers`;
        return axios({
            url: url,
            "method": "GET",
        }).then(res => res.json()).then((data) => {
            return data.map((tower) => {return new Tower(tower.id, tower.name, tower.description, tower.type, tower.cost, tower.stats, tower.footprint, tower.defaultHotkey, tower.paths)})
        }).catch((err) => {throw new Error(err)})
    } 
    /**
     * @param {string} towerID 
     * @returns {Promise<Tower>}
     */
    GetTowerByID(towerID) {
        const url = api + `tower/${towerID}`;
        return axios({
            url: url,
            method: "GET"
        }).then(res => res.json()).then((data) => {
            return new Tower(data.id, data.name, data.description, data.type, data.cost, data.stats, data.footprint, data.defaultHotkey, data.paths);
        }).catch((err) => {throw new Error(err)})
    }
    /**
     * @returns {Promise<Hero[]>}
     */
    GetAllHeros() {
        const url = apiv2 + `heroes`;
        return axios({
            url: url,
            method: "GET"
        }).then(res => res.json()).then((data) => {
            return data.map((hero) => {return new Hero(hero.id, hero.name, hero.description, hero.skinChange, hero.skins, hero.cost, hero.stats, hero.unlock, hero.levelSpeed, hero.levels)})
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * @param {string} heroID 
     * @returns {Promise<Hero>}
     */
    GetHeroByID(heroID) {
        let url = apiv2 + `hero/${heroID}`
        return axios({
            url: url,
            method: "GET"
        }).then(res => res.json()).then((data) => {
            return new Hero(data.id, data.name, data.description, data.skinChange, data.skins, data.cost, data.stats, data.unlock, data.levelSpeed, data.levels);
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * @returns {Promise<Bloon[]>}
     */
    GetAllBloons() {
        let url = api + `bloons`
        return axios({
            url: url,
            method: "GET"
        }).then(res => res.json()).then((data) => {
            return data.map((bloon) => {return new Bloon(bloon.id, bloon.name, bloon.type, bloon.rbe, bloon.speed, bloon.types, bloon.immunity, bloon.children, bloon.parents, bloon.initalRound, bloon.initalRoundABR)});
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * @param {string} bloonID 
     * @returns {Promise<Bloon>}
     */
    GetBloonByID(bloonID) {
        let url = api + `bloon/${bloonID}`
        return axios({
            url: url,
            method: "GET"
        }).then(res => res.json()).then((data) => {
            return new Bloon(data.id, data.name, data.type, data.rbe, data.speed, data.types, data.immunity, data.children, data.parents, data.initalRound, data.initalRoundABR);
        }).catch((err) => {throw new Error(err)});
    }
}
module.exports = {
    BloonsTD6API: BloonsTD6API
}