// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      // eslint ignore globs here
      '*snowbowles-script (SNOWBOWLEScript).snowbowles-script.ts*',
    ],
  },
  {
    rules: {
      'no-console': 'off',
    },
  },
)
