import { Request, Response, NextFunction } from 'express';

export class Product {
    _model: any;
    constructor(norm: any) {
      this.model = [{
        id: { type: Number, key: 'primary' },
        name: { type: String, maxlength: 24 },
        price: { type: String, maxlength: 24 },
        department: { type: String, maxlength: 24 },
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
            route: '/get-all-products',
            method: 'POST',
            callback: this.getAllProducts,
            requireToken: true,
        },
        {
            route: '/get-product-by-id/:id',
            method: 'POST',
            callback: this.getProductById,
            requireToken: true,
        },
        {
            route: '/create-product',
            method: 'POST',
            callback: this.createProduct,
            requireToken: true,
        },
        {
            route: '/update-product/id/:id',
            method: 'PUT',
            callback: this.updateProduct,
            requireToken: true,
        },
        {
            route: '/delete-product/id/:id',
            method: 'DELETE',
            callback: this.deleteProduct,
            requireToken: true,
        }
 
      ]];
    }

    deleteProduct(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let carCtrl = model.controller;
            let resp = await carCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }
    updateProduct(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let carCtrl = model.controller;
            let resp = await carCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    createProduct(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            let carCtrl = model.controller;
            let resp = await carCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }
    getAllProducts(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ['*']
            }
            let carCtrl = model.controller;
            let resp = await carCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getProductById(model: any) {
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