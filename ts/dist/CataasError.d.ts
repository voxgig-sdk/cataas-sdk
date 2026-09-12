import { Context } from './Context';
declare class CataasError extends Error {
    isCataasError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CataasError };
