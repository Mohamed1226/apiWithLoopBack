"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoaaDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'roaa',
    connector: 'mongodb',
    dsn: '',
    host: 'localhost',
    port: 0,
    user: '',
    password: '',
    database: 'Roaa'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let RoaaDataSource = class RoaaDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
RoaaDataSource.dataSourceName = 'roaa';
RoaaDataSource.defaultConfig = config;
RoaaDataSource = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource'),
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.config.roaa', { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], RoaaDataSource);
exports.RoaaDataSource = RoaaDataSource;
//# sourceMappingURL=roaa.datasource.js.map