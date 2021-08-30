type TowerID = "dart-monkey" | "boomerang-monkey" | "bomb-shooter" | "tack-shooter" | "ice-monkey" | "glue-gunner" | "sniper-monkey" | "monkey-sub" | "monkey-buccaneer" | "monkey-ace" | "heli-pilot" | "mortar-monkey" | "dartling-gunner" | "wizard-monkey" | "super-monkey" | "ninja-monkey" | "alchemist" | "druid" | "banana-farm" | "spike-factory" | "monkey-village" | "engineer-monkey";
type HeroID = "quincy" | "gwendolin" | "striker-jones" | "captain-churchill" | "benjamin" | "ezili" | "pat-fusty" | "adora" | "admiral-brickell" | "etienne" | "sauda";
type BloonID = "red" | "blue" | "green" | "pink" | "black" | "white" | "purple" | "lead" | "zebra" | "rainbow" | "ceramic" | "golden" | "ghost" | "moab" | "bfb" | "zomg" | "bad" | "ddt"

import {Tower} from "./Tower";
import {Hero} from "./Hero";
import {Bloon} from "./Bloon";

export class BloonsTD6API {
    constructor();
    GetAllTowers(): Promise<Tower[]>;
    GetTowerByID(towerID: TowerID): Promise<Tower>;
    GetAllHeros(): Promise<Hero[]>;
    GetHeroByID(heroID: HeroID): Promise<Hero>;
    GetAllBloons(): Promise<Bloon[]>;
    GetBloonByID(bloonID: BloonID): Promise<Bloon>;
}