describe("Mail", function() {

  
  it("should properly behave when there are no rules", function() { 
    
      var rules = [];
      var msgs = ["news@spam.com", "carlo@gmail.com", "jessy@compratutto.it", "trentose2@googlegroups.com"];    
      
      MailModel.load(rules, msgs);
      var output = MailModel.filter();
      expect(output.length).toBe(msgs.length);
  });  
  
  it("should properly behave when there is no matching rule", function() { 
    
      var rules = ["subito.it"];
      var msgs = ["news@spam.com", "carlo@gmail.com", "jessy@compratutto.it", "trentose2@googlegroups.com"];    
      
      MailModel.load(rules, msgs);
      var output = MailModel.filter();
      expect(output.length).toBe(msgs.length);
  });    
  
  
  it("should properly filter mail addresses with single rule", function() { 
    
      var rules = ["spam.com"];
      var msgs = ["news@spam.com", "carlo@gmail.com", "jessy@compratutto.it", "trentose2@googlegroups.com"];    
      
      MailModel.load(rules, msgs);
      var output = MailModel.filter();
      expect(output.length).toBe(msgs.length - 1);
  });  
  
  it("should properly filter mail addresses with multiple rules", function() { 
    
      var rules = ["spam.com", "compratutto.it"];
      var msgs = ["news@spam.com", "carlo@gmail.com", "jessy@compratutto.it", "trentose2@googlegroups.com"];    
      
      MailModel.load(rules, msgs);
      var output = MailModel.filter();
      expect(output.length).toBe(msgs.length - 2);
  });  
  
  
  
  
 
});
