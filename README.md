# Cataas SDK

Serve random cat images, GIFs, and tag-filtered cat photos with optional text overlays and image filters

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About CATAAS API

[CATAAS](https://cataas.com) — Cat as a Service — is a small public REST API that returns cat images, GIFs, and metadata. It is maintained by Kevin of [boutdecode.fr](https://boutdecode.fr) and described as "a REST API to spread peace and love (or not) thanks to cats."

What you get from the API:

- Random cat images via `/cat`, or filtered by one or more tags via `/cat/:tag` (commas combine tags)
- Animated cat GIFs via `/cat/gif`
- Text overlays via `/cat/says/:text` and `/cat/:tag/says/:text`, with `fontSize` and `fontColor` controls
- Image customization query parameters including `type` (xsmall, small, medium, square), `filter` (blur, mono, negate), `width`/`height`, and colour adjustments (`brightness`, `lightness`, `saturation`, `hue`, `r`, `g`, `b`)
- JSON or HTML responses with `?json=true` or `?html=true`
- Cat collection listings with filtering and pagination via `/api/cats?tags=...&skip=0&limit=10`
- The full tag vocabulary via `/api/tags`

No authentication or API key is required, and CORS is enabled on the documented endpoints. The upstream docs do not publish rate limits or a formal licence, so check the homepage before redistributing images at scale.

## Try it

**TypeScript**
```bash
npm install cataas
```

**Python**
```bash
pip install cataas-sdk
```

**PHP**
```bash
composer require voxgig/cataas-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/cataas-sdk/go
```

**Ruby**
```bash
gem install cataas-sdk
```

**Lua**
```bash
luarocks install cataas-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { CataasSDK } from 'cataas'

const client = new CataasSDK({})

// List all cats
const cats = await client.Cat().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o cataas-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "cataas": {
      "command": "/abs/path/to/cataas-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Cat** | A cat image resource — random, tag-filtered, GIF, or with a text overlay — served via `/cat`, `/cat/:tag`, `/cat/gif`, `/cat/says/:text`, and listed in bulk through `/api/cats`. | `/cat` |
| **Tag** | A descriptive label attached to cat images (e.g. `cute`), used to filter cats and enumerated via `/api/tags`. | `/api/tags` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from cataas_sdk import CataasSDK

client = CataasSDK({})

# List all cats
cats, err = client.Cat(None).list(None, None)

# Load a specific cat
cat, err = client.Cat(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'cataas_sdk.php';

$client = new CataasSDK([]);

// List all cats
[$cats, $err] = $client->Cat(null)->list(null, null);

// Load a specific cat
[$cat, $err] = $client->Cat(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/cataas-sdk/go"

client := sdk.NewCataasSDK(map[string]any{})

// List all cats
cats, err := client.Cat(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Cataas_sdk"

client = CataasSDK.new({})

# List all cats
cats, err = client.Cat(nil).list(nil, nil)

# Load a specific cat
cat, err = client.Cat(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("cataas_sdk")

local client = sdk.new({})

-- List all cats
local cats, err = client:Cat(nil):list(nil, nil)

-- Load a specific cat
local cat, err = client:Cat(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = CataasSDK.test()
const result = await client.Cat().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = CataasSDK.test(None, None)
result, err = client.Cat(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = CataasSDK::test(null, null);
[$result, $err] = $client->Cat(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Cat(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = CataasSDK.test(nil, nil)
result, err = client.Cat(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Cat(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the CATAAS API

- Upstream: [https://cataas.com](https://cataas.com)

---

Generated from the CATAAS API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
