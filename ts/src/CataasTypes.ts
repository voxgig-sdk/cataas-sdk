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
  tags?: any[]
  updated_at?: string
  url?: string
}

export interface CatLoadMatch {
  id: string
  filter?: string
  height?: number
  html?: boolean
  json?: boolean
  type?: string
  width?: number
}

export interface CatListMatch {
  b?: number
  brightness?: number
  filter?: string
  g?: number
  height?: number
  html?: boolean
  hue?: number
  json?: boolean
  lightness?: number
  r?: number
  saturation?: number
  type?: string
  width?: number

  // Selects a custom action instead of the plain list:
  //   'gif'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Tag {
}

export interface TagListMatch {
}

