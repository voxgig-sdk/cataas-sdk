// Typed models for the Cataas SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Cat is the typed data model for the cat entity.
type Cat struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Mimetype *string `json:"mimetype,omitempty"`
	Size *int `json:"size,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CatLoadMatch is the typed request payload for Cat.LoadTyped.
type CatLoadMatch struct {
	Tag string `json:"tag"`
	Text string `json:"text"`
	Id string `json:"id"`
}

// CatListMatch mirrors the cat fields as an all-optional match
// filter (Go analog of Partial<Cat>).
type CatListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Mimetype *string `json:"mimetype,omitempty"`
	Size *int `json:"size,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Tag is the typed data model for the tag entity.
type Tag struct {
}

// TagListMatch mirrors the tag fields as an all-optional match
// filter (Go analog of Partial<Tag>).
type TagListMatch struct {
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
