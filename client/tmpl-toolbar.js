Template.toolbar.events({
  'click #btnAdd' : function(e){
    var txtNode = $('#txtAdd');
    if (!txtNode || !txtNode.val()) return;
    Snippets.insert({text:txtNode.val()});
    textNode.val('');
  },
  'keypress #txtAdd' : function(e){
    if(e.keyCode!=13) return;
    addSnippet();
  }
});

function addSnippet(){
var txtNode = $('#txtAdd');
if (!txtNode || !txtNode.val()) return;
Snippets.insert({
  owner:Meteor.userId(),
  text:txtNode.val()});
textNode.val('');
}
