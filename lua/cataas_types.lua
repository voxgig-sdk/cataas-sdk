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
---@field tag? table
---@field updated_at? string
---@field url? string

---@class CatLoadMatch
---@field tag string
---@field text string
---@field id string

---@class CatListMatch
---@field created_at? string
---@field id? string
---@field mimetype? string
---@field size? number
---@field tag? table
---@field updated_at? string
---@field url? string

---@class Tag

---@class TagListMatch

local M = {}

return M
