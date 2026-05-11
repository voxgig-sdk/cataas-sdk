# ProjectName SDK exists test

import pytest
from cataas_sdk import CataasSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CataasSDK.test(None, None)
        assert testsdk is not None
