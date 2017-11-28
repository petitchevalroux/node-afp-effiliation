"use strict";
const path = require("path"),
    extractor = require(path.join(__dirname, "..", "src", "extractor")),
    assert = require("assert");
describe("Extrator", () => {
    describe("get", () => {
        const item = {
                sku: "10002",
                ean: "3286347835810",
                upc: "",
                isbn: "",
                name: "POTENZA RE050",
                weight: "",
                size: "265",
                brand: "BRIDGESTONE",
                url_product: "http://track.effiliation.com/servlet/effi.redir?id_compteur=12256213&url=http%3A%2F%2Ftracking.lengow.com%2FshortUrl%2F1714-44097-10002%2F",
                url_image: "https://img-v2.allopneus.com/api/v2/transformation/tire/tire_listing_shopping/1511.jpg",
                description: "PNEU tourisme été BRIDGESTONE - Livraison sous 48/72h et gratuite à partir de 2 pneus - Garantie 1 an",
                short_description: "",
                merchant_store_name: "PNEU",
                merchant_univers_name: "voiture",
                merchant_category_name: "Tourisme ete",
                merchant_department_name: "",
                price: "165.90",
                currency: "Euros",
                ecotax: "0",
                warranty: "1",
                availability: "",
                in_stock: "001",
                shipping_cost: "6.00",
                delivery_time: "2-3 jours",
                delivery_detail: "Vos pneus peuvent être livrés chez vous ou dans l'un de nos 6000 centres de montage partenaires",
                promo: "1",
                pricenorebate: "165.90",
                percentagepromo: "1",
                promostart: "",
                promoend: "",
                used: "1",
                extras: {
                    serie: "40",
                    jante: "18",
                    charge: "97",
                    vitesse: "Y",
                    saison: "Ete",
                    nom: "PNEU Bridgestone POTENZA RE050 265/40R18 97Y MO,Runflat Mercedes (EXT)",
                    runflat: "0",
                    renforce: "0",
                    NoiseDb: "73",
                    infos_supp: "Bénéficiez de notre réseau de spécialistes: 6000 centres de montage partenaires pour la livraison et le montage de vos pneus près de chez vous.",
                    WetAdhesion: "C",
                    FuelEconomy: "E",
                    img2: "https://img-v2.allopneus.com/api/v2/transformation/tire/tire_preview_shopping/1511.jpg",
                    NoiseLevel: "3"
                }
            },
            result = extractor.get(item);
        it("extract price including vat", () => {
            assert.equal(result.price, 165.90);
        });
        it("extract currency", () => {
            assert.equal(result.currency, "EUR");
        });
        it("extract deliveryCost", () => {
            assert.equal(result.deliveryCost, 6.00);
        });
        it("extract product name", () => {
            assert.equal(result.name, "POTENZA RE050");
        });
        it("extract product brand", () => {
            assert.equal(result.brand, "BRIDGESTONE");
        });
        it("extract raw data", () => {
            assert.deepEqual(result.raw, item);
        });
        it("extract click url", () => {
            assert.equal(result.clickUrl,
                "http://track.effiliation.com/servlet/effi.redir?id_compteur=12256213&url=http%3A%2F%2Ftracking.lengow.com%2FshortUrl%2F1714-44097-10002%2F"
            );
        });
        it("extract image url", () => {
            assert.equal(result.imageUrl,
                "https://img-v2.allopneus.com/api/v2/transformation/tire/tire_listing_shopping/1511.jpg"
            );
        });
        it("throw an error on unrecognized currency", () => {

        });
    });
});
