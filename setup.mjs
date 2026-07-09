import fs from 'fs';
import path from 'path';

const sourceFile = 'C:\\Users\\sheba\\.gemini\\antigravity-ide\\brain\\5dc6e2ea-c1de-4a10-bb17-9bd9da8ed935\\.system_generated\\steps\\18\\output.txt';
let content = fs.readFileSync(sourceFile, 'utf-8');

// Truncate everything after the last '}' (this removes the MCP system messages)
const lastBraceIndex = content.lastIndexOf('}');
if (lastBraceIndex !== -1) {
  content = content.substring(0, lastBraceIndex + 1) + '\n';
}

const regex = /http:\/\/localhost:3845\/assets\/[^"]+\.(png|svg|jpg|jpeg)/g;
const urls = [...new Set(content.match(regex) || [])];

const publicAssetsDir = './public/assets';
if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

async function run() {
  for (const url of urls) {
    const filename = url.split('/').pop();
    const dest = path.join(publicAssetsDir, filename);
    if (!fs.existsSync(dest)) {
      console.log(`Downloading ${url}...`);
      try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(dest, buffer);
      } catch (e) {
        console.error(`Failed to download ${url}:`, e);
      }
    }
  }

  // Replace URLs with local paths
  content = content.replace(/http:\/\/localhost:3845\/assets\//g, '/assets/');
  
  const appContent = `import './index.css';\n\n${content}`;
  
  const finalContent = appContent.replace('export default function MacBookPro', 'export default function App');
  
  fs.writeFileSync('./src/App.tsx', finalContent);
  console.log('Setup complete!');
}

run();
