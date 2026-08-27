# frozen_string_literal: true

# Typed models for the Cataas SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Cat entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] mimetype
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Cat = Struct.new(
  :created_at,
  :id,
  :mimetype,
  :size,
  :tags,
  :updated_at,
  :url,
  keyword_init: true
)

# Request payload for Cat#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] height
#   @return [Integer, nil]
#
# @!attribute [rw] html
#   @return [Boolean, nil]
#
# @!attribute [rw] json
#   @return [Boolean, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Integer, nil]
CatLoadMatch = Struct.new(
  :id,
  :filter,
  :height,
  :html,
  :json,
  :type,
  :width,
  keyword_init: true
)

# Request payload for Cat#list.
#
# @!attribute [rw] b
#   @return [Integer, nil]
#
# @!attribute [rw] brightness
#   @return [Float, nil]
#
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] g
#   @return [Integer, nil]
#
# @!attribute [rw] height
#   @return [Integer, nil]
#
# @!attribute [rw] html
#   @return [Boolean, nil]
#
# @!attribute [rw] hue
#   @return [Float, nil]
#
# @!attribute [rw] json
#   @return [Boolean, nil]
#
# @!attribute [rw] lightness
#   @return [Float, nil]
#
# @!attribute [rw] r
#   @return [Integer, nil]
#
# @!attribute [rw] saturation
#   @return [Float, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Integer, nil]
CatListMatch = Struct.new(
  :b,
  :brightness,
  :filter,
  :g,
  :height,
  :html,
  :hue,
  :json,
  :lightness,
  :r,
  :saturation,
  :type,
  :width,
  keyword_init: true
)

# Tag entity data model.
class Tag
end

# Request payload for Tag#list.
class TagListMatch
end

