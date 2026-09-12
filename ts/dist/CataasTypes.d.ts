export interface Cat {
    created_at?: string;
    id?: string;
    mimetype?: string;
    size?: number;
    tags?: any[];
    updated_at?: string;
    url?: string;
}
export interface CatLoadMatch {
    id: string;
    filter?: string;
    height?: number;
    html?: boolean;
    json?: boolean;
    type?: string;
    width?: number;
}
export interface CatListMatch {
    b?: number;
    brightness?: number;
    filter?: string;
    g?: number;
    height?: number;
    html?: boolean;
    hue?: number;
    json?: boolean;
    lightness?: number;
    r?: number;
    saturation?: number;
    type?: string;
    width?: number;
    $action?: string;
    [action: string]: any;
}
export interface Tag {
}
export interface TagListMatch {
}
