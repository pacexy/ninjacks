import fs from 'fs'
import prettier from 'prettier'
import nunjucks = require('nunjucks')

import { PascalCase } from './filters'
import { Configuration, ExtendableEnvironment, Environment } from './types'

export const defaultPrettierrc = {
  singleQuote: true,
  semi: false,
  htmlWhitespaceSensitivity: 'ignore' as const,
  trailingComma: 'all' as const,
}

function configure({
  templatesPath,
  options = {},
  prettierrc = defaultPrettierrc,
}: Configuration) {
  const env: ExtendableEnvironment = templatesPath
    ? nunjucks.configure(templatesPath, options)
    : nunjucks.configure(options)

  env.addFilter('PascalCase', PascalCase)

  env.renderFile = (templateName, outputPath, context) => {
    let result = env.render(templateName, context)
    // assign `null` to `prettierrc` to disable prettier
    if (prettierrc !== null) {
      result = prettier.format(result, prettierrc)
    }
    fs.writeFileSync(outputPath, result)
  }

  return env as Environment
}

export default { ...nunjucks, configure }
