describe("converter", function(){
  it("Take the binary number 10 and return the decimal 2", function(){
    expect(converter("10", 2)).to.equal(2);
  });

  it("Take the binary number 1000 and return the decimal 8", function(){
    expect(converter("1000", 2)).to.equal(8);
  });

  it("Take the binary number 10010110 and return the decimal 150", function(){
    expect(converter("10010110", 2)).to.equal(150);
  });

  it("Take the ternary number 211 and return the decimal 22", function(){
    expect(converter("211", 3)).to.equal(22);
  });

  it("Take the hexdecimal number a0 and return the decimal 160", function(){
    expect(converter("a0", 16)).to.equal(160);
  });
});
