
    var addImportToHead = function (source) {
    var importElement = document.createElement("script");
    importElement.src = source;
    document.head.appendChild(importElement);
  };
  var addImportToBody = function (source) {
    var importElement = document.createElement("script");
    importElement.src = source;
    importElement.type = "module";
    document.body.appendChild(importElement);
  };
  var addImportToBodyNoModule = function (source) {
    var importElement = document.createElement("script");
    importElement.src = source;
    importElement.noModule = true;
    document.body.appendChild(importElement);
  };
  var addStyleToHead = function (source) {
    var importElement = document.createElement("link");
    importElement.href = source;
    importElement.rel = "stylesheet";
    document.head.appendChild(importElement);
  };
 
  //this is a polyfill for the navigator.sendbeacon method
addImportToHead("https://unpkg.com/navigator.sendbeacon");

addImportToHead(
  "https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-loader.js"
);
addImportToHead(
  "https://unpkg.com/intersection-observer@0.5.1/intersection-observer.js"
);
addImportToHead(
  "https://unpkg.com/resize-observer-polyfill@1.5.0/dist/ResizeObserver.js"
);
addImportToHead(
  "https://unpkg.com/fullscreen-polyfill@1.0.2/dist/fullscreen.polyfill.js"
);
addImportToHead("https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js");
addImportToBody("https://unpkg.com/@google/model-viewer/dist/model-viewer.js");
addImportToBodyNoModule(
  "https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
);
addStyleToHead("https://sharpar-io.web.app/style.css");


    //Initial Analytics setup
    //enable analytics? This variable can be used to disable all analytics gathering globally (for budget reasons)
    var enableAnalytics = false;
    console.log('analytics enabled? = ',enableAnalytics);
    //the "Allow" variables ensure that event listeners dont fire more than once
    var loadAllow = true;
    var camChangeAllow = true;
    var arNotAvailableAllow = true;
    var arSessionStartAllow = true;
    var arObjectPlacedAllow = true;

    //initial script load analytics
    var date = new Date();
    var timestamp = date.getTime();
    //free service to get basic ip address
    var ip = 'notfound';
    var country = 'notfound';

    //make an http request to get country and ip using JSONP
    function setIPandCountry(obj){
      ip= obj.ip;
      country = obj.country;
    }
    function clickButton() {
      var s = document.createElement("script");
      s.src = "https://ipinfo.io?callback=setIPandCountry&token=fdd8ce5d1ef7ee";
      document.body.appendChild(s);
    }
  
    function getBrowser() {
      //BROWSER DETECTION CODE TAKEN FROM https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
      //Not 100% reliable, paid services are required to get reliable browser detection
      //!needs to be updated occassionally
      // Opera 8.0+
      var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
      if (isOpera) return 'Opera';
      // Firefox 1.0+
      var isFirefox = typeof InstallTrigger !== 'undefined';
      if (isFirefox) return 'Firefox';
      // Safari 3.0+ "[object HTMLElementConstructor]" 
      var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
      if (isSafari) return 'Safari';
      // Internet Explorer 6-11
      var isIE = /*@cc_on!@*/false || !!document.documentMode;
      if (isIE) return 'InternetExplorer';
      // Edge 20+
      var isEdge = !isIE && !!window.StyleMedia;
      if (isEdge) return 'Edge';
      // Chrome 1 - 79
      var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
      if (isChrome) return 'Chrome';
      // Edge (based on chromium) detection
      var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") !== -1);
      if (isEdgeChromium) return 'EdgeChromium';
      // Blink engine detection
      var isBlink = (isChrome || isOpera) && !!window.CSS;
      if (isBlink) return 'Blink';
      return 'browserNotFound';
    }
    var browser = getBrowser();
    var modelID = document.currentScript.getAttribute("model-id");
    var eventType = 'script-loaded';
    var eventSpecifics = 'model not loaded yet';
    
    // const ourAnalyticsEndpoind = "https://us-central1-sharpar-io.cloudfunctions.net/receiveEvents";
    //This will send the analytics data for this session to our database when the user leaves/reloads the page
    const ourAnalyticsEndpoind = "http://localhost:4003/sharpar-io/us-central1/receiveEvents";

    function sendAnalytics() {
      var analyticsData = {
        timestamp: timestamp,
        domain: location.hostname,
        page: location.pathname,
        ip: ip,
        country: country,
        device: 'notAvailable', //have to pay for services that detect devices
        browser: browser,
        modelID: modelID,
        eventType: eventType,
        eventSpecifics: eventSpecifics,
      };
      console.log(JSON.stringify(analyticsData));
      navigator.sendBeacon(ourAnalyticsEndpoind, JSON.stringify(analyticsData));
    }
    if (enableAnalytics === true){
      window.addEventListener("unload", sendAnalytics, false);
    }

// accepts a modelID as parameter and returns the corresponding model-viewer attributes
// keeping it all in vanilla javascript in a single file, not loading from a database or a separate file for performance reasons
var modelRouter = function (modelID) {
  //model-viewer attributes, these are the defaults
  //can be overridden per model
  //TO DISABLE THE ATTRIBUTE SET IT TO null
  
 var id = 'model-viewer';
 var src = '';
 var iosSrc = '';
 var alt = 'A 3D augmented reality model by SharpAR';
 var poster = '';
 var shadowIntensity = '1';
 var cameraControls = '';
 var interactionPrompt = 'auto';
 var autoRotate = '';
 var ar = '';
 var arModes = 'webxr scene-viewer quick-look';
 var arScale = 'auto'

  switch (modelID) {
    
        case '-MI4oo1r4W3JLAcVTC9e':
            
 src= 'https://firebasestorage.googleapis.com/v0/b/sharpar-io.appspot.com/o/Earring.glb?alt=media&token=2ed635b1-0694-46a4-b719-1b90408b15c8';
 iosSrc= 'https://firebasestorage.googleapis.com/v0/b/sharpar-io.appspot.com/o/Earring.usdz?alt=media&token=2ba9fe6c-f847-479a-835c-f40ff3b55540';
 alt= 'A 3D model of a golden earing'
            break;
    
        case '-MI4qeOCl8AYzUlFLxTD':
            
 src= 'https://firebasestorage.googleapis.com/v0/b/sharpar-io.appspot.com/o/authentique_sharpar_model_0101.glb?alt=media&token=36e1a9e8-3030-4221-bb21-c23fc33e2b5b';
 iosSrc= 'https://firebasestorage.googleapis.com/v0/b/sharpar-io.appspot.com/o/authentique_sharpar_model_0101.usdz?alt=media&token=ea3efc9f-a5f1-4041-9ee3-bac6a5ce2e3c';
 alt= 'A 3D model of a blue flat thing'
            break;
    

    default:
      console.log(
        "SharpAR Error: could not find a model matching the given modelID ",
        modelID,
        ". Please contact SharpAR for assistance."
      );
      return null;
  }
  return {//the first element in each array is the actual attribute name required by model-viewer
    id: ['id',id],
    src: ['src',src],
    iosSrc: ['ios-src',iosSrc],
    poster: ['poster',poster],
    alt: ['alt',alt],
    shadowIntensity: ['shadow-intensity',shadowIntensity],
    cameraControls: ['camera-controls',cameraControls],
    interactionPrompt: ['interaction-prompt',interactionPrompt],
    autoRotate: ['auto-rotate',autoRotate],
    ar: ['ar',ar],
    arModes: ['ar-modes',arModes],
    arScale: ['ar-scale',arScale],
  };
};

var createModel = function (element, modelID) {
    var attributes = modelRouter(modelID);
    var importElement = document.createElement("model-viewer");
    Object.keys(attributes).forEach(attribute =>{
      importElement.setAttribute(attributes[attribute][0],attributes[attribute][1]);
    });
    element.replaceWith(importElement);
    var buttonElement = document.createElement("button");
    buttonElement.setAttribute("class", "sharpar-button");
    buttonElement.setAttribute("slot", "ar-button");
    var buttonText = document.createTextNode("View in Augmented Reality");
    buttonElement.appendChild(buttonText);
    importElement.appendChild(buttonElement);
  };

createModel(
    document.currentScript,
    modelID
  );

//ANALYTICS EVENT LISTENERS:
//! only fire these once per script
  document.querySelector("#model-viewer").addEventListener('ar-status', (event) => {
    console.log(event.detail.status);
      if(event.detail.status === 'failed' && arNotAvailableAllow === true){
        //send a message that no ar was available
        
        eventSpecifics = 'ar not available for this person';
        console.log('no ar available');
        arNotAvailableAllow = false;
    }
    else if (event.detail.status ==='session-started' && arSessionStartAllow===true){
        //user has been prompted to move their phone to place the object
        eventType = 'ar-session-started';
        eventSpecifics = 'ar enabled and user has been prompted to place the object';
        console.log('arsession start');
        arSessionStartAllow = false;
    }
    else if (event.detail.status ==='object-placed' && arObjectPlacedAllow ===true){
        //ar object has been placed successfully
        eventType = 'ar-object-placed';
        eventSpecifics = 'ar is working and the user has placed the object in ar';
        console.log('ar object placed');
        arObjectPlacedAllow = false;
    }
  });

  document.querySelector("#model-viewer").addEventListener('load', (event) => {
    //send message, the model has loaded
    if (loadAllow === true){
      eventType = 'model-loaded';
      console.log('model loaded');
      loadAllow = false;
    }
});
document.querySelector("#model-viewer").addEventListener('camera-change', (event) => {
  if (event.detail.source === 'user-interaction' && camChangeAllow === true){
    //!only fire once per script
    //send message the user has moved the model around
    eventType = 'camera-change';
    console.log('camera changed');
    camChangeAllow = false;
  }
});
