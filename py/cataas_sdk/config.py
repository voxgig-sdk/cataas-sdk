# Cataas SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Cataas",
            "slug": "cataas",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://cataas.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "cat": {},
                "tag": {},
            },
        },
        "entity": {
      "cat": {
        "fields": [
          {
            "format": "date-time",
            "name": "created_at",
            "short": "Creation timestamp",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the cat",
            "type": "`$STRING`",
          },
          {
            "name": "mimetype",
            "short": "MIME type of the image",
            "type": "`$STRING`",
          },
          {
            "name": "size",
            "short": "Size of the image in bytes",
            "type": "`$INTEGER`",
          },
          {
            "name": "tags",
            "short": "Tags associated with the cat",
            "type": "`$ARRAY`",
          },
          {
            "format": "date-time",
            "name": "updated_at",
            "short": "Last update timestamp",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "URL to access the cat image",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "cat",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "b",
                      "orig": "b",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "brightness",
                      "orig": "brightness",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "filter",
                      "orig": "filter",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "g",
                      "orig": "g",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "height",
                      "orig": "height",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "html",
                      "orig": "html",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "hue",
                      "orig": "hue",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "json",
                      "orig": "json",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "lightness",
                      "orig": "lightness",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "r",
                      "orig": "r",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "saturation",
                      "orig": "saturation",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "width",
                      "orig": "width",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cat",
                "segments": [
                  {
                    "lit": "cat",
                  },
                ],
                "select": {
                  "exist": [
                    "b",
                    "brightness",
                    "filter",
                    "g",
                    "height",
                    "html",
                    "hue",
                    "json",
                    "lightness",
                    "r",
                    "saturation",
                    "type",
                    "width",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.tags`",
                },
                "parts": [
                  "cat",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "filter",
                      "orig": "filter",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "html",
                      "orig": "html",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "json",
                      "orig": "json",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cat/gif",
                "segments": [
                  {
                    "lit": "cat",
                  },
                  {
                    "lit": "gif",
                  },
                ],
                "select": {
                  "$action": "gif",
                  "exist": [
                    "filter",
                    "html",
                    "json",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.tags`",
                },
                "parts": [
                  "cat",
                  "gif",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "skip",
                      "orig": "skip",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "cute,funny",
                      "kind": "query",
                      "name": "tag",
                      "orig": "tag",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/cats",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "cats",
                  },
                ],
                "select": {
                  "exist": [
                    "limit",
                    "skip",
                    "tag",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "cats",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "cute",
                      "kind": "param",
                      "name": "tag",
                      "orig": "tag",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": "hello",
                      "kind": "param",
                      "name": "text",
                      "orig": "text",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "filter",
                      "orig": "filter",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "font_color",
                      "orig": "font_color",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "font_size",
                      "orig": "font_size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "height",
                      "orig": "height",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "html",
                      "orig": "html",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "json",
                      "orig": "json",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "width",
                      "orig": "width",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cat/{tag}/says/{text}",
                "segments": [
                  {
                    "lit": "cat",
                  },
                  {
                    "var": "tag",
                  },
                  {
                    "lit": "says",
                  },
                  {
                    "var": "text",
                  },
                ],
                "select": {
                  "exist": [
                    "filter",
                    "font_color",
                    "font_size",
                    "height",
                    "html",
                    "json",
                    "tag",
                    "text",
                    "type",
                    "width",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "cat",
                  "{tag}",
                  "says",
                  "{text}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": "hello",
                      "kind": "param",
                      "name": "text",
                      "orig": "text",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "filter",
                      "orig": "filter",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "font_color",
                      "orig": "font_color",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "font_size",
                      "orig": "font_size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "height",
                      "orig": "height",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "html",
                      "orig": "html",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "json",
                      "orig": "json",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "width",
                      "orig": "width",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cat/says/{text}",
                "segments": [
                  {
                    "lit": "cat",
                  },
                  {
                    "lit": "says",
                  },
                  {
                    "var": "text",
                  },
                ],
                "select": {
                  "exist": [
                    "filter",
                    "font_color",
                    "font_size",
                    "height",
                    "html",
                    "json",
                    "text",
                    "type",
                    "width",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "cat",
                  "says",
                  "{text}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": "Hello",
                      "kind": "param",
                      "name": "text",
                      "orig": "text",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "filter",
                      "orig": "filter",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "font_color",
                      "orig": "font_color",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "font_size",
                      "orig": "font_size",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "html",
                      "orig": "html",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "json",
                      "orig": "json",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cat/gif/says/{text}",
                "segments": [
                  {
                    "lit": "cat",
                  },
                  {
                    "lit": "gif",
                  },
                  {
                    "lit": "says",
                  },
                  {
                    "var": "text",
                  },
                ],
                "select": {
                  "exist": [
                    "filter",
                    "font_color",
                    "font_size",
                    "html",
                    "json",
                    "text",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "cat",
                  "gif",
                  "says",
                  "{text}",
                ],
              },
              {
                "args": {
                  "params": [
                    {
                      "example": "orange,cute",
                      "kind": "param",
                      "name": "id",
                      "orig": "tag",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "filter",
                      "orig": "filter",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "height",
                      "orig": "height",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "html",
                      "orig": "html",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "json",
                      "orig": "json",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "width",
                      "orig": "width",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/cat/{tag}",
                "rename": {
                  "param": {
                    "tag": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "cat",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "filter",
                    "height",
                    "html",
                    "id",
                    "json",
                    "type",
                    "width",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "cat",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "cat",
              "say",
            ],
          ],
        },
      },
      "tag": {
        "fields": [],
        "name": "tag",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/tags",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "tags",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "tags",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
