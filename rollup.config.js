import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/index.ts',
  output: [
    { dir: 'dist/cjs', format: 'cjs' },
    { dir: 'dist/esm', format: 'esm' },
  ],
  plugins: [typescript({ useTsconfigDeclarationDir: true })],
};
