import Buffer from '../binary/buffer';

function createBlobOrBufferFromParts(parts, type) {
  return Buffer.concat(parts.map(function (part) {
    return new Buffer(part, 'binary');
  }));
}

export default createBlobOrBufferFromParts;
