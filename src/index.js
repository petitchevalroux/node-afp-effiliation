"use strict";
const got = require("got"),
    xmlNodes = require("xml-nodes"),
    xmlObjects = require("xml-objects"),
    path = require("path"),
    AfpEffiliationTransform = require(path.join(__dirname, "transform"));

module.exports = {
    getStreamByUrl: (url) => {
        return got
            .stream(url)
            .pipe(xmlNodes("product"))
            .pipe(xmlObjects({
                explicitRoot: false,
                explicitArray: false,
                mergeAttrs: true
            }))
            .pipe(new AfpEffiliationTransform());
    }
};
