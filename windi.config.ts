import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';

export default defineConfig({
  darkMode: 'class',
  plugins: [formsPlugin],
  theme: {
    extend: {},
  },
});
