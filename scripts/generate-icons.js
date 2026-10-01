const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

// CRC table for PNG chunks
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) {
      c = 0xedb88320 ^ (c >>> 1);
    } else {
      c = c >>> 1;
    }
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function createChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, "ascii");
  data.copy(chunk, 8);
  const typeAndData = Buffer.alloc(4 + len);
  typeAndData.write(type, 0, 4, "ascii");
  data.copy(typeAndData, 4);
  const crc = crc32(typeAndData);
  chunk.writeUInt32BE(crc, 8 + len);
  return chunk;
}

function generateIconPNG(size) {
  const width = size;
  const height = size;

  // Raw image buffer with filter byte per row
  // 1 byte filter (0) + 4 bytes RGBA per pixel
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(rowSize * height);

  // Background color #1e3a8a -> rgb(30, 58, 138)
  const bgR = 30;
  const bgG = 58;
  const bgB = 138;
  const bgA = 255;

  // Star / Diamond color #ffffff with highlight #93c5fd
  const starR = 255;
  const starG = 255;
  const starB = 255;

  const center = size / 2;
  const radius = size * 0.38;
  const cornerRadius = size * 0.22;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter: None

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;

      // Check rounded rect background bounds
      const dx = Math.abs(x - center);
      const dy = Math.abs(y - center);
      const halfW = size * 0.46;
      const cornerD = cornerRadius;
      let inCard = false;

      if (dx <= halfW - cornerD && dy <= halfW) {
        inCard = true;
      } else if (dy <= halfW - cornerD && dx <= halfW) {
        inCard = true;
      } else if (dx <= halfW && dy <= halfW) {
        const cornerDist = Math.hypot(dx - (halfW - cornerD), dy - (halfW - cornerD));
        if (cornerDist <= cornerD) {
          inCard = true;
        }
      }

      if (!inCard) {
        // Transparent outside rounded corner
        rawData[pxOffset] = 0;
        rawData[pxOffset + 1] = 0;
        rawData[pxOffset + 2] = 0;
        rawData[pxOffset + 3] = 0;
        continue;
      }

      // Default background navy
      let r = bgR;
      let g = bgG;
      let b = bgB;
      let a = bgA;

      // Central compass diamond: |x - center| + |y - center| <= radius
      const starDist = dx + dy;
      if (starDist <= radius) {
        // Inside central compass star
        r = starR;
        g = starG;
        b = starB;
      }

      // Center blue node
      const centerDist = Math.hypot(x - center, y - center);
      if (centerDist <= size * 0.08) {
        r = 59;
        g = 130;
        b = 246; // blue-500
      }

      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  // PNG Signature
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // Bit depth: 8
  ihdrData[9] = 6; // Color type: 6 (RGBA)
  ihdrData[10] = 0; // Compression
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // Interlace
  const ihdrChunk = createChunk("IHDR", ihdrData);

  // IDAT chunk
  const compressed = zlib.deflateSync(rawData, { level: 9 });
  const idatChunk = createChunk("IDAT", compressed);

  // IEND chunk
  const iendChunk = createChunk("IEND", Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const iconsDir = path.join(__dirname, "..", "public", "icons");
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

fs.writeFileSync(path.join(iconsDir, "icon-192.png"), generateIconPNG(192));
fs.writeFileSync(path.join(iconsDir, "icon-512.png"), generateIconPNG(512));

console.log("Successfully generated icon-192.png and icon-512.png");
