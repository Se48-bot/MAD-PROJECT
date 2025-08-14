// Generate PNG icons from the SVG logo using sharp
// Run: npm run icons:gen
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const svgPath = path.resolve(__dirname, '../New folder (10)/icons/agrohub-icon.svg');
const outDir = path.resolve(__dirname, '../New folder (10)/icons');

const sizes = [192, 256, 384, 512];

(async () => {
	if (!fs.existsSync(svgPath)) {
		console.error('SVG not found at', svgPath);
		process.exit(1);
	}
	if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
	for (const size of sizes) {
		const outFile = path.join(outDir, `agrohub-icon-${size}.png`);
		await sharp(svgPath).resize(size, size).png().toFile(outFile);
		console.log('Generated', outFile);
	}
	// Ensure 512x512 exists for PWA/Apple touch icon
	console.log('All icons generated.');
})();