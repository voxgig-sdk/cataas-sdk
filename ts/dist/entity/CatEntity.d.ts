import { CataasEntityBase } from '../CataasEntityBase';
import type { CataasSDK } from '../CataasSDK';
import type { Control } from '../types';
import type { Cat, CatLoadMatch, CatListMatch } from '../CataasTypes';
declare class CatEntity extends CataasEntityBase<Cat> {
    constructor(client: CataasSDK, entopts: any);
    make(this: CatEntity): CatEntity;
    load(this: any, reqmatch?: CatLoadMatch, ctrl?: Control): Promise<CatEntity>;
    list(this: any, reqmatch?: CatListMatch, ctrl?: Control): Promise<CatEntity[]>;
}
export { CatEntity };
