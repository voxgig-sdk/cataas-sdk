# Typed models for the Cataas SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Cat:
    created_at: Optional[str] = None
    id: Optional[str] = None
    mimetype: Optional[str] = None
    size: Optional[int] = None
    tag: Optional[list] = None
    updated_at: Optional[str] = None
    url: Optional[str] = None


@dataclass
class CatLoadMatch:
    tag: str
    text: str
    id: str


@dataclass
class CatListMatch:
    created_at: Optional[str] = None
    id: Optional[str] = None
    mimetype: Optional[str] = None
    size: Optional[int] = None
    tag: Optional[list] = None
    updated_at: Optional[str] = None
    url: Optional[str] = None


@dataclass
class Tag:
    pass


@dataclass
class TagListMatch:
    pass

