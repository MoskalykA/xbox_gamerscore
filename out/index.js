"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const superagent_1 = __importDefault(require("superagent"));
const jsdom_1 = __importDefault(require("jsdom"));
const { JSDOM } = jsdom_1.default;
const search = (gamerTag) => {
    return new Promise((resolve, reject) => {
        superagent_1.default
            .get(`https://www.xboxgamertag.com/search/${gamerTag}`)
            .end((err, res) => {
            var _a, _b, _c;
            if (err)
                reject("An error with the request");
            const dom = new JSDOM(res.text);
            for (const span of dom.window.document.querySelectorAll("span")) {
                if ((_a = span === null || span === void 0 ? void 0 : span.textContent) === null || _a === void 0 ? void 0 : _a.includes("Gamerscore")) {
                    resolve(Number((_c = (_b = span.parentNode) === null || _b === void 0 ? void 0 : _b.textContent) === null || _c === void 0 ? void 0 : _c.replace("Gamerscore", "").replace(/[\r\n]+/gm, "").replace(/\s/g, "")));
                }
            }
            reject("The gameScore was not found");
        });
    });
};
exports.search = search;
