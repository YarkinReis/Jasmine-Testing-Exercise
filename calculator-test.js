
it('should calculate the monthly rate correctly', function () {
    let values = {amount : 5000,years : 5, rate:3.4 };
    expect (calculateMonthlyPayment(values)).toEqual("90.73");
  });
  
  
  it("should return a result with 2 decimal places", function() {
    // ..
    let values = {amount : 5000,years : 5, rate:3.4 };
    expect (calculateMonthlyPayment(values)).toEqual("90.73");
  });
  
  /// etc
  