import upperFirst from 'lodash.upperfirst'
import camelCase from 'lodash.camelcase'
import flow from 'lodash.flow'

export const PascalCase = flow([camelCase, upperFirst])
