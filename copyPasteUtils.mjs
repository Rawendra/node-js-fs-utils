import path from "path";
import FS from "fs";
import { keyExtractor } from "./utils/keyExtractor.mjs";
const fs = FS.promises;

const { sourcePath, destinationPath } = keyExtractor();

export async function copyFile({ sourcePath, destinationPath }) {
  // Resolve full paths for source and destination
  const sourceFile = path.resolve(sourcePath);
  const destinationFile = path.resolve(destinationPath);

  // Read the file from the source location
  try {
    const data = await fs.readFile(sourceFile);
    await fs.writeFile(destinationFile, data);
  } catch (err) {
    console.error("errpr: ", err.message);
  }
}

// Example usage
// const sourceFilePath = "/path/to/source/file.txt";
// const destinationFolderPath = "/path/to/destination/";

copyFile({ sourcePath, destinationPath });

//node copyPasteUtils.mjs --sourcePath=./static/student.json --destinationPath=./static/rose.json
