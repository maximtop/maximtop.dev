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

const hideUpgradeButtonOg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0f766e"/>
  <text x="72" y="72" font-family="Helvetica, Arial, sans-serif" font-size="20" letter-spacing="5" fill="#ccfbf1">MAXIMTOP.DEV</text>
  <rect x="72" y="132" width="132" height="132" rx="30" fill="#12837a"/>
  <rect x="100" y="186" width="76" height="24" rx="12" fill="#ffffff"/>
  <line x1="108" y1="232" x2="168" y2="164" stroke="#12837a" stroke-width="16" stroke-linecap="round"/>
  <line x1="108" y1="232" x2="168" y2="164" stroke="#ffffff" stroke-width="7" stroke-linecap="round"/>
  <text x="250" y="185" font-family="Helvetica, Arial, sans-serif" font-size="66" font-weight="700" fill="#ffffff">Hide Upgrade Button</text>
  <text x="252" y="238" font-family="Helvetica, Arial, sans-serif" font-size="31" fill="#ccfbf1">for Gmail, Drive &amp; Docs</text>
  <rect x="250" y="316" width="870" height="112" rx="24" fill="#ffffff"/>
  <rect x="286" y="350" width="42" height="42" rx="10" fill="#e5e7eb"/>
  <rect x="354" y="350" width="330" height="42" rx="21" fill="#eef1f5"/>
  <circle cx="1014" cy="372" r="20" fill="none" stroke="#6b7280" stroke-width="7"/>
  <circle cx="1072" cy="372" r="20" fill="#cbd5e1"/>
  <text x="250" y="514" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#ffffff">No upsell in your header.</text>
  <text x="250" y="558" font-family="Helvetica, Arial, sans-serif" font-size="22" fill="#ccfbf1">Free · open source · no tracking</text>
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

await sharp(Buffer.from(hideUpgradeButtonOg), { density: 144 })
  .resize(1200, 630)
  .png()
  .toFile('public/extensions/hide-upgrade-button/og.png');

await sharp(Buffer.from(favicon), { density: 300 })
  .resize(180, 180)
  .png()
  .toFile('public/apple-touch-icon.png');

await sharp(Buffer.from(favicon), { density: 300 })
  .resize(32, 32)
  .png()
  .toFile('public/favicon-32.png');

console.log('done');
