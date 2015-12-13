describe("Mail", function() {
    
  it("should properly behave when there are no rules", function(){
      var rules = [];
      MailModel.load(rules);
      var output = MailModel.filter();
      expect(output.length).toBe(msgs.length);
  });
    
  it("should properly behave when there is no matching rule", function(){
      var rules = ["hotmail.it"];
      MailModel.load(rules);
      var output = MailModel.filter();
      expect(output.length).toBe(msgs.length);
  });
    
  it("should filter all the mails matching some rule", function(){
      var rules = ["spam.com"];
      MailModel.load(rules);
      var output = MailModel.filter();
      expect(output.length).toBe(msgs.length-1);
  });
    
  it("should filter all the mails matching some rules", function(){
      var rules = ["spam.com", "compratutto.it"];
      MailModel.load(rules);
      var output = MailModel.filter();
      expect(output.length).toBe(msgs.length-2);
  });
 
});
