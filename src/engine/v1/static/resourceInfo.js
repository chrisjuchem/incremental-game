class ResourceInfo {
    constructor(displayName, cap, sellPrice, /*initialCount*/) {
        this.displayName = displayName;
        this._cap = cap;
        this._sellPrice = sellPrice;
    }

    getCap() {
        return this._cap; // Todo: check upgrades
    }

    getSellPrice() {
        return this._sellPrice; // Todo: check upgrades
    }
}

export const RESOURCE_NAME_X = 'x';
// export const RESOURCE_NAME_Y = 'y';
// export const RESOURCE_NAME_Z = 'z';

export const ALL_RESOURCE_NAMES = [
    RESOURCE_NAME_X,
];

export default {
    [RESOURCE_NAME_X]: new ResourceInfo(
        "An X",
        100,
        1
    ),
};