import { CataasEntityBase } from '../CataasEntityBase';
import type { CataasSDK } from '../CataasSDK';
import type { Control } from '../types';
import type { Tag, TagListMatch } from '../CataasTypes';
declare class TagEntity extends CataasEntityBase<Tag> {
    constructor(client: CataasSDK, entopts: any);
    make(this: TagEntity): TagEntity;
    list(this: any, reqmatch?: TagListMatch, ctrl?: Control): Promise<TagEntity[]>;
}
export { TagEntity };
