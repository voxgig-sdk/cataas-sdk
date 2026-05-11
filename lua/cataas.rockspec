package = "cataas-sdk"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig/cataas-sdk.git"
}
description = {
  summary = "Cataas SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["cataas_sdk"] = "cataas_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
