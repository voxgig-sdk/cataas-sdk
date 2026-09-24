<?php
declare(strict_types=1);

// Cataas SDK configuration

class CataasConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Cataas",
                "slug" => "cataas",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://cataas.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "cat" => [],
                    "tag" => [],
                ],
            ],
            "entity" => [
        'cat' => [
          'fields' => [
            [
              'name' => 'created_at',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'short' => 'Creation timestamp',
              'format' => 'date-time',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'short' => 'Unique identifier for the cat',
            ],
            [
              'name' => 'mimetype',
              'title' => 'Mimetype',
              'type' => '`$STRING`',
              'short' => 'MIME type of the image',
            ],
            [
              'name' => 'size',
              'title' => 'Size',
              'type' => '`$INTEGER`',
              'short' => 'Size of the image in bytes',
            ],
            [
              'name' => 'tags',
              'title' => 'Tags',
              'type' => '`$ARRAY`',
              'short' => 'Tags associated with the cat',
            ],
            [
              'name' => 'updated_at',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'short' => 'Last update timestamp',
              'format' => 'date-time',
            ],
            [
              'name' => 'url',
              'title' => 'Url',
              'type' => '`$STRING`',
              'short' => 'URL to access the cat image',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'cat',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cat',
                  'segments' => [
                    [
                      'lit' => 'cat',
                    ],
                  ],
                  'parts' => [
                    'cat',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.tags`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'b',
                        'orig' => 'b',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'brightness',
                        'orig' => 'brightness',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'g',
                        'orig' => 'g',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'height',
                        'orig' => 'height',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'html',
                        'orig' => 'html',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'hue',
                        'orig' => 'hue',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'json',
                        'orig' => 'json',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'lightness',
                        'orig' => 'lightness',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'r',
                        'orig' => 'r',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'saturation',
                        'orig' => 'saturation',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'width',
                        'orig' => 'width',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'b',
                      'brightness',
                      'filter',
                      'g',
                      'height',
                      'html',
                      'hue',
                      'json',
                      'lightness',
                      'r',
                      'saturation',
                      'type',
                      'width',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cat/gif',
                  'segments' => [
                    [
                      'lit' => 'cat',
                    ],
                    [
                      'lit' => 'gif',
                    ],
                  ],
                  'parts' => [
                    'cat',
                    'gif',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.tags`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'html',
                        'orig' => 'html',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'json',
                        'orig' => 'json',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'gif',
                    'exist' => [
                      'filter',
                      'html',
                      'json',
                      'type',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/cats',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'cats',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'cats',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 10,
                      ],
                      [
                        'name' => 'skip',
                        'orig' => 'skip',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                      [
                        'name' => 'tag',
                        'orig' => 'tag',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'cute,funny',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'skip',
                      'tag',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cat/{tag}/says/{text}',
                  'segments' => [
                    [
                      'lit' => 'cat',
                    ],
                    [
                      'var' => 'tag',
                    ],
                    [
                      'lit' => 'says',
                    ],
                    [
                      'var' => 'text',
                    ],
                  ],
                  'parts' => [
                    'cat',
                    '{tag}',
                    'says',
                    '{text}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'tag',
                        'orig' => 'tag',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'cute',
                      ],
                      [
                        'name' => 'text',
                        'orig' => 'text',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'hello',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'font_color',
                        'orig' => 'font_color',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'font_size',
                        'orig' => 'font_size',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'height',
                        'orig' => 'height',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'html',
                        'orig' => 'html',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'json',
                        'orig' => 'json',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'width',
                        'orig' => 'width',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'filter',
                      'font_color',
                      'font_size',
                      'height',
                      'html',
                      'json',
                      'tag',
                      'text',
                      'type',
                      'width',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cat/says/{text}',
                  'segments' => [
                    [
                      'lit' => 'cat',
                    ],
                    [
                      'lit' => 'says',
                    ],
                    [
                      'var' => 'text',
                    ],
                  ],
                  'parts' => [
                    'cat',
                    'says',
                    '{text}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'text',
                        'orig' => 'text',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'hello',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'font_color',
                        'orig' => 'font_color',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'font_size',
                        'orig' => 'font_size',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'height',
                        'orig' => 'height',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'html',
                        'orig' => 'html',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'json',
                        'orig' => 'json',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'width',
                        'orig' => 'width',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'filter',
                      'font_color',
                      'font_size',
                      'height',
                      'html',
                      'json',
                      'text',
                      'type',
                      'width',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cat/gif/says/{text}',
                  'segments' => [
                    [
                      'lit' => 'cat',
                    ],
                    [
                      'lit' => 'gif',
                    ],
                    [
                      'lit' => 'says',
                    ],
                    [
                      'var' => 'text',
                    ],
                  ],
                  'parts' => [
                    'cat',
                    'gif',
                    'says',
                    '{text}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'text',
                        'orig' => 'text',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'Hello',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'font_color',
                        'orig' => 'font_color',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'font_size',
                        'orig' => 'font_size',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'html',
                        'orig' => 'html',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'json',
                        'orig' => 'json',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'filter',
                      'font_color',
                      'font_size',
                      'html',
                      'json',
                      'text',
                      'type',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cat/{tag}',
                  'segments' => [
                    [
                      'lit' => 'cat',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'cat',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'tag' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'tag',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'orange,cute',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'height',
                        'orig' => 'height',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'html',
                        'orig' => 'html',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'json',
                        'orig' => 'json',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'width',
                        'orig' => 'width',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'filter',
                      'height',
                      'html',
                      'id',
                      'json',
                      'type',
                      'width',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'tag' => [
          'fields' => [],
          'name' => 'tag',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/tags',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'tags',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'tags',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CataasFeatures::make_feature($name);
    }
}
