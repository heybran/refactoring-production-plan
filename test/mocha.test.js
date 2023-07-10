// @ts-check
import { expect } from "chai";
import Province from "../province.js";
import sampleProvinceData from "../sampleProvinceData.js";

describe('province', () => {
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  })

  // const asia = new Province(sampleProvinceData()); // DON'T DO THIS

  it('shortfall', () => {
    expect(asia.shortfall).to.equal(5);
  })

  it('profit', () => {
    expect(asia.profit).to.equal(230);
  })
})
