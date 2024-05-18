// build/index.js
import fs from 'fs-extra';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// 現在のディレクトリ名を取得するための __dirname の代替
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Rename: _nuxt to static
fs.moveSync(resolve(__dirname, '../dist/_nuxt'), resolve(__dirname, '../dist/static'));

fs.writeFileSync(resolve(__dirname, '../dist/.nojekyll'), '');
