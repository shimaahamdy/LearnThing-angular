import { EGPToUSDPipe } from './egpto-usd.pipe';

describe('EGPToUSDPipe', () => {
  it('create an instance', () => {
    const pipe = new EGPToUSDPipe();
    expect(pipe).toBeTruthy();
  });
});
