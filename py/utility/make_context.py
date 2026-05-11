# Cataas SDK utility: make_context

from core.context import CataasContext


def make_context_util(ctxmap, basectx):
    return CataasContext(ctxmap, basectx)
