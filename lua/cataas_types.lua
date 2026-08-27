-- Typed models for the Cataas SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Cat
---@field created_at? string
---@field id? string
---@field mimetype? string
---@field size? number
---@field tags? table
---@field updated_at? string
---@field url? string

---@class CatLoadMatch
---@field id string
---@field filter? string
---@field height? number
---@field html? boolean
---@field json? boolean
---@field type? string
---@field width? number

---@class CatListMatch
---@field b? number
---@field brightness? number
---@field filter? string
---@field g? number
---@field height? number
---@field html? boolean
---@field hue? number
---@field json? boolean
---@field lightness? number
---@field r? number
---@field saturation? number
---@field type? string
---@field width? number

---@class Tag

---@class TagListMatch

local M = {}

return M
