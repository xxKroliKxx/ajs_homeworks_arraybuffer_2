export default class ArrayBufferConverter {
  constructor() {
    this._buffer = new ArrayBuffer(0);
  }

  load(buffer) {
    this._buffer = buffer;
  }

  toString() {
    let result = '';
    const bufferView = new Uint16Array(this._buffer);
    for (let i = 0; i < bufferView.length; i += 1) {
      result += String.fromCharCode(bufferView[i]);
    }
    return result;
  }
}
