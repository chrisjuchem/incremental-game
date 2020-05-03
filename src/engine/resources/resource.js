
class Resource {
    constructor(name, opts) {
        this.name = name;
        this.initialCount = opts.initialCount || 0;
        this.initialRate = opts.initialRate || 0;
        this.rawPrices = opts.rawPrices || {};
        this.generationPrices = opts.generationPrices || {};
    }
}


export const a = new Resource('a', {
    generationPrices: {'buy': {c:2}}
});

export const b = new Resource('b', {
    rawPrices: {"click": {}},
    generationPrices: {"b++": {c:10}},
});

export const c = new Resource('c', {
    initialCount: 2,
    rawPrices: {"buy": {a:5, b:5}}
});

export const ALL_RESOURCES = [a, b, c];
