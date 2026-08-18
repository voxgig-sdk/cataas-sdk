
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'Cataas',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "name": "created_at",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "mimetype",
          "type": "`$STRING`"
        },
        {
          "name": "size",
          "type": "`$INTEGER`"
        },
        {
          "name": "tags",
          "type": "`$ARRAY`"
        },
        {
          "name": "updated_at",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "cat"
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
              }
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
              "parts": [
                "cat",
                "gif"
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
              }
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
              "parts": [
                "api",
                "cats"
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
              }
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
              "parts": [
                "cat",
                "{tag}",
                "says",
                "{text}"
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
              }
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
              "parts": [
                "cat",
                "says",
                "{text}"
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
              }
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
              "parts": [
                "cat",
                "gif",
                "says",
                "{text}"
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
              }
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
              "parts": [
                "cat",
                "{id}"
              ],
              "rename": {
                "param": {
                  "tag": "id"
                }
              },
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
              }
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
              "parts": [
                "api",
                "tags"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
  config
}

