import Buffer from './buffer';

function typedBuffer(binString, buffType, type) {
  // BuffType is either 'binary' or 'base64'
  var buff = new Buffer(binString, buffType);
  buff.type = type; // Non-standard, but used for consistency with the browser
  return buff;
}

export default typedBuffer;
