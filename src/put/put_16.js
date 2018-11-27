function put16 (value, buffer = null) {
  let newBuffer = Buffer.allocUnsafe(2)
  newBuffer.writeInt16LE(value, 0)

  if (buffer != null) {
    return Buffer.concat([buffer, newBuffer], buffer.length + newBuffer.length)
  } else {
    return newBuffer
  }
}

module.exports = put16
