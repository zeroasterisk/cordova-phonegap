cordova-phonegap
================

Meteorite package that provides support for mobile hardware support via Cordova Phonegap.  
http://phonegap.com/


------------------------
### Installation

First, install the audio-click package from the command line, like so:

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

------------------------
### iOS Build

````
./create ~/Documents/Cordova/MeteorIntegration org.pentasyllabic.MeteorIntegration MeteorIntegration
./update_cordova_subproject ~/Documents/Cordova/MeteorIntegration/MeteorIntegration.xcodeproj

````
