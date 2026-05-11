# Cataas SDK utility: make_context
require_relative '../core/context'
module CataasUtilities
  MakeContext = ->(ctxmap, basectx) {
    CataasContext.new(ctxmap, basectx)
  }
end
