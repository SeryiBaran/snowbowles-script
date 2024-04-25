import { describe, expect, it } from 'vitest'
import { generateScript, transpile } from '../src/functions'

describe('functions', () => {
  it('generateScript', () => {
    expect(generateScript).not.toThrow()
  })
  it('transpile', () => {
    expect(transpile).not.toThrow()
  })
})
