import fs from 'fs'

export function readContentsOfFile(filePath) {
  // Use fs.readFile to read the contents of the file
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Output the contents of the file
    console.log(`Contents of ${filePath}:\n${data}`);
  });
}

// // Example usage
// const filePath = './static/some.txt';


// export readContentsOfFile(filePath);

