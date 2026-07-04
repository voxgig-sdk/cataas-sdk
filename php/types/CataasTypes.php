<?php
declare(strict_types=1);

// Typed models for the Cataas SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Cat entity data model. */
class Cat
{
    public ?string $created_at = null;
    public ?string $id = null;
    public ?string $mimetype = null;
    public ?int $size = null;
    public ?array $tag = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** Request payload for Cat#load. */
class CatLoadMatch
{
    public string $tag;
    public string $text;
    public string $id;
}

/** Match filter for Cat#list (any subset of Cat fields). */
class CatListMatch
{
    public ?string $created_at = null;
    public ?string $id = null;
    public ?string $mimetype = null;
    public ?int $size = null;
    public ?array $tag = null;
    public ?string $updated_at = null;
    public ?string $url = null;
}

/** Tag entity data model. */
class Tag
{
}

/** Match filter for Tag#list (any subset of Tag fields). */
class TagListMatch
{
}

