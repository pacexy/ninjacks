import path from 'path'

import ninjacks from '../src'

const TEMPLATES_DIR = path.join(__dirname, 'template')
const OUTPUT_DIR = path.join(__dirname, 'output')
const OUTPUT_PATH = path.join(OUTPUT_DIR, 'render-file.ts')

const env = ninjacks.configure({
  templatesPath: TEMPLATES_DIR,
})
env.renderFile('render-file.njk', OUTPUT_PATH, { apis: ['foo', 'bar', 'baz'] })
