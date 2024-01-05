/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/databasems/src/administrator/administrator.module.ts":
/*!*******************************************************************!*\
  !*** ./apps/databasems/src/administrator/administrator.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdministratorModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const administrator_service_1 = __webpack_require__(/*! ./services/administrator.service */ "./apps/databasems/src/administrator/services/administrator.service.ts");
const administrator_controller_1 = __webpack_require__(/*! ./controllers/administrator.controller */ "./apps/databasems/src/administrator/controllers/administrator.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const activity_entity_1 = __webpack_require__(/*! ../entities/activity.entity */ "./apps/databasems/src/entities/activity.entity.ts");
const administrator_entity_1 = __webpack_require__(/*! ../entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
const enterprise_entity_1 = __webpack_require__(/*! ../entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
const register_entity_1 = __webpack_require__(/*! ../entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
const reward_entity_1 = __webpack_require__(/*! ../entities/reward.entity */ "./apps/databasems/src/entities/reward.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
let AdministratorModule = exports.AdministratorModule = class AdministratorModule {
};
exports.AdministratorModule = AdministratorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([activity_entity_1.Actividad, administrator_entity_1.Administrador, enterprise_entity_1.Empresa, register_entity_1.Registro, reward_entity_1.Premio, user_entity_1.Usuario])
        ],
        providers: [administrator_service_1.AdministratorService],
        exports: [administrator_service_1.AdministratorService],
        controllers: [administrator_controller_1.AdministratorController]
    })
], AdministratorModule);


/***/ }),

/***/ "./apps/databasems/src/administrator/controllers/administrator.controller.ts":
/*!***********************************************************************************!*\
  !*** ./apps/databasems/src/administrator/controllers/administrator.controller.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdministratorController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const administrator_service_1 = __webpack_require__(/*! ./../services/administrator.service */ "./apps/databasems/src/administrator/services/administrator.service.ts");
let AdministratorController = exports.AdministratorController = class AdministratorController {
    constructor(administratorService) {
        this.administratorService = administratorService;
    }
    getAll() {
        return this.administratorService.findAll();
    }
    getOne(id) {
        return this.administratorService.findOne(id);
    }
    create(body) {
        return this.administratorService.create(body);
    }
    update(id, body) {
        return this.administratorService.update(id, body);
    }
    delete(id) {
        return this.administratorService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdministratorController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdministratorController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdministratorController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdministratorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdministratorController.prototype, "delete", null);
exports.AdministratorController = AdministratorController = __decorate([
    (0, common_1.Controller)('api_db/admin'),
    __metadata("design:paramtypes", [typeof (_a = typeof administrator_service_1.AdministratorService !== "undefined" && administrator_service_1.AdministratorService) === "function" ? _a : Object])
], AdministratorController);


/***/ }),

/***/ "./apps/databasems/src/administrator/services/administrator.service.ts":
/*!*****************************************************************************!*\
  !*** ./apps/databasems/src/administrator/services/administrator.service.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdministratorService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const administrator_entity_1 = __webpack_require__(/*! ../../entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
let AdministratorService = exports.AdministratorService = class AdministratorService {
    constructor(admin_repo) {
        this.admin_repo = admin_repo;
    }
    findAll() {
        return this.admin_repo.find();
    }
    findOne(id) {
        return this.admin_repo.findOne({ where: { id_admin: id } });
    }
    create(body) {
        const newAdministrator = this.admin_repo.create(body);
        return this.admin_repo.save(newAdministrator);
    }
    async update(id, body) {
        const administrator = await this.admin_repo.findOne({ where: { id_admin: id } });
        this.admin_repo.merge(administrator, body);
        return this.admin_repo.save(administrator);
    }
    async delete(id) {
        await this.admin_repo.delete(id);
        return true;
    }
    findOneAdminByMail(body) {
        console.log('asdasd', body);
        return this.admin_repo.findOne({ where: { correo_admin: body } });
    }
};
exports.AdministratorService = AdministratorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(administrator_entity_1.Administrador)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], AdministratorService);


/***/ }),

/***/ "./apps/databasems/src/entities/activity.entity.ts":
/*!*********************************************************!*\
  !*** ./apps/databasems/src/entities/activity.entity.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Actividad = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const register_entity_1 = __webpack_require__(/*! ../entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
let Actividad = exports.Actividad = class Actividad {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Actividad.prototype, "id_acti", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25 }),
    __metadata("design:type", String)
], Actividad.prototype, "nombre_acti", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Actividad.prototype, "descripcion_acti", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    __metadata("design:type", String)
], Actividad.prototype, "tiempo_acti", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 7, scale: 2 }),
    __metadata("design:type", Number)
], Actividad.prototype, "cal_quemadas_acti", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { nullable: true }),
    __metadata("design:type", Number)
], Actividad.prototype, "puntos_ot_acti", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => register_entity_1.Registro, (registro) => registro.id_acti),
    __metadata("design:type", Array)
], Actividad.prototype, "id_reg", void 0);
exports.Actividad = Actividad = __decorate([
    (0, typeorm_1.Entity)()
], Actividad);


/***/ }),

/***/ "./apps/databasems/src/entities/administrator.entity.ts":
/*!**************************************************************!*\
  !*** ./apps/databasems/src/entities/administrator.entity.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Administrador = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
const enterprise_entity_1 = __webpack_require__(/*! ../entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
let Administrador = exports.Administrador = class Administrador {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Administrador.prototype, "id_admin", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.Usuario, (usuario) => usuario.id_admin),
    __metadata("design:type", Array)
], Administrador.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => enterprise_entity_1.Empresa, (empresa) => empresa.id_admin, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Administrador.prototype, "id_emp", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25 }),
    __metadata("design:type", String)
], Administrador.prototype, "nombre_admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25 }),
    __metadata("design:type", String)
], Administrador.prototype, "apellido_admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Administrador.prototype, "correo_admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25 }),
    __metadata("design:type", String)
], Administrador.prototype, "contrasena_admin", void 0);
exports.Administrador = Administrador = __decorate([
    (0, typeorm_1.Entity)()
], Administrador);


/***/ }),

/***/ "./apps/databasems/src/entities/enterprise.entity.ts":
/*!***********************************************************!*\
  !*** ./apps/databasems/src/entities/enterprise.entity.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Empresa = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const administrator_entity_1 = __webpack_require__(/*! ../entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
let Empresa = exports.Empresa = class Empresa {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Empresa.prototype, "id_emp", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25 }),
    __metadata("design:type", String)
], Empresa.prototype, "nombre_emp", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Empresa.prototype, "direccion_emp", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric'),
    __metadata("design:type", Number)
], Empresa.prototype, "telefono_emp", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.Usuario, (usuario) => usuario.id_emp),
    __metadata("design:type", Array)
], Empresa.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => administrator_entity_1.Administrador, (administrador) => administrador.id_emp),
    __metadata("design:type", Array)
], Empresa.prototype, "id_admin", void 0);
exports.Empresa = Empresa = __decorate([
    (0, typeorm_1.Entity)()
], Empresa);


/***/ }),

/***/ "./apps/databasems/src/entities/register.entity.ts":
/*!*********************************************************!*\
  !*** ./apps/databasems/src/entities/register.entity.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Registro = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const activity_entity_1 = __webpack_require__(/*! ../entities/activity.entity */ "./apps/databasems/src/entities/activity.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
let Registro = exports.Registro = class Registro {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Registro.prototype, "id_reg", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => activity_entity_1.Actividad, (actividad) => actividad.id_reg, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", typeof (_a = typeof activity_entity_1.Actividad !== "undefined" && activity_entity_1.Actividad) === "function" ? _a : Object)
], Registro.prototype, "id_acti", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.Usuario, (usuario) => usuario.id_reg, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", typeof (_b = typeof user_entity_1.Usuario !== "undefined" && user_entity_1.Usuario) === "function" ? _b : Object)
], Registro.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Registro.prototype, "fecha_hora_reg", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Registro.prototype, "tipo_act_reg", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    __metadata("design:type", String)
], Registro.prototype, "tiempo_reg", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 7, scale: 2 }),
    __metadata("design:type", Number)
], Registro.prototype, "distancia_reg", void 0);
exports.Registro = Registro = __decorate([
    (0, typeorm_1.Entity)()
], Registro);


/***/ }),

/***/ "./apps/databasems/src/entities/reward.entity.ts":
/*!*******************************************************!*\
  !*** ./apps/databasems/src/entities/reward.entity.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Premio = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Premio = exports.Premio = class Premio {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Premio.prototype, "id_pre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25 }),
    __metadata("design:type", String)
], Premio.prototype, "nombre_pre", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Premio.prototype, "descripcion_pre", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric'),
    __metadata("design:type", Number)
], Premio.prototype, "puntos_rq_pre", void 0);
exports.Premio = Premio = __decorate([
    (0, typeorm_1.Entity)()
], Premio);


/***/ }),

/***/ "./apps/databasems/src/entities/user.entity.ts":
/*!*****************************************************!*\
  !*** ./apps/databasems/src/entities/user.entity.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Usuario = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const enterprise_entity_1 = __webpack_require__(/*! ../entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
const administrator_entity_1 = __webpack_require__(/*! ../entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
const register_entity_1 = __webpack_require__(/*! ../entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
let Usuario = exports.Usuario = class Usuario {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Usuario.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => enterprise_entity_1.Empresa, (empresa) => empresa.id_user, {
        eager: true
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", typeof (_a = typeof enterprise_entity_1.Empresa !== "undefined" && enterprise_entity_1.Empresa) === "function" ? _a : Object)
], Usuario.prototype, "id_emp", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => administrator_entity_1.Administrador, (administrador) => administrador.id_user, {
        eager: true
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", typeof (_b = typeof administrator_entity_1.Administrador !== "undefined" && administrator_entity_1.Administrador) === "function" ? _b : Object)
], Usuario.prototype, "id_admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25 }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25 }),
    __metadata("design:type", String)
], Usuario.prototype, "apellido_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Usuario.prototype, "correo_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25, default: "" }),
    __metadata("design:type", String)
], Usuario.prototype, "contrasena_user", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Usuario.prototype, "fecha_nacimiento_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Usuario.prototype, "genero_user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => register_entity_1.Registro, registro => registro.id_user),
    __metadata("design:type", Array)
], Usuario.prototype, "id_reg", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)()
], Usuario);


/***/ }),

/***/ "./apps/oauth/src/login/jwt-auth.guard.ts":
/*!************************************************!*\
  !*** ./apps/oauth/src/login/jwt-auth.guard.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = exports.JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),

/***/ "./apps/oauth/src/login/jwt.strategy.ts":
/*!**********************************************!*\
  !*** ./apps/oauth/src/login/jwt.strategy.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'secretpowerfit'
        });
    }
    async validate(payload) {
        return { id_admin: payload.id_admin, nombre_admin: payload.nombre_admin };
    }
}
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/oauth/src/login/local.sttrategy.ts":
/*!*************************************************!*\
  !*** ./apps/oauth/src/login/local.sttrategy.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const login_service_1 = __webpack_require__(/*! ./login.service */ "./apps/oauth/src/login/login.service.ts");
let LocalStrategy = exports.LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(loginService) {
        super();
        this.loginService = loginService;
    }
    async validate(body) {
        return this.loginService.validateUserCredentials(body);
    }
};
exports.LocalStrategy = LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),

/***/ "./apps/oauth/src/login/login.controller.ts":
/*!**************************************************!*\
  !*** ./apps/oauth/src/login/login.controller.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const login_service_1 = __webpack_require__(/*! ./login.service */ "./apps/oauth/src/login/login.service.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ./jwt-auth.guard */ "./apps/oauth/src/login/jwt-auth.guard.ts");
let LoginController = exports.LoginController = class LoginController {
    constructor(authService) {
        this.authService = authService;
    }
    async loginAuth(body) {
        return this.authService.validateUserCredentials(body);
    }
    async login(body) {
        return this.authService.loginWithCredentials(body);
    }
    getUserInfo(req) {
        return req.user;
    }
};
__decorate([
    (0, common_1.Post)('loginauth'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "loginAuth", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('user-info'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getUserInfo", null);
exports.LoginController = LoginController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" ? _a : Object])
], LoginController);


/***/ }),

/***/ "./apps/oauth/src/login/login.module.ts":
/*!**********************************************!*\
  !*** ./apps/oauth/src/login/login.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const administrator_module_1 = __webpack_require__(/*! apps/databasems/src/administrator/administrator.module */ "./apps/databasems/src/administrator/administrator.module.ts");
const login_service_1 = __webpack_require__(/*! ./login.service */ "./apps/oauth/src/login/login.service.ts");
const local_sttrategy_1 = __webpack_require__(/*! ./local.sttrategy */ "./apps/oauth/src/login/local.sttrategy.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./jwt.strategy */ "./apps/oauth/src/login/jwt.strategy.ts");
const login_controller_1 = __webpack_require__(/*! ./login.controller */ "./apps/oauth/src/login/login.controller.ts");
let LoginModule = exports.LoginModule = class LoginModule {
};
exports.LoginModule = LoginModule = __decorate([
    (0, common_1.Module)({
        imports: [
            administrator_module_1.AdministratorModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: 'secretpowerfit',
                signOptions: { expiresIn: '10m' }
            })
        ],
        controllers: [login_controller_1.LoginController],
        providers: [login_service_1.LoginService, local_sttrategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [login_service_1.LoginService]
    })
], LoginModule);


/***/ }),

/***/ "./apps/oauth/src/login/login.service.ts":
/*!***********************************************!*\
  !*** ./apps/oauth/src/login/login.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const administrator_service_1 = __webpack_require__(/*! apps/databasems/src/administrator/services/administrator.service */ "./apps/databasems/src/administrator/services/administrator.service.ts");
let LoginService = exports.LoginService = class LoginService {
    constructor(usersService, jwtTokenService) {
        this.usersService = usersService;
        this.jwtTokenService = jwtTokenService;
    }
    async validateUserCredentials(body) {
        const user = await this.usersService.findOneAdminByMail(body.correo_admin);
        if (user && user.contrasena_admin === body.contrasena_admin) {
            const { contrasena_admin, ...result } = user;
            return result;
        }
        return null;
    }
    async loginWithCredentials(user) {
        const payload = { correo_admin: user.correo_admin, id_admin: user.id_admin };
        return {
            access_token: this.jwtTokenService.sign(payload),
        };
    }
};
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof administrator_service_1.AdministratorService !== "undefined" && administrator_service_1.AdministratorService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], LoginService);


/***/ }),

/***/ "./apps/oauth/src/oauth.module.ts":
/*!****************************************!*\
  !*** ./apps/oauth/src/oauth.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OauthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const administrator_entity_1 = __webpack_require__(/*! apps/databasems/src/entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
const activity_entity_1 = __webpack_require__(/*! apps/databasems/src/entities/activity.entity */ "./apps/databasems/src/entities/activity.entity.ts");
const enterprise_entity_1 = __webpack_require__(/*! apps/databasems/src/entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
const register_entity_1 = __webpack_require__(/*! apps/databasems/src/entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
const reward_entity_1 = __webpack_require__(/*! apps/databasems/src/entities/reward.entity */ "./apps/databasems/src/entities/reward.entity.ts");
const user_entity_1 = __webpack_require__(/*! apps/databasems/src/entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
const login_module_1 = __webpack_require__(/*! ./login/login.module */ "./apps/oauth/src/login/login.module.ts");
let OauthModule = exports.OauthModule = class OauthModule {
};
exports.OauthModule = OauthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'powefitdatabase-do-user-14057935-0.b.db.ondigitalocean.com',
                port: 25060,
                username: 'martin',
                password: 'AVNS_3oyy-9amBTfYuN9_AVA',
                database: 'microservicepowerfitdb',
                ssl: true,
                extra: {
                    ssl: {
                        rejectUnauthorized: false,
                    },
                },
                entities: [activity_entity_1.Actividad, administrator_entity_1.Administrador, enterprise_entity_1.Empresa, register_entity_1.Registro, reward_entity_1.Premio, user_entity_1.Usuario],
                synchronize: true,
                retryDelay: 3000,
                retryAttempts: 10
            }),
            typeorm_1.TypeOrmModule.forFeature([activity_entity_1.Actividad, administrator_entity_1.Administrador, enterprise_entity_1.Empresa, register_entity_1.Registro, reward_entity_1.Premio, user_entity_1.Usuario]),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: 'secretepowerfit',
                signOptions: { expiresIn: '1h' },
            }),
            login_module_1.LoginModule
        ],
        controllers: [],
        providers: [],
    })
], OauthModule);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./apps/oauth/src/main.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const oauth_module_1 = __webpack_require__(/*! ./oauth.module */ "./apps/oauth/src/oauth.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(oauth_module_1.OauthModule);
    app.enableCors({
        origin: true,
        methods: ['POST', 'PUT', 'DELETE', 'GET']
    });
    await app.listen(3002, '0.0.0.0');
}
bootstrap();

})();

/******/ })()
;