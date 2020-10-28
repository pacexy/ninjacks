import path from 'path'

import ninjacks, { defaultPrettierrc } from '../src'

const TEMPLATES_DIR = path.join(__dirname, 'template')
const OUTPUT_DIR = path.join(__dirname, 'output')
const OUTPUT_PATH = path.join(OUTPUT_DIR, 'render-html.html')

const env = ninjacks.configure({
  templatesPath: TEMPLATES_DIR,
  prettierrc: { ...defaultPrettierrc, parser: 'html' },
})
env.renderFile('render-html.njk', OUTPUT_PATH, {
  items: ['foo', 'bar', 'baz'],
})
