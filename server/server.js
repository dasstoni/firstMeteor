Meteor.publish("snippets",function(){
  return Snippets.find({});
})
