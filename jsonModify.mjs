import FS from "fs";
import { searchAndModifyKey } from "./utils/searchKeyInObject.mjs";

const fs = FS.promises;

export async function readAndModifyJsonFile({
  sourceJsonLocation,
  targetJsonLocation,
  targetJsonKey,
  targetJsonValue,
}) {
  //target if not provided then it overrides the source location
  targetJsonLocation = targetJsonLocation || sourceJsonLocation;

  try {
    // Read the JSON file using promises
    const data = await fs.readFile(sourceJsonLocation, "utf8");

    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Modify the desired attribute
    const obj = searchAndModifyKey(jsonData, targetJsonKey, targetJsonValue);

 
    const _modifiedJsonData = JSON.stringify(obj, null, 2);
    await fs.writeFile(targetJsonLocation, _modifiedJsonData, "utf8");
  } catch (error) {
    console.error("error: ", error.message);
  }
}
