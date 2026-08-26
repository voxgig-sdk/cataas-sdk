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
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
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
              'short' => 'Creation timestamp',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the cat',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mimetype',
              'short' => 'MIME type of the image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'size',
              'short' => 'Size of the image in bytes',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'tags',
              'short' => 'Tags associated with the cat',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'updated_at',
              'short' => 'Last update timestamp',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'URL to access the cat image',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'cat',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'b',
                        'orig' => 'b',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'brightness',
                        'orig' => 'brightness',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'g',
                        'orig' => 'g',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'height',
                        'orig' => 'height',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'html',
                        'orig' => 'html',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'hue',
                        'orig' => 'hue',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'json',
                        'orig' => 'json',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'lightness',
                        'orig' => 'lightness',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'r',
                        'orig' => 'r',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'saturation',
                        'orig' => 'saturation',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'width',
                        'orig' => 'width',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cat',
                  'parts' => [
                    'cat',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.tags`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'html',
                        'orig' => 'html',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'json',
                        'orig' => 'json',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cat/gif',
                  'parts' => [
                    'cat',
                    'gif',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.tags`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'skip',
                        'orig' => 'skip',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'cute,funny',
                        'kind' => 'query',
                        'name' => 'tag',
                        'orig' => 'tag',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/cats',
                  'parts' => [
                    'api',
                    'cats',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'skip',
                      'tag',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'cute',
                        'kind' => 'param',
                        'name' => 'tag',
                        'orig' => 'tag',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'hello',
                        'kind' => 'param',
                        'name' => 'text',
                        'orig' => 'text',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'font_color',
                        'orig' => 'font_color',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'font_size',
                        'orig' => 'font_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'height',
                        'orig' => 'height',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'html',
                        'orig' => 'html',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'json',
                        'orig' => 'json',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'width',
                        'orig' => 'width',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cat/{tag}/says/{text}',
                  'parts' => [
                    'cat',
                    '{tag}',
                    'says',
                    '{text}',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'hello',
                        'kind' => 'param',
                        'name' => 'text',
                        'orig' => 'text',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'font_color',
                        'orig' => 'font_color',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'font_size',
                        'orig' => 'font_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'height',
                        'orig' => 'height',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'html',
                        'orig' => 'html',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'json',
                        'orig' => 'json',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'width',
                        'orig' => 'width',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cat/says/{text}',
                  'parts' => [
                    'cat',
                    'says',
                    '{text}',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'Hello',
                        'kind' => 'param',
                        'name' => 'text',
                        'orig' => 'text',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'font_color',
                        'orig' => 'font_color',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'font_size',
                        'orig' => 'font_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'html',
                        'orig' => 'html',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'json',
                        'orig' => 'json',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cat/gif/says/{text}',
                  'parts' => [
                    'cat',
                    'gif',
                    'says',
                    '{text}',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'orange,cute',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'tag',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'height',
                        'orig' => 'height',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'html',
                        'orig' => 'html',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'json',
                        'orig' => 'json',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'width',
                        'orig' => 'width',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cat/{tag}',
                  'parts' => [
                    'cat',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'tag' => 'id',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'cat',
                'say',
              ],
            ],
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
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/tags',
                  'parts' => [
                    'api',
                    'tags',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
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
