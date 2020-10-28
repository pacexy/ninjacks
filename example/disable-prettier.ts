import path from 'path'

import ninjacks from '../src'

const TEMPLATES_DIR = path.join(__dirname, 'template')
const OUTPUT_DIR = path.join(__dirname, 'output')
const OUTPUT_PATH = path.join(OUTPUT_DIR, 'disable-prettier.pir')

const env = ninjacks.configure({
  templatesPath: TEMPLATES_DIR,
  prettierrc: null,
})
env.renderFile('disable-prettier.njk', OUTPUT_PATH, {
  input: ['void'],
})
