"use strict";
const path = require("path"),
    afp = require(path.join(__dirname, "..")),
    assert = require("assert"),
    nock = require("nock");
describe("Afp", () => {
    describe("getStreamByUrl", () => {
        it("stream all products", (done) => {
            nock("http://example.com/")
                .get("/")
                .replyWithFile(
                    200,
                    path.join(__dirname, "files",
                        "sample.xml")
                );
            const stream = afp.getStreamByUrl(
                    "http://example.com/"),
                products = [];
            stream
                .on("data", (data) => {
                    products.push(data);
                })
                .on("end", () => {
                    assert.deepEqual(products, [{
                        "id": "10",
                        "price": 36.9,
                        "currency": "EUR",
                        "deliveryCost": 6,
                        "name": "",
                        "brand": "Snow Gecko",
                        "imageUrl": "https://img-v2.allopneus.com/api/v2/transformation/item/item_listing/10.jpg",
                        "clickUrl": "http://track.effiliation.com/servlet/effi.redir?id_compteur=12256213&url=http%3A%2F%2Ftracking.lengow.com%2FshortUrl%2F1714-44097-10%2F",
                        "raw": {
                            "sku": "10",
                            "ean": "",
                            "upc": "",
                            "isbn": "",
                            "name": "",
                            "weight": "",
                            "size": "",
                            "brand": "Snow Gecko",
                            "url_product": "http://track.effiliation.com/servlet/effi.redir?id_compteur=12256213&url=http%3A%2F%2Ftracking.lengow.com%2FshortUrl%2F1714-44097-10%2F",
                            "url_image": "https://img-v2.allopneus.com/api/v2/transformation/item/item_listing/10.jpg",
                            "description": "VIDEO des chaussettes neige snowgecko",
                            "short_description": "",
                            "merchant_store_name": "accessoire",
                            "merchant_univers_name": "voiture",
                            "merchant_category_name": "Chaussettes neige",
                            "merchant_department_name": "",
                            "price": "36.90",
                            "currency": "Euros",
                            "ecotax": "0",
                            "warranty": "1",
                            "availability": "",
                            "in_stock": "001",
                            "shipping_cost": "6.00",
                            "delivery_time": "2-3 jours",
                            "delivery_detail": "Vos pneus peuvent être livrés chez vous ou dans l'un de nos 6000 centres de montage partenaires",
                            "promo": "1",
                            "pricenorebate": "36.90",
                            "percentagepromo": "",
                            "promostart": "",
                            "promoend": "",
                            "used": "1",
                            "extras": {
                                "serie": "",
                                "jante": "",
                                "charge": "",
                                "vitesse": "",
                                "saison": "Hiver",
                                "nom": "Chaussettes Antidérapantes Snow Gecko XL (Lot de deux)",
                                "runflat": "",
                                "renforce": "",
                                "NoiseDb": "",
                                "infos_supp": "Bénéficiez de notre réseau de spécialistes: 6000 centres de montage partenaires pour la livraison et le montage de vos pneus près de chez vous.",
                                "WetAdhesion": "",
                                "FuelEconomy": "",
                                "img2": "https://img-v2.allopneus.com/api/v2/transformation/item/item_listing_full/10.jpg",
                                "NoiseLevel": ""
                            }
                        }
                    }, {
                        "id": "10002",
                        "price": 165.9,
                        "currency": "EUR",
                        "deliveryCost": 6,
                        "name": "POTENZA RE050",
                        "brand": "BRIDGESTONE",
                        "imageUrl": "https://img-v2.allopneus.com/api/v2/transformation/tire/tire_listing_shopping/1511.jpg",
                        "clickUrl": "http://track.effiliation.com/servlet/effi.redir?id_compteur=12256213&url=http%3A%2F%2Ftracking.lengow.com%2FshortUrl%2F1714-44097-10002%2F",
                        "raw": {
                            "sku": "10002",
                            "ean": "3286347835810",
                            "upc": "",
                            "isbn": "",
                            "name": "POTENZA RE050",
                            "weight": "",
                            "size": "265",
                            "brand": "BRIDGESTONE",
                            "url_product": "http://track.effiliation.com/servlet/effi.redir?id_compteur=12256213&url=http%3A%2F%2Ftracking.lengow.com%2FshortUrl%2F1714-44097-10002%2F",
                            "url_image": "https://img-v2.allopneus.com/api/v2/transformation/tire/tire_listing_shopping/1511.jpg",
                            "description": "PNEU tourisme été BRIDGESTONE - Livraison sous 48/72h et gratuite à partir de 2 pneus - Garantie 1 an",
                            "short_description": "",
                            "merchant_store_name": "PNEU",
                            "merchant_univers_name": "voiture",
                            "merchant_category_name": "Tourisme ete",
                            "merchant_department_name": "",
                            "price": "165.90",
                            "currency": "Euros",
                            "ecotax": "0",
                            "warranty": "1",
                            "availability": "",
                            "in_stock": "001",
                            "shipping_cost": "6.00",
                            "delivery_time": "2-3 jours",
                            "delivery_detail": "Vos pneus peuvent être livrés chez vous ou dans l'un de nos 6000 centres de montage partenaires",
                            "promo": "1",
                            "pricenorebate": "165.90",
                            "percentagepromo": "1",
                            "promostart": "",
                            "promoend": "",
                            "used": "1",
                            "extras": {
                                "serie": "40",
                                "jante": "18",
                                "charge": "97",
                                "vitesse": "Y",
                                "saison": "Ete",
                                "nom": "PNEU Bridgestone POTENZA RE050 265/40R18 97Y MO,Runflat Mercedes (EXT)",
                                "runflat": "0",
                                "renforce": "0",
                                "NoiseDb": "73",
                                "infos_supp": "Bénéficiez de notre réseau de spécialistes: 6000 centres de montage partenaires pour la livraison et le montage de vos pneus près de chez vous.",
                                "WetAdhesion": "C",
                                "FuelEconomy": "E",
                                "img2": "https://img-v2.allopneus.com/api/v2/transformation/tire/tire_preview_shopping/1511.jpg",
                                "NoiseLevel": "3"
                            }
                        }
                    }]);
                    done();
                });
        });
    });
});
