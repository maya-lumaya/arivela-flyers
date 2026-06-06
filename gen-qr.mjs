// Generate crisp vector QR codes (SVG) for https://arivela.co — print-safe.
import QRCode from 'qrcode';
import { writeFileSync, mkdirSync } from 'node:fs';

const url = 'https://arivela.co';
mkdirSync(new URL('./assets/', import.meta.url), { recursive: true });

const dark = await QRCode.toString(url, {
  type: 'svg', margin: 2, errorCorrectionLevel: 'M',
  color: { dark: '#1D1D21', light: '#00000000' }, // dark modules, transparent bg
});
writeFileSync(new URL('./assets/qr-arivela-dark.svg', import.meta.url), dark);

const light = await QRCode.toString(url, {
  type: 'svg', margin: 2, errorCorrectionLevel: 'M',
  color: { dark: '#FFFFFF', light: '#00000000' }, // white modules for dark backgrounds
});
writeFileSync(new URL('./assets/qr-arivela-light.svg', import.meta.url), light);

const orange = await QRCode.toString(url, {
  type: 'svg', margin: 2, errorCorrectionLevel: 'M',
  color: { dark: '#C8702A', light: '#00000000' }, // accent-tone option
});
writeFileSync(new URL('./assets/qr-arivela-orange.svg', import.meta.url), orange);

console.log('QR codes written -> assets/qr-arivela-{dark,light,orange}.svg');
