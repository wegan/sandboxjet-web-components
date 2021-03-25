//wegan Add slot for crud toolbar
// backup first
// "use strict";
// define([
//   "knockout",
//   "ojL10n!./resources/nls/my-employee-form-strings",
//   "ojs/ojcontext",
//   "ojs/ojknockout",
//   "ojs/ojinputtext",
//   "ojs/ojformlayout",
// ], function (ko, componentStrings, Context) {
//   function ExampleComponentModel(context) {
//     var self = this;

// wegantest
"use strict";
define([
  "knockout",
  "ojL10n!./resources/nls/my-employee-form-strings",
  "ojs/ojcontext",
  "ojs/ojknockout",
  "ojs/ojinputtext",
  "ojs/ojformlayout",
  "ojs/ojbutton",
], function (ko, componentStrings, Context) {
  function ExampleComponentModel(context) {
    var self = this;

    //At the start of your viewModel constructor
    var busyContext = Context.getContext(context.element).getBusyContext();
    var options = { description: "Web Component Startup - Waiting for data" };
    self.busyResolve = busyContext.addBusyState(options);

    self.composite = context.element;

    //Example observable
    self.messageText = ko.observable("my-employee-form (composite component)");
    self.properties = context.properties;
    self.res = componentStrings["my-employee-form"];
    // Example for parsing context properties
    // if (context.properties.name) {
    //     parse the context properties here
    // }

    //Once all startup and async activities have finished, relocate if there are any async activities
    self.busyResolve();
  }

  //Lifecycle methods - uncomment and implement if necessary
  //ExampleComponentModel.prototype.activated = function(context){
  //};

  //ExampleComponentModel.prototype.connected = function(context){
  //};

  //ExampleComponentModel.prototype.bindingsApplied = function(context){
  //};

  //ExampleComponentModel.prototype.disconnected = function(context){
  //};

  //ExampleComponentModel.prototype.propertyChanged = function(context){
  //};

  return ExampleComponentModel;
});
