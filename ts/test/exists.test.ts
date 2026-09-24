
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CataasSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CataasSDK.test()
    equal(testsdk instanceof CataasSDK, true,
      'CataasSDK.test() must return a client synchronously')
  })

})
