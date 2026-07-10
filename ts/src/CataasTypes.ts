// Typed models for the Cataas SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Cat {
  created_at?: string
  id?: string
  mimetype?: string
  size?: number
  tag?: any[]
  updated_at?: string
  url?: string
}

export interface CatLoadMatch {
  tag?: string
  text?: string
  id?: string
}

export interface CatListMatch {
  created_at?: string
  id?: string
  mimetype?: string
  size?: number
  tag?: any[]
  updated_at?: string
  url?: string
}

export interface Tag {
}

export interface TagListMatch {
}

