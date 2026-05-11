# Cataas SDK utility: feature_add
module CataasUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
