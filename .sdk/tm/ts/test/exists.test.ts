
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CataasSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await CataasSDK.test()
    equal(null !== testsdk, true)
  })

})
