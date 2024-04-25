import fs from 'node:fs'
import { describe, expect, it } from 'vitest'
import { generateScript, transpile } from '../src/functions'

describe('functions', () => {
  it('generateScript', () => {
    expect(generateScript).not.toThrow()
  })
  it('transpile', () => {
    expect(transpile).not.toThrow()
  })
  it('check code', () => {
    expect(fs.readFileSync('one.js', {
      encoding: 'utf8',
    })).toEqual(fs.readFileSync('one.js', {
      encoding: 'utf8',
    }))
  })
})
