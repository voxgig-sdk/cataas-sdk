# Cataas SDK feature factory

from feature.base_feature import CataasBaseFeature
from feature.test_feature import CataasTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CataasBaseFeature(),
        "test": lambda: CataasTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
