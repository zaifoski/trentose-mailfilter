/* your code should go here */


// You can modify this object, add functions that you need
var MailModel = {
  /**
   * Initialises the model with the "database" of filter rules
   * and messages. This function is already implemented.
   */
   init : function(){
     this.rules = rules;
     this.messages = msgs;
   }, 
  
   /**
    * Filters out messages in the "database" that match the spam rules.
    * @return an array of messages, excluding those that match the filter rules.
    */
    filter : function(){
        var toReturn = [];
        for(var i=0; i<this.messages.length; i++){
            var el = this.messages[i];
            var found = false;
            for(var j = 0; j < this.rules.length; j++){
                if(el.search(this.rules[j])>=0){
                    found = true;
                }
            }
            if(!found){
                toReturn.push(el);
            }
        }
        return toReturn;
    }

  
};

// Example of usage:
// MailModel.init()
// MailModel.filter() 
//  -> ["carlo@gmail.com", "trentose2@googlegroups.com"]


// We suggest to use js patters. 
// you can add here your views and controllers if you decide to do so.
var MailOctopus = {
    init: function(){
        this.messages = msgs;
        MailModel.init();
        for(var i = 0; i<this.messages.length; i++){
            MailView.display(this.messages[i]);
        }
        MailView.listen();
    },
    filter: function(){
        var filtered = MailModel.filter();
        for(var i = 0; i < filtered.length; i++){
            MailView.display(filtered[i]);
        }
    }
};
var MailView = {
    tmpl : "<li>ADDRESS</li> ",
    display: function(addr){
        var newItem = this.tmpl.replace("ADDRESS",addr);
        $(".result").append(newItem);
    },
    listen: function(){
        $(".btn-filter").click(function(){
            $(".result").html("");  
            MailOctopus.filter();    
        });
    }
};

$(document).ready(function(){
    MailOctopus.init();
});