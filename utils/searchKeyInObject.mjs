export function searchAndModifyKey(obj, searchKey, newValue) {

  // Iterate through each key in the object
  for (const key in obj) {
    // Check if the key matches the search key
    if (key === searchKey) {
      // Modify the value of the matching key

      obj[key] = newValue;
      console.log(
        `Key '${searchKey}' found and modified with new value: ${newValue}`
      );
      return; // Break out of the loop once the key is found and modified
    }

    // If the current value is an object, recursively search within it
    if (typeof obj[key] === "object") {
      searchAndModifyKey(obj[key], searchKey, newValue);
    }
  }

  // If the key is not found

  return obj;
}
