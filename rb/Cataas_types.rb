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
# @!attribute [rw] tag
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
  :tag,
  :updated_at,
  :url,
  keyword_init: true
)

# Request payload for Cat#load.
#
# @!attribute [rw] tag
#   @return [String]
#
# @!attribute [rw] text
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
CatLoadMatch = Struct.new(
  :tag,
  :text,
  :id,
  keyword_init: true
)

# Request payload for Cat#list.
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
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
CatListMatch = Struct.new(
  :created_at,
  :id,
  :mimetype,
  :size,
  :tag,
  :updated_at,
  :url,
  keyword_init: true
)

# Tag entity data model.
class Tag
end

# Request payload for Tag#list.
class TagListMatch
end

