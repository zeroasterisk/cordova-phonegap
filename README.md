cordova-phonegap
================

Meteorite package that provides support for mobile hardware support via Cordova Phonegap.  
http://phonegap.com/


------------------------
### Meteorite Package Installation

First, install the cordova-phonegap package from the command line, like so:

````
mrt add cordova-phonegap
````

Alternatively, if you'd like to bypass Atmosphere, and install directly from GitHub, you could update your application's smart.json file, like so:

````
{
  "meteor": {
    "branch": "master"
  },
  "packages": {
    "cordova-phonegap": {
      "git": "https://github.com/awatson1978/cordova-phonegap.git"
    }
  }
}

````

This will add the cordova libraries and some initialization code.  You'll need to put the following in your main Meteor index.js file (or equivalent).

````
app.initialize(window);
````


To confirm that Cordova Phonegap connects to the device hardware, add this HTML snippet to your app somewhere:
````html
<div id="deviceready" class="blink">
  <p class="event listening">Connecting to Device</p>
  <p class="event received">Device is Ready</p>
</div>
````

------------------------
### iOS App Build

First, create a meteor project using the command line utilities found in /phonegap-master/lib/ios/bin:
````
./create ~/Documents/Cordova/MyApp org.pentasyllabic.MyApp MyApp
./update_cordova_subproject ~/Documents/Cordova/MyApp/MyApp.xcodeproj
````

Then, you're going to need to edit the CDVViewController.m file, and point the MeteorIntegration App towards your Meteor installation.  If you have a development and production environment, you may need to compile two separate apps, one for each environment.  (Best practice is to add different icons to each app, so you can tell them apart.)

MeteorIntegration > CordovaLib.xcodeproj > Classes > Cleaver > CDVViewController.m (line: 171 or so)
````
self.wwwFolderName = @"http://192.168.0.123:3000";
````

