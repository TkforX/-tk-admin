import type { Linter } from 'eslint';
import { interopDefault } from '../utils';


export async function vue(): Promise<Linter.Config[]> {
    const [pluginVue, parserVue, parserTs] = await Promise.all([
        interopDefault(import('eslint-plugin-vue')),
        interopDefault(import('vue-eslint-parser')),
        interopDefault(import('@typescript-eslint/parser')),
    ] as const);

    return [
        {
            files: ['**/*.vue'],
            languageOptions: {
                globals: {
                    computed: 'readonly',
                    defineEmits: 'readonly',
                    defineExpose: 'readonly',
                    defineProps: 'readonly',
                    onMounted: 'readonly',
                    onUnmounted: 'readonly',
                    reactive: 'readonly',
                    ref: 'readonly',
                    shallowReactive: 'readonly',
                    shallowRef: 'readonly',
                    toRef: 'readonly',
                    toRefs: 'readonly',
                    watch: 'readonly',
                    watchEffect: 'readonly',
                },
                parser: parserVue,
                parserOptions: {
                    ecmaFeatures: {
                        jsx: true,
                    },
                    extraFileExtensions: ['.vue'],
                    parser: parserTs,
                    sourceType: 'module',
                },
            },
            plugins: {
                vue: pluginVue,
            },
            processor: pluginVue.processors['.vue'],
            rules: {
                ...pluginVue.configs.base.rules,
                ...pluginVue.configs['vue3-essential'].rules,
                ...pluginVue.configs['vue3-strongly-recommended'].rules,
                ...pluginVue.configs['vue3-recommended'].rules,

                // 'vue/attribute-hyphenation': [
                //     'error',
                //     'always',
                //     {
                //         ignore: [],
                //     },
                // ],
                'vue/attributes-order': 'off',

                // 'vue/block-order': [
                //     'error',
                //     {
                //         order: ['script', 'template', 'style'],
                //     },
                // ],
                // 强制组件名遵循 PascalCase 命名规范
                'vue/component-name-in-template-casing': ['error', 'PascalCase'],
                // 强制自定义事件使用 camelCase 命名
                'vue/component-options-name-casing': ['error', 'PascalCase'],
                'vue/custom-event-name-casing': ['error', 'camelCase'],

                // 'vue/define-macros-order': [
                //     'error',
                //     {
                //         order: [
                //             'defineOptions',
                //             'defineProps',
                //             'defineEmits',
                //             'defineSlots',
                //         ],
                //     },
                // ],


                // 'vue/dot-location': ['error', 'property'],
                'vue/dot-notation': ['error', { allowKeywords: true }],
                // /强制使用严格的相等比较
                'vue/eqeqeq': ['error', 'smart'],
                // 强制 HTML 标签的闭合括号新起一行
                // 'vue/html-closing-bracket-newline': 'error',
                'vue/html-indent': 'off',
                // 强制使用双引号（"）来包围 HTML 属性值
                'vue/html-quotes': ['error', 'double'],
                'vue/html-self-closing': [
                    'error',
                    {
                        html: {
                            component: 'always',
                            normal: 'never',
                            void: 'always',
                        },
                        math: 'always',
                        svg: 'always',
                    },
                ],
                'vue/max-attributes-per-line': 'off',
                'vue/multi-word-component-names': 'off',
                'vue/multiline-html-element-content-newline': 'error',
                'vue/no-empty-pattern': 'error',
                'vue/no-extra-parens': ['error', 'functions'],
                'vue/no-irregular-whitespace': 'error',
                'vue/no-loss-of-precision': 'error',
                'vue/no-reserved-component-names': 'off',
                'vue/no-restricted-syntax': [
                    'error',
                    'DebuggerStatement',
                    'LabeledStatement',
                    'WithStatement',
                ],
                'vue/no-restricted-v-bind': ['error', '/^v-/'],
                'vue/no-useless-v-bind': 'error',
                'vue/no-sparse-arrays': 'error',
                'vue/no-unused-refs': 'error',

                'vue/object-shorthand': [
                    'error',
                    'always',
                    {
                        avoidQuotes: true,
                        ignoreConstructors: false,
                    },
                ],
                // 'vue/one-component-per-file': 'error',
                //确保从标准的 Vue 包路径导入 API
                'vue/prefer-import-from-vue': 'error',
                //要求静态类和动态类分开定义 --警告
                'vue/prefer-separate-static-class': 'warn',
                //
                'vue/prefer-template': 'error',
                'vue/prop-name-casing': ['error', 'camelCase'],
                // 强制使用 props 选项声明所有 props
                'vue/require-default-prop': 'error',
                //要求显式声明 emits
                'vue/require-explicit-emits': 'error',
                'vue/require-prop-types': 'off',
                // 强制 script setup 中的所有变量都必须使用
                'vue/script-setup-uses-vars': 'error',
                // 单行html元素内容强制换行 警告
                'vue/singleline-html-element-content-newline': 'warn',
                'vue/space-infix-ops': 'error',
                // 控制不带操作数不加空格  控制带有操作数的运算符加空格
                'vue/space-unary-ops': ['error', { nonwords: false, words: true }],

                // 'vue/v-on-event-hyphenation': [
                //     'error',
                //     'always',
                //     {
                //         autofix: true,
                //         ignore: [],
                //     },
                // ],
            },
        }
    ]
}