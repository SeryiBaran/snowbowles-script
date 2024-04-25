import fs from 'node:fs'
import { StringDecoder } from 'node:string_decoder'
import { Buffer } from 'node:buffer'
import dayjs from 'dayjs'

const langVersion = '2.007'

const todayDateFormatted = dayjs().format('YYYY-DD-MM-YYYY')

const scriptSrc = fs.readFileSync('./snowbowles-script (SNOWBOWLEScript).snowbowles-script.ts', {
  encoding: 'utf8',
})

const asciiDecoder = new StringDecoder()

console.log(`snowbowles-script (SNOWBOWLEScript) version: ${langVersion}`)
console.log(`Today is: ${todayDateFormatted}`)
console.log(`========================================`)
console.log(`COMPILING snowbowles-script (SNOWBOWLEScript) script...`)
console.log(`========================================`)

try {
  const allFileSyntaxRegexp = /.+/g

  if (!allFileSyntaxRegexp.test(scriptSrc))
    throw new Error('script file syntax is shit!')

  if (!/^snowbowles-script\s\(SNOWBOWLEScript\)/g.test(scriptSrc))
    throw new Error('script doesnt contains lang name')

  if (!/\d\d\d\d-\d\d-\d\d-\d\d\d\d\n/g.test(scriptSrc))
    throw new Error('script doesnt contains today date')

  const scriptLangVersionMatch = /SNOWBOWLEScript\[\n(\d{8}\n\d{8}\n\d{8}\n\d{8}\n\d{8})\]/g.exec(scriptSrc)
  if (!scriptLangVersionMatch)
    throw new Error('getLangVersion don\'t founded anything')

  const scriptLangVersion = asciiDecoder.write(Buffer.from(scriptLangVersionMatch[1].split('\n').map(str => Number.parseInt(str, 2))))
  if (scriptLangVersion !== langVersion)
    throw new Error('scriptLangVersion !== langVersion')

  const scriptProgramNameMatch = /Arputamanuuebanolopatogovno\>\{(\n\s\s\s\s\s\s\s\d{8}\n\s\s\s\s\s\s\s\d{8}\n\s\s\s\s\s\s\s\d{8})\}\<analomarapeskolohovozofemtogramm/g.exec(scriptSrc)
  if (!scriptProgramNameMatch)
    throw new Error('!scriptProgramNameMatch')
  const scriptProgramName = asciiDecoder.write(Buffer.from(scriptProgramNameMatch[1].replaceAll(/\s+/gi, ' ').trim().split(' ').map(str => Number.parseInt(str, 2))))

  console.log(`PROGRAM NAME: ${scriptProgramName}`)

  const outputFile = `./${scriptProgramName}.js`

  const scriptCodeBlockMatch = /1\n22\n3378\n444\n(.+)1\n22\n3378\n444\n/gms.exec(scriptSrc)
  if (!scriptCodeBlockMatch)
    throw new Error('scriptCodeBlockMatch don\'t founded anything')
  const scriptCodeBlock = scriptCodeBlockMatch[1]

  const scriptCodeLines = scriptCodeBlock.trim().split('\n')

  let previousLineIndent = 0

  const scriptCodeLinesTrimmed = scriptCodeLines.map((line, lineIndex) => {
    const currentLineIndent = line.search(/\S/g)

    if (lineIndex !== 0 && (previousLineIndent + 1 !== currentLineIndent))
      throw new Error('previousLineIndent + 1 != currentLineIndent')

    previousLineIndent = currentLineIndent

    return line.trim()
  })

  const scriptCodeLinesDecoded = scriptCodeLinesTrimmed.map((line) => {
    const byteString = line.split('GEN').map((digit) => {
      if (digit === 'snowbowles snowbowler. snowbowler? snowbowler. DEM selwobwons')
        return '0'
      else if (digit === 'snowbowles snowbawler. snawboler! sniffbowler, DEM selwobwons')
        return '1'
      else
        throw new Error(`code contains what not 'snowbowles snowbowler. snowbowler? snowbowler. DEM selwobwons' or 'snowbowles snowbawler. snawboler! sniffbowler, DEM selwobwons' divided by 'GEN'`)
    }).join('')

    return asciiDecoder.write(Buffer.from([Number.parseInt(byteString, 2)]))
  })

  fs.writeFileSync(outputFile, scriptCodeLinesDecoded.join(''))
}
catch (e) {
  throw new Error('FUCK YOU STUPID IDIOT! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU! FUCK YOU!')
}

console.log(`========================================`)
console.log(`COMPILING snowbowles-script (SNOWBOWLEScript) script is done.`)
