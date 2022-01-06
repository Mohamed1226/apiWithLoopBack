"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roaa = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Roaa = class Roaa extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Roaa.prototype, "_id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Roaa.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Roaa.prototype, "categoryID", void 0);
Roaa = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Roaa);
exports.Roaa = Roaa;
//# sourceMappingURL=roaa.model.js.map