/* your code should go here */

var MailModel = {
   init : function(){
     this.rules = rules;
     this.messages = msgs;
   },
  
   // Since I'm allowed to modify this object, I added a function to facilitate the testing
   load : function(rules, msgs){
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
      var _skip; 
      
      for (var i=0; i< this.messages.length; i++){
        _skip = false;
        for (var j=0; j< this.rules.length; j++){          
          if (this.messages[i].indexOf("@" + this.rules[j]) > 0){
            _skip = true;
            break;
          }
        }
        if (!_skip) {
          _clean.push(this.messages[i]);
        }
      }
      
      return _clean;
    }
};


var MailController = {
  init : function(){
    MailModel.init();
    MailView.init();
  },
  getMessages : function(){
    return MailModel.getMessages();
  },
  
  filter : function(){
    return MailModel.filter();
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
      $(".result").append("<li>"+ messages[i]+ "</li>");
    }        
  }
}

$(document).ready(function(){
  MailController.init();
});