"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CataasError = void 0;
class CataasError extends Error {
    isCataasError = true;
    sdk = 'Cataas';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CataasError = CataasError;
//# sourceMappingURL=CataasError.js.map