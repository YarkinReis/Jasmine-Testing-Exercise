describe("Payments test", function(){
    beforeEach(function(){
    billAmtInput.value = 50;
    tipAmtInput.value = 10
    })

    it('should add a new payment', function () {
        submitPaymentInfo();
    
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('50');
        expect(allPayments['payment1'].tipAmt).toEqual('10');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
      });


       it('should not add a new payment on submitPaymentInfo() with empty input', function () {
        billAmtInput.value = '';
        submitPaymentInfo();
     console.log(Object.keys(allPayments).length);
        expect(Object.keys(allPayments).length).toEqual(0);
      });

      it('should create a new payment on createCurPayment()', function () {
        let expectedPayment = {
          billAmt: '50',
          tipAmt: '10',
          tipPercent: 20,
        }
    
        expect(createCurPayment()).toEqual(expectedPayment);
      });
})