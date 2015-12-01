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
      return [];
    }

  
};

// Example of usage:
// MailModel.init()
// MailModel.filter() 
//  -> ["carlo@gmail.com", "trentose2@googlegroups.com"]


// We suggest to use js patters. 
// you can add here your views and controllers if you decide to do so.



$(document).ready(function(){

});