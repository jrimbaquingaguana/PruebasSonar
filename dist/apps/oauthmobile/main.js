/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./apps/databasems/src/user/controllers/user.controller.ts":
/*!*****************************************************************!*\
  !*** ./apps/databasems/src/user/controllers/user.controller.ts ***!
  \*****************************************************************/
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
exports.UserController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ../services/user.service */ "./apps/databasems/src/user/services/user.service.ts");
let UserController = exports.UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAll() {
        return this.userService.findAll();
    }
    getOne(id) {
        return this.userService.findOne(id);
    }
    findByEmail(searchItemDto) {
        return this.userService.findOneUserByMail(searchItemDto.correo_user);
    }
    create(body) {
        return this.userService.create(body);
    }
    update(id, body) {
        return this.userService.update(id, body);
    }
    delete(id) {
        return this.userService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findByEmail", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delete", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('api_db/user'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),

/***/ "./apps/databasems/src/user/services/user.service.ts":
/*!***********************************************************!*\
  !*** ./apps/databasems/src/user/services/user.service.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
let UserService = exports.UserService = class UserService {
    constructor(user_repo) {
        this.user_repo = user_repo;
    }
    findAll() {
        return this.user_repo.find();
    }
    findOne(id) {
        return this.user_repo.findOne({ where: { id_user: id } });
    }
    findOneUserByMail(correo) {
        return this.user_repo.findOne({ where: { correo_user: correo } });
    }
    create(body) {
        const newAdministrator = this.user_repo.create(body);
        return this.user_repo.save(newAdministrator);
    }
    async update(id, body) {
        const administrator = await this.user_repo.findOne({ where: { id_user: id } });
        this.user_repo.merge(administrator, body);
        return this.user_repo.save(administrator);
    }
    async delete(id) {
        await this.user_repo.delete(id);
        return true;
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserService);


/***/ }),

/***/ "./apps/databasems/src/user/user.module.ts":
/*!*************************************************!*\
  !*** ./apps/databasems/src/user/user.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ./services/user.service */ "./apps/databasems/src/user/services/user.service.ts");
const user_controller_1 = __webpack_require__(/*! ./controllers/user.controller */ "./apps/databasems/src/user/controllers/user.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const activity_entity_1 = __webpack_require__(/*! ../entities/activity.entity */ "./apps/databasems/src/entities/activity.entity.ts");
const administrator_entity_1 = __webpack_require__(/*! ../entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
const enterprise_entity_1 = __webpack_require__(/*! ../entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
const register_entity_1 = __webpack_require__(/*! ../entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
const reward_entity_1 = __webpack_require__(/*! ../entities/reward.entity */ "./apps/databasems/src/entities/reward.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
let UserModule = exports.UserModule = class UserModule {
};
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([activity_entity_1.Actividad, administrator_entity_1.Administrador, enterprise_entity_1.Empresa, register_entity_1.Registro, reward_entity_1.Premio, user_entity_1.Usuario])
        ],
        providers: [user_service_1.UserService],
        controllers: [user_controller_1.UserController],
        exports: [user_service_1.UserService],
    })
], UserModule);


/***/ }),

/***/ "./apps/oauthmobile/src/login/login.controller.ts":
/*!********************************************************!*\
  !*** ./apps/oauthmobile/src/login/login.controller.ts ***!
  \********************************************************/
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
const login_service_1 = __webpack_require__(/*! ./login.service */ "./apps/oauthmobile/src/login/login.service.ts");
let LoginController = exports.LoginController = class LoginController {
    constructor(authService) {
        this.authService = authService;
    }
    async loginAuth(body) {
        return this.authService.validateUserCredentials(body);
    }
};
__decorate([
    (0, common_1.Post)('loginmobile'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "loginAuth", null);
exports.LoginController = LoginController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" ? _a : Object])
], LoginController);


/***/ }),

/***/ "./apps/oauthmobile/src/login/login.module.ts":
/*!****************************************************!*\
  !*** ./apps/oauthmobile/src/login/login.module.ts ***!
  \****************************************************/
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
const user_module_1 = __webpack_require__(/*! apps/databasems/src/user/user.module */ "./apps/databasems/src/user/user.module.ts");
const login_service_1 = __webpack_require__(/*! ./login.service */ "./apps/oauthmobile/src/login/login.service.ts");
const login_controller_1 = __webpack_require__(/*! ./login.controller */ "./apps/oauthmobile/src/login/login.controller.ts");
let LoginModule = exports.LoginModule = class LoginModule {
};
exports.LoginModule = LoginModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule
        ],
        controllers: [login_controller_1.LoginController],
        providers: [login_service_1.LoginService],
        exports: [login_service_1.LoginService],
    })
], LoginModule);


/***/ }),

/***/ "./apps/oauthmobile/src/login/login.service.ts":
/*!*****************************************************!*\
  !*** ./apps/oauthmobile/src/login/login.service.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! apps/databasems/src/user/services/user.service */ "./apps/databasems/src/user/services/user.service.ts");
let LoginService = exports.LoginService = class LoginService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async validateUserCredentials(body) {
        const user = await this.usersService.findOneUserByMail(body.correo_user);
        if (user && user.contrasena_user === body.contrasena_user) {
            return true;
        }
        return false;
    }
};
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], LoginService);


/***/ }),

/***/ "./apps/oauthmobile/src/oauthmobile.module.ts":
/*!****************************************************!*\
  !*** ./apps/oauthmobile/src/oauthmobile.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OauthmobileModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const administrator_entity_1 = __webpack_require__(/*! apps/databasems/src/entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
const activity_entity_1 = __webpack_require__(/*! apps/databasems/src/entities/activity.entity */ "./apps/databasems/src/entities/activity.entity.ts");
const enterprise_entity_1 = __webpack_require__(/*! apps/databasems/src/entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
const register_entity_1 = __webpack_require__(/*! apps/databasems/src/entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
const reward_entity_1 = __webpack_require__(/*! apps/databasems/src/entities/reward.entity */ "./apps/databasems/src/entities/reward.entity.ts");
const user_entity_1 = __webpack_require__(/*! apps/databasems/src/entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
const login_module_1 = __webpack_require__(/*! ./login/login.module */ "./apps/oauthmobile/src/login/login.module.ts");
const user_module_1 = __webpack_require__(/*! apps/databasems/src/user/user.module */ "./apps/databasems/src/user/user.module.ts");
let OauthmobileModule = exports.OauthmobileModule = class OauthmobileModule {
};
exports.OauthmobileModule = OauthmobileModule = __decorate([
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
            login_module_1.LoginModule, user_module_1.UserModule,
        ],
        controllers: [],
        providers: [],
    })
], OauthmobileModule);


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

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

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
/*!**************************************!*\
  !*** ./apps/oauthmobile/src/main.ts ***!
  \**************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const oauthmobile_module_1 = __webpack_require__(/*! ./oauthmobile.module */ "./apps/oauthmobile/src/oauthmobile.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(oauthmobile_module_1.OauthmobileModule);
    app.enableCors({
        origin: true,
        methods: ['POST', 'PUT', 'DELETE', 'GET']
    });
    await app.listen(3003, '0.0.0.0');
}
bootstrap();

})();

/******/ })()
;