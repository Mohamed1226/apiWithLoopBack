"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoaaController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const authentication_1 = require("@loopback/authentication");
const security_1 = require("@loopback/security");
let RoaaController = class RoaaController {
    constructor(roaaRepository, userProfile) {
        this.roaaRepository = roaaRepository;
        this.userProfile = userProfile;
    }
    async create(roaa) {
        return this.roaaRepository.create(roaa);
    }
    async count(where) {
        return this.roaaRepository.count(where);
    }
    async find(filter) {
        return this.roaaRepository.find(filter);
    }
    async updateAll(roaa, where) {
        return this.roaaRepository.updateAll(roaa, where);
    }
    async findById(id, filter) {
        return this.roaaRepository.findById(id, filter);
    }
    async updateById(id, roaa) {
        await this.roaaRepository.updateById(id, roaa);
    }
    async replaceById(id, roaa) {
        await this.roaaRepository.replaceById(id, roaa);
    }
    async deleteById(id) {
        await this.roaaRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/roaas'),
    (0, rest_1.response)(200, {
        description: 'Roaa model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Roaa) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Roaa, {
                    title: 'NewRoaa',
                    exclude: ['_id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoaaController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/roaas/count'),
    (0, rest_1.response)(200, {
        description: 'Roaa model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Roaa)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoaaController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/roaas'),
    (0, rest_1.response)(200, {
        description: 'Array of Roaa model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Roaa, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Roaa)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoaaController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/roaas'),
    (0, rest_1.response)(200, {
        description: 'Roaa PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Roaa, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Roaa)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Roaa, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoaaController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/roaas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Roaa model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Roaa, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Roaa, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoaaController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/roaas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Roaa PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Roaa, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Roaa]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoaaController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/roaas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Roaa PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Roaa]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoaaController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/roaas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Roaa DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RoaaController.prototype, "deleteById", null);
RoaaController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('jwt'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.RoaaRepository)),
    (0, tslib_1.__param)(1, (0, core_1.inject)(security_1.SecurityBindings.USER, { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.RoaaRepository, Object])
], RoaaController);
exports.RoaaController = RoaaController;
//# sourceMappingURL=roaa.controller.js.map