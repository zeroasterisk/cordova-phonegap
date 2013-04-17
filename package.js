Package.describe({
  summary: "Adds support for mobile hardware via Cordova Phonegap."
});

Package.on_use(function (api) {
    api.add_files('cordova.css', 'client');
    api.add_files('app.initialization.js', 'client');
    api.add_files('cordova-2.6.0.js', 'client');
});
