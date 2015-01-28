requirejs.config({
  paths: {
    "jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
    "bootstrap": "//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min",
    "custom": "lib/custom",
    "ie10-viewport": "js/ie10-viewport-bug-workaround.js"
  },
  shim: {
    "bootstrap": {
      deps: ["jquery"]
    },
    "custom": {
      deps: ["jquery", "bootstrap"]
    },
    "ie10-viewport": {
      deps: ["jquery"]
    },
  }
});

require(["jquery", "bootstrap", "custom", "ie10-viewport"], function ($) {
  // Loads all of the scripts and their modules
});

// Additional plugin settings go here — just replace "scriptName" and "functionName"
// require(["scriptName"], function (functionName) {
  // Optional plugin settings go here
// });
