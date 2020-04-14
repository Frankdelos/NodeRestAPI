import { Request, Response, NextFunction } from 'express';

export class Student {
    _model: any;
    constructor(norm: any) {
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
        }
      ]];
    }

    getAllStudents(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ['*']
            }
            let carCtrl = model.controller;
            let resp = await carCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getStudentById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            }
            let carCtrl = model.controller;
            let resp = await carCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }
  
    set model(model: any) {
      this._model = model;
    }
  
    get model() {
      return this._model;
    }
  
  }