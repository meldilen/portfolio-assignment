import typescript from '@rollup/plugin-typescript';
export default {
    input: 'main.ts',
    output: { file: 'bundle.js' },
    plugins: [typescript()]
};