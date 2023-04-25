import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import envCompatible from 'vite-plugin-env-compatible';
import checker from 'vite-plugin-checker';
import million from 'million/compiler';

export default defineConfig(() => {
  return {
    clearScreen: false,
    plugins: [
      million.vite(),
      tsconfigPaths(),
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),

      svgrPlugin({
        svgrOptions: {
          icon: true,
          // ...svgr options (https://react-svgr.com/docs/options/)
        },
      }),
      checker({ typescript: true, overlay: false }),
      envCompatible(),
    ],
  };
});
