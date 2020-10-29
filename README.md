# ninjacks
A simple wrapper for  nunjucks.

## Usage

```typescript
import ninjacks from 'ninjacks'

const env = ninjacks.configure({
  templatesPath: 'your-templates-path',
})

env.renderFile('your-template-name', 'your-output-path', context)
```
## APIs

### configure

`configure` method is wrapped and will return an `Environment`.

```typescript
ninjacks.configure(configuration: Configuration): Environment

interface Configuration {
  templatesPath?: string | string[]
  options?: nunjucks.ConfigureOptions
  prettierrc?: prettier.Options | null
}
```


### Environment

`Environment` extends the raw `nunjucks.Environment` with a `renderFile` method who can
render, format (with prettier), and write.

```typescript
env.renderFile(
  templateName: string,
  outputPath: string,
  context?: object
)
```


## Prettier

The default prettierrc is 
```typescript
{
  singleQuote: true,
  semi: false,
  htmlWhitespaceSensitivity: 'ignore',
  trailingComma: 'all',
}
```

You can specify a parser in `prettierrc`.
```typescript
import ninjacks, { defaultPrettierrc } from 'ninjacks'

const env = ninjacks.configure({
  templatesPath: 'your-templates-path',
  // This will override the default prettierrc.
  prettierrc: { parser: 'html' },
  // If you don't want this, import the default prettierrc and use it.
  prettierrc: { ...defaultPrettierrc, parser: 'html' },
  // Also, you can disable prettier.
  prettierrc: null
})
```
