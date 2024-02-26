import { keyExtractor } from "./utils/keyExtractor.mjs";
import { readAndModifyJsonFile } from "./jsonModify.mjs";
const { sourceJsonLocation, targetJsonValue, targetJsonKey ,targetJsonLocation} = keyExtractor();
console.log({ sourceJsonLocation, targetJsonValue, targetJsonKey,targetJsonLocation } )
readAndModifyJsonFile({
  sourceJsonLocation,
  targetJsonLocation,
  targetJsonValue,
  targetJsonKey,
});
//node jsonUtil.mjs --sourceJsonLocation=./static/student.json --targetJsonLocation=./static/student.json --targetJsonValue=street11 --targetJsonKey=street
