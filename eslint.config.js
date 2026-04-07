import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'
import {defineConfig, globalIgnores} from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "quotes": ["error", "single", { avoidEscape: true, allowTemplateLiterals: true }],
      "semi": ["error", "always"],
      "object-curly-spacing": ["error", "always"],

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'type',
            ['parent', 'sibling', 'index']
          ],
          pathGroups: [
            {
              pattern: '@/app/**',
              group: 'internal',
              position: 'before'
            }, {
              pattern: '@/pages/**',
              group: 'internal',
            }, {
              pattern: '@/widgets/**',
              group: 'internal',
            }
            , {
              pattern: '@/entities/**',
              group: 'internal',
            },
            {
              pattern: '@/shared/**',
              group: 'internal',
            }

          ],
          'newlines-between': 'always',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true,
          }
        }
      ]
    }
  },
])
