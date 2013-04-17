
//-------------------------------------------------------
// Cordova App Object Literal

app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

        // This is an event that fires when a Cordova application is retrieved from the background.
        document.addEventListener("resume", function() {
            // http://docs.meteor.com/#meteor_reconnect
            // Force an immediate reconnection attempt if the client is not connected to the server.
            // This method does nothing if the client is already connected.
            Meteor.reconnect();
            Meteor.resume();
        });
        // when an app goes into the background
        document.addEventListener("Pause", function() {
            Cookie.set('LastPage', Meteor.Router.page());
        });
        // when an app drops 'offline'
        document.addEventListener("offline", function() {
            if (Meteor.Router.page() != 'offline' && Meteor.Router.page() != 'loading') {
                Cookie.set('LastPage', Meteor.Router.page());
                Meteor.Router.to('/offline');
            }
        });
        // when an app comes 'online'
        document.addEventListener("online", function() {
            Meteor.resume();
        });
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


//-------------------------------------------------------
// METEOR


// resume functionality, common (used in offline.js as well)
Meteor.resume = function() {
    if (Meteor.status().status != 'connected') {
        return false;
    }
    if (Meteor.Router.page() != 'offline' && Meteor.Router.page() != 'loading') {
        return true;
    }
    var LastPage = Cookie.get('LastPage');
    if (_.isString(LastPage) && LastPage.length && LastPage != 'loading') {
        console.log('resumed to: (LastPage)', '/' + LastPage);
        Meteor.Router.to('/' + LastPage);
        return true;
    }
    Meteor.Router.to('/');
    return true;
};