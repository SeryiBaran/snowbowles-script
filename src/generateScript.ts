import fs from 'node:fs'
import { Buffer } from 'node:buffer'
import dayjs from 'dayjs'
import { langVersion } from './langVersion'

const programName = 'one'

const todayDateFormatted = dayjs().format('YYYY-DD-MM-YYYY')

const javascriptCode = fs.readFileSync('./code_for_generateScript.js', {
  encoding: 'utf8',
})

const langVersionFormatted = [...Buffer.from(langVersion, 'ascii')]
  .map(byte => byte.toString(2).padStart(8, '0'))
  .join('\n')

const programNameFormatted = [...Buffer.from(programName, 'ascii')]
  .map(byte => byte.toString(2).padStart(8, '0'))
  .join('\n       ')

const scriptCodeBlock = [...Buffer.from(javascriptCode, 'ascii')]
  .map(byte => byte.toString(2).padStart(8, '0'))
  .map((str) => {
    return str
      .split('')
      .map((char) => {
        if (char === '0')
          return 'snowbowles snowbowler. snowbowler? snowbowler. DEM selwobwons'
        else if (char === '1')
          return 'snowbowles snowbawler. snawboler! sniffbowler, DEM selwobwons'
        else
          return char
      })
      .join('GEN')
  })
  .map((str, index) => `${' '.repeat(index)}${str}`)
  .join('\n')

const script = `snowbowles-script (SNOWBOWLEScript)
${todayDateFormatted}
SNOWBOWLEScript[
${langVersionFormatted}]
Arputamanuuebanolopatogovno>{
       ${programNameFormatted}}<analomarapeskolohovozofemtogramm
1
22
3378
444
${scriptCodeBlock}
1
22
3378
444
`

fs.writeFileSync('./snowbowles-script (SNOWBOWLEScript).snowbowles-script.ts', script)

console.log('Script succesfully generated and writed to:')
console.log('./snowbowles-script (SNOWBOWLEScript).snowbowles-script.ts')
