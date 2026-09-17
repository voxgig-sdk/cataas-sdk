
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Cataas',
        slug: "cataas",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://cataas.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        cat: {
        },
  
        tag: {
        },
  
    }
  }


  entity = {
    "cat": {
      "fields": [
        {
          "format": "date-time",
          "name": "created_at",
          "short": "Creation timestamp",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the cat",
          "type": "`$STRING`"
        },
        {
          "name": "mimetype",
          "short": "MIME type of the image",
          "type": "`$STRING`"
        },
        {
          "name": "size",
          "short": "Size of the image in bytes",
          "type": "`$INTEGER`"
        },
        {
          "name": "tags",
          "short": "Tags associated with the cat",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "short": "Last update timestamp",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "URL to access the cat image",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
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
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "brightness",
                    "orig": "brightness",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "g",
                    "orig": "g",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "height",
                    "orig": "height",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "html",
                    "orig": "html",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "hue",
                    "orig": "hue",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "json",
                    "orig": "json",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "lightness",
                    "orig": "lightness",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "r",
                    "orig": "r",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "saturation",
                    "orig": "saturation",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "width",
                    "orig": "width",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cat",
              "segments": [
                {
                  "lit": "cat"
                }
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
                  "width"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.tags`"
              },
              "parts": [
                "cat"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "html",
                    "orig": "html",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "json",
                    "orig": "json",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cat/gif",
              "segments": [
                {
                  "lit": "cat"
                },
                {
                  "lit": "gif"
                }
              ],
              "select": {
                "$action": "gif",
                "exist": [
                  "filter",
                  "html",
                  "json",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.tags`"
              },
              "parts": [
                "cat",
                "gif"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "skip",
                    "orig": "skip",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "cute,funny",
                    "kind": "query",
                    "name": "tag",
                    "orig": "tag",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/cats",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "cats"
                }
              ],
              "select": {
                "exist": [
                  "limit",
                  "skip",
                  "tag"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "cats"
              ]
            }
          ]
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
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "hello",
                    "kind": "param",
                    "name": "text",
                    "orig": "text",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "font_color",
                    "orig": "font_color",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "font_size",
                    "orig": "font_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "height",
                    "orig": "height",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "html",
                    "orig": "html",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "json",
                    "orig": "json",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "width",
                    "orig": "width",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cat/{tag}/says/{text}",
              "segments": [
                {
                  "lit": "cat"
                },
                {
                  "var": "tag"
                },
                {
                  "lit": "says"
                },
                {
                  "var": "text"
                }
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
                  "width"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cat",
                "{tag}",
                "says",
                "{text}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": "hello",
                    "kind": "param",
                    "name": "text",
                    "orig": "text",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "font_color",
                    "orig": "font_color",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "font_size",
                    "orig": "font_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "height",
                    "orig": "height",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "html",
                    "orig": "html",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "json",
                    "orig": "json",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "width",
                    "orig": "width",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cat/says/{text}",
              "segments": [
                {
                  "lit": "cat"
                },
                {
                  "lit": "says"
                },
                {
                  "var": "text"
                }
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
                  "width"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cat",
                "says",
                "{text}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": "Hello",
                    "kind": "param",
                    "name": "text",
                    "orig": "text",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "font_color",
                    "orig": "font_color",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "font_size",
                    "orig": "font_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "html",
                    "orig": "html",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "json",
                    "orig": "json",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cat/gif/says/{text}",
              "segments": [
                {
                  "lit": "cat"
                },
                {
                  "lit": "gif"
                },
                {
                  "lit": "says"
                },
                {
                  "var": "text"
                }
              ],
              "select": {
                "exist": [
                  "filter",
                  "font_color",
                  "font_size",
                  "html",
                  "json",
                  "text",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cat",
                "gif",
                "says",
                "{text}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": "orange,cute",
                    "kind": "param",
                    "name": "id",
                    "orig": "tag",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "height",
                    "orig": "height",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "html",
                    "orig": "html",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "json",
                    "orig": "json",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "width",
                    "orig": "width",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cat/{tag}",
              "rename": {
                "param": {
                  "tag": "id"
                }
              },
              "segments": [
                {
                  "lit": "cat"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "filter",
                  "height",
                  "html",
                  "id",
                  "json",
                  "type",
                  "width"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cat",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "cat",
            "say"
          ]
        ]
      }
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
                  "lit": "api"
                },
                {
                  "lit": "tags"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "tags"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

