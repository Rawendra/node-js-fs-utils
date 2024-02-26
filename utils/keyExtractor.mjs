function parseCommandLineArguments(argArray) {
  const resultObject = {};

  argArray.forEach((argString) => {
    const argParts = argString.split("=");

    if (argParts.length === 2) {
      const key = argParts[0].replace(/^--/, ""); // Remove leading '--'
      const value = argParts[1];
      resultObject[key] = value;
    } else {
      console.error("Invalid argument format:", argString);
    }
  });

  return resultObject;
}

// Define the command line options and arguments
export function keyExtractor() {
  const keyValueMap = parseCommandLineArguments(process.argv.slice(2));
  console.log(keyValueMap);

  return keyValueMap;
}

//keyExtractor();

// const inputArray = ['--readFileLocation=rawendr', '--anotherKey=anotherValue', '--yetAnother=123'];
// const resultObject = parseCommandLineArguments(inputArray);
