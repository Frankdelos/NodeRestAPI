"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                name: { type: String, maxlength: 24 },
                age: { type: String, maxlength: 24 },
                major: { type: String, maxlength: 24 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store exam model',
            [
                {
                    route: '/get-all-students',
                    method: 'POST',
                    callback: this.getAllStudents,
                    requireToken: true,
                },
                {
                    route: '/get-student-by-id/:id',
                    method: 'POST',
                    callback: this.getStudentById,
                    requireToken: true,
                },
                {
                    route: '/create-student',
                    method: 'POST',
                    callback: this.createStudent,
                    requireToken: true,
                },
                {
                    route: '/update-student/id/:id',
                    method: 'PUT',
                    callback: this.updateStudent,
                    requireToken: true,
                },
                {
                    route: '/delete-student/id/:id',
                    method: 'DELETE',
                    callback: this.deleteStudent,
                    requireToken: true,
                }
            ]];
    }
    deleteStudent(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let carCtrl = model.controller;
            let resp = yield carCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    updateStudent(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let carCtrl = model.controller;
            let resp = yield carCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    createStudent(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let carCtrl = model.controller;
            let resp = yield carCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getAllStudents(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let carCtrl = model.controller;
            let resp = yield carCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getStudentById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let carCtrl = model.controller;
            let resp = yield carCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Student = Student;
