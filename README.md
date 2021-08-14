# BloonsTD6-API
This package is a wrapper for the unofficial Bloons TD 6 API

1. [Bloons TD 6](#bloonstd6)
    1. [Usage](#bloonstd6-usage)
    2. [Functions](#bloonstd6-functions)
        1. [GetAllTowers](#bloonstd6-getalltowers)
            1. [Output](#bloonstd6-getalltowers-output)
            2. [Usage](#bloonstd6-getalltowers-usage)
        2. [GetTowerByID](#bloonstd6-gettowerbyid)
            1. [Input](#bloonstd6-gettowerbyid-input)
            2. [Output](#bloonstd6-gettowerbyid-output)
            3. [Usage](#bloonts6-gettowerbyid-usage)
        3. [GetAllHeros](#bloonstd6-getallheros)
            1. [Output](#bloonstd6-getallheros-output)
            2. [Usage](#bloonstd6-getallheros-usage)
        4. [GetHeroByID](#bloonstd6-getherobyid)
            1. [Input](#bloonstd6-getherobyid-input)
            2. [Output](#bloonstd6-getherobyid-output)
            3. [Usage](#bloonstd6-getherobyid-usage)
        5. [GetAllBloons](#bloonstd6-getallbloons)
            1. [Output](#bloonstd6-getallbloons-output)
            2. [Usage](#bloonstd6-getallbloons-usage)
        6. [GetBloonByID](#bloonstd6-getbloonbyid)
            1. [Input](#bloonstd6-getbloonbyid-input)
            2. [Output](#bloonstd6-getbloonbyid-output)
            3. [Usage](#bloonstd6-getbloonbyid-usage)
    3. [Return Types](#bloonstd6-returntypes)
        1. [Tower](#bloonstd6-returntypes-tower)
        2. [Hero](#bloonstd6-returntypes-hero)
        3. [Bloon](#bloonstd6-returntypes-bloon)

## Bloons TD 6 <a id="bloonstd6">
**This is an Unoffical API** [Unoffical API Docs](https://statsnite.com/btd/api)
### Usage <a id="bloonstd6-usage">
```javascript
const GameAPICenter = require("gameapicenter");
const BloonsTD6API = new GameAPICenter.BloonsTD6API(); //No API Key Required
```
### Functions <a id="bloonstd6-functions">
#### GetAllTowers <a id="bloonstd6-getalltowers">
List all towers in BTD6
##### Output <a id="bloonstd6-getalltowers-output">
The GetAllTowers function returns a `Promise<Tower[]>` type
##### Usage <a id="bloonstd6-getalltowers-usage">
```javascript
const BloonsTD6API = new GameAPICenter.BloonsTD6API();
BloonsTD6API.GetAllTowers().then((data) => {
// Your Code Here :D
});
```
#### GetTowerByID <a id="bloonstd6-gettowerbyid">
Get a specific tower in BTD6.
##### Input <a id="bloonstd6-gettowerbyid-input">
```typescript
export type TowerID = "dart-monkey" | "boomerang-monkey" | "bomb-shooter" | "tack-shooter" | "ice-monkey" | "glue-gunner" | "sniper-monkey" | "monkey-sub" | "monkey-buccaneer" | "monkey-ace" | "heli-pilot" | "mortar-monkey" | "dartling-gunner" | "wizard-monkey" | "super-monkey" | "ninja-monkey" | "alchemist" | "druid" | "banana-farm" | "spike-factory" | "monkey-village" | "engineer-monkey";
```
| Input  | Type | Required | Description |  
| ------------- | ------------- | ------------- | ------------- |
| towerID  |`TowerID`  | Yes | a Tower ID ie. 'dart-monkey', 'super-monkey' |
##### Output <a id="bloonstd6-gettowerbyid-output">
The GetTowerByID function returns a `Promise<Tower>` type
##### Usage <a id="bloonstd6-gettowerbyid-usage">
```javascript
const BloonsTD6API = new GameAPICenter.BloonsTD6API();
BloonsTD6API.GetTowerByID("dart-monkey").then((data) => {
// Your Code Here :D
});
```
#### GetAllHeros <a id="bloonstd6-getallheros">
List all Heros in BTD6.
##### Output <a id="bloonstd6-getallheros-output">
The GetAllHeros function returns a `Promise<Hero[]>` type
##### Usage <a id="bloonstd6-getallheros-usage">
```javascript
const BloonsTD6API = new GameAPICenter.BloonsTD6API();
BloonsTD6API.GetAllHeros().then((data) => {
// Your Code Here :D
});
```
#### GetHeroByID <a id="bloonstd6-getherobyid">
Get a specific Hero in BTD6.
##### Input <a id="bloonstd6-getherobyid-input">
```typescript
export type HeroID = "quincy" | "gwendolin" | "striker-jones" | "captain-churchill" | "benjamin" | "ezili" | "pat-fusty" | "adora" | "admiral-brickell" | "etienne" | "sauda";
```
| Input  | Type | Required | Description |  
| ------------- | ------------- | ------------- | ------------- |
| heroID  |`HeroID`  | Yes | a Hero ID ie. 'quincy' |
##### Output <a id="bloonstd6-getherobyid-output">
The GetHeroByID function returns a `Promise<Hero>` type
##### Usage <a id="bloonstd6-getherobyid-usage">
```javascript
const BloonsTD6API = new GameAPICenter.BloonsTD6API();
BloonsTD6API.GetHeroByID("quincy").then((data) => {
// Your Code Here :D
});
```
#### GetAllBloons <a id="bloonstd6-getallbloons">
List all bloons in BTD6
##### Output <a id="bloonstd6-getallbloons-output">
The GetAllBloons function returns a `Promise<Bloon[]>` type
##### Usage <a id="bloonstd6-getallbloons-usage">
```javascript
const BloonsTD6API = new GameAPICenter.BloonsTD6API();
BloonsTD6API.GetAllBloons().then((data) => {
// Your Code Here :D
});
```
#### GetBloonByID <a id="bloonstd6-getbloonbyid">
Get a specific Bloon in BTD6.
##### Input <a id="bloonstd6-getbloonbyid-input">
```typescript
export type BloonID = "red" | "blue" | "green" | "pink" | "black" | "white" | "purple" | "lead" | "zebra" | "rainbow" | "ceramic" | "golden" | "ghost" | "moab" | "bfb" | "zomg" | "bad" | "ddt"
```
| Input  | Type | Required | Description |  
| ------------- | ------------- | ------------- | ------------- |
| bloonID  |`BloonID`  | Yes | a Bloon ID ie. 'red', 'blue' |
##### Output <a id="bloonstd6-getbloonbyid-output">
The GetBloonByID function returns a `Promise<Bloon>` type
##### Usage <a id="bloonstd6-getbloonbyid-usage">
```javascript
const BloonsTD6API = new GameAPICenter.BloonsTD6API();
BloonsTD6API.GetBloonByID("red").then((data) => {
// Your Code Here :D
});
```
### Return Types <a id="bloonstd6-returntypes">
#### Tower <a id="bloonstd6-returntypes-tower">
```typescript
export type Tower = {
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
        damage: string;
        pierce: string;
        attackSpeed: string;
        range: string;
        type: string;
    }
    footprint: number;
    defaultHotkey: string;
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
            upgrades: [
                {
                    name: string,
                    description: string,
                    cost: {easy: number, medium: number, hard: number, impoppable: number},
                    unlockXp: number,
                    effects: string[],
                    source: string
                }
            ]
        }
    }
}
```
#### Hero <a id="bloonstd6-returntypes-hero">
```typescript
export type Hero = {
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
        damage: string;
        pierce: string;
        attackSpeed: string;
        range: string;
        type: string;
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
```
#### Bloon <a id="bloonstd6-returntypes-bloon">
```typescript
export type Bloon = {
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
```
