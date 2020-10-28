import prettier from 'prettier'
import nunjucks = require('nunjucks')

export interface Configuration {
  templatesPath?: string | string[]
  options?: nunjucks.ConfigureOptions
  prettierrc?: prettier.Options | null
}

export interface ExtendableEnvironment extends nunjucks.Environment {
  renderFile?: (
    name: string,
    path: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    context?: object | undefined,
  ) => void
}

export type Environment = Required<ExtendableEnvironment>
