import { readContentsOfFile } from "./utils/readFile.mjs";
// Read the file path from command line arguments
const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("Usage: node script.js <file_path>");
} else {
  const filePath = args[0];
  console.log('filePath',filePath)
  readContentsOfFile(filePath);
}
