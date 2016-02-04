function readAsBlobOrBuffer(storedObject, type) {
  // In Node, we've stored a buffer
  storedObject.type = type; // Non-standard, but used for consistency
  return storedObject;
}

export default readAsBlobOrBuffer;