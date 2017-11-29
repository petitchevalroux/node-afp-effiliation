"use strict";

class Extractor {
    get(data) {
        return {
            id: data.sku,
            price: parseFloat(data.price),
            currency: this.getCurrency(data),
            deliveryCost: parseFloat(data.shipping_cost),
            name: data.name,
            brand: data.brand,
            imageUrl: data.url_image,
            clickUrl: data.url_product,
            raw: data
        };
    }
    getCurrency(data) {
        const currencies = new Map([
                ["Euros", "EUR"]
            ]),
            currency = data.currency;
        if (!currencies.has(currency)) {
            throw new Error("unrecognized currency: " + currency);
        }
        return currencies.get(currency);
    }
}

module.exports = new Extractor();
