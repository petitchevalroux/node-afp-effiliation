"use strict";
const {
        Transform
    } = require("stream"),
    path = require("path"),
    extractor = require(path.join(__dirname, "extractor"));

class AfpEffiliationTransform extends Transform {
    constructor(options) {
        super(Object.assign(
            options || {}, {
                writableObjectMode: true,
                readableObjectMode: true
            }
        ));
    }

    _transform(chunk, encoding, callback) {
        try {
            callback(
                null,
                extractor.get(chunk)
            );
        } catch (error) {
            callback(error);
        }
    }
}

module.exports = AfpEffiliationTransform;
