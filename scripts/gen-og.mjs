import sharp from 'sharp';

const og = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#faf8f4"/>
  <text x="96" y="120" font-family="Helvetica, Arial, sans-serif" font-size="24" letter-spacing="6" fill="#6f6a5d">MAXIMTOP.DEV</text>
  <text x="90" y="330" font-family="Georgia, serif" font-size="110" font-weight="500" fill="#1c1b18">Maxim Topciu</text>
  <text x="94" y="410" font-family="Georgia, serif" font-style="italic" font-size="46" fill="#0d7a5f">I build browser extensions</text>
  <text x="96" y="540" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#6f6a5d">Team lead @ AdGuard &#183; 30M+ users &#183; Chrome Web Store</text>
  <rect x="960" y="84" width="120" height="56" rx="28" fill="#0d7a5f"/>
  <circle cx="1052" cy="112" r="22" fill="#ffffff"/>
</svg>`;

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#0d7a5f"/>
  <rect x="10" y="22" width="44" height="20" rx="10" fill="#ffffff" opacity="0.3"/>
  <circle cx="43" cy="32" r="13" fill="#ffffff"/>
</svg>`;

await sharp(Buffer.from(og), { density: 144 })
  .resize(1200, 630)
  .png()
  .toFile('public/og.png');

await sharp(Buffer.from(favicon), { density: 300 })
  .resize(180, 180)
  .png()
  .toFile('public/apple-touch-icon.png');

await sharp(Buffer.from(favicon), { density: 300 })
  .resize(32, 32)
  .png()
  .toFile('public/favicon-32.png');

console.log('done');
