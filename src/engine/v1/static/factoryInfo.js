// will probably rework this
class FactoryConditions {
    constructor(rateModifier) {
        this.rateModifier = rateModifier;
    }
}

class FactoryInfo {
    constructor(name, mapX, mapY, conditions /*startsVisible, starts active*/) {
        this.name = name;
        this.mapX = mapX;
        this.mapY = mapY;
        this.conditions = conditions;
    }

}

export const FACTORY_NAME_VERDANSK = 'verdansk';
export const FACTORY_NAME_VERDANSK_2 = 'verdansk2';

export const ALL_FACTORY_NAMES = [
    FACTORY_NAME_VERDANSK,
    FACTORY_NAME_VERDANSK_2,
];

export default {
    [FACTORY_NAME_VERDANSK]: new FactoryInfo(
        "Verdansk",
        600, 300,
        new FactoryConditions(
            1
        )),
    [FACTORY_NAME_VERDANSK_2]: new FactoryInfo(
        "Verdansk II",
        900, 900,
        new FactoryConditions(
            0.5
        )),
};
