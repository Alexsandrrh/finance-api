import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

import packageJson from './package.json' with { type: 'json' };

export default {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      plugins: [commonjs()],
    },
    { file: packageJson.module, format: 'esm', sourcemap: true },
  ],
  plugins: [typescript({ useTsconfigDeclarationDir: true })],
};
