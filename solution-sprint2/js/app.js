/* your code should go here */

var Mail = {
   init : function(){
     this.rules = rules;
     this.messages = msgs;
   },
  
   getMessages : function (){
     return this.messages;
   },
  
   /**
    * Given an address, it filters out the ones that match with
    * the given rules
    */
    filter : function(){
      var _clean = [];
      
      for (var i=0; i< this.messages.length; i++){
        if (! this.matchRule(this.messages[i])) {
          _clean.push(this.messages[i]);
        }
      }
      
      return _clean;
    },
  
    matchRule : function (message) {
      for (var i=0; i< this.rules.length; i++){          
        if (this.rules[i].from && message.from.indexOf("@" + this.rules[i].from) > 0){
          return true;
        } else if (this.rules[i].subject && message.subject.indexOf(this.rules[i].subject) >= 0){
          return true;
        }
      }
      return false;
    }
};


var MailController = {
  init : function(){
    Mail.init();
    MailView.init();
  },
  getMessages : function(){
    return Mail.getMessages();
  },
  
  filter : function(){
    return Mail.filter();
  }
  
};

var MailView = {
  init : function(){
    var self = this;
    
    var msg = MailController.getMessages();
    this.display(msg);
    
    $(".btn-filter").click(function(){
      var results = MailController.filter();
      self.display(results);
    });
    
  },  
  
  display : function(messages){
    $(".result").empty();
    for (var i=0; i< messages.length; i++){
      $(".result").append("<li>"+ messages[i].from + "</li>");
    }        
  }
}

$(document).ready(function(){
  MailController.init();
});