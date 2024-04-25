import { describe, expect, it } from 'vitest'
import { execa } from 'execa'
import { generateScript, transpile } from '../src/functions'

describe('functions', () => {
  it('generateScript', () => {
    expect(generateScript).not.toThrow()
  })
  it('transpile', () => {
    expect(transpile).not.toThrow()
  })
  it('run', async () => {
    const child = await execa('pnpm runProg')

    expect(child.exitCode).toBe(0)
  })
})
