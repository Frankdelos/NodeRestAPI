import { Request, Response, NextFunction } from 'express';
export declare class Product {
    _model: any;
    constructor(norm: any);
    updateProduct(model: any): (req: Request<import("../../../../../../Users/frankie/Desktop/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/frankie/Desktop/ExamAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    createProduct(model: any): (req: Request<import("../../../../../../Users/frankie/Desktop/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/frankie/Desktop/ExamAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getAllProducts(model: any): (req: Request<import("../../../../../../Users/frankie/Desktop/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/frankie/Desktop/ExamAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getProductById(model: any): (req: Request<import("../../../../../../Users/frankie/Desktop/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../Users/frankie/Desktop/ExamAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
