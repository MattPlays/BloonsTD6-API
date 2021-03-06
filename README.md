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

## Bloons TD 6 <a id="bloonstd6">
**This is an Unoffical API** [Unoffical API Docs](https://statsnite.com/btd/api)
### Usage <a id="bloonstd6-usage">
```javascript
const {BloonsTD6API} = require("@mattplays/bloonstd6-api");
const BloonsTD6API = new BloonsTD6API(); //No API Key Required
```
### Functions <a id="bloonstd6-functions">
#### GetAllTowers <a id="bloonstd6-getalltowers">
List all towers in BTD6
##### Output <a id="bloonstd6-getalltowers-output">
The GetAllTowers function returns a `Promise<Tower[]>` type
##### Usage <a id="bloonstd6-getalltowers-usage">
```javascript
const BloonsTD6API = new BloonsTD6API();
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
const BloonsTD6API = new BloonsTD6API();
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
const BloonsTD6API = new BloonsTD6API();
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
const BloonsTD6API = new BloonsTD6API();
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
const BloonsTD6API = new BloonsTD6API();
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
const BloonsTD6API = new BloonsTD6API();
BloonsTD6API.GetBloonByID("red").then((data) => {
// Your Code Here :D
});
```
