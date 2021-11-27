import getBuffer from '../js/getBuffer';
import ArrayBufferConverter from '../js/app';

test('test get stoned', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
