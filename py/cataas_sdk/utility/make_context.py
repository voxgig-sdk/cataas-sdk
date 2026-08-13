# Cataas SDK utility: make_context

from cataas_sdk.core.context import CataasContext


def make_context_util(ctxmap, basectx):
    return CataasContext(ctxmap, basectx)
