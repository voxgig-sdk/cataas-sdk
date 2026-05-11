-- Cataas SDK error

local CataasError = {}
CataasError.__index = CataasError


function CataasError.new(code, msg, ctx)
  local self = setmetatable({}, CataasError)
  self.is_sdk_error = true
  self.sdk = "Cataas"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CataasError:error()
  return self.msg
end


function CataasError:__tostring()
  return self.msg
end


return CataasError
