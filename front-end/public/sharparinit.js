
//     var shouldContinue = true;
//   //detect the ip address, and if it is my ip address redirect to the new script
//   //free service to get basic ip address
//   var ip = 'notfound';
//   //make an http request to get country and ip using JSONP
//   function setIPandCountry(obj){
//     ip= obj.ip;
//   }
//   function clickButton() {
//     var s = document.createElement("script");
//     s.src = "https://ipinfo.io?callback=setIPandCountry&token=fdd8ce5d1ef7ee";
//     document.body.appendChild(s);
//   }
//   clickButton();
//   if (ip === '23.233.93.240') shouldContinue = false;
//   if (location.hostname=== 'localhost') shouldContinue = false;
//   if (!shouldContinue){
//     //this is my ip, redirect me to the correct script
//     var newScript = document.createElement('script');
//     newScript.src = "https://sharpar-io.web.app/model.js"
//     newScript.setAttribute('model-id',"-MIQG-c9kwK4uKT94KSQ");
//     document.currentScript.replaceWith(newScript);
//   }

// if (shouldContinue){
// var addImportToHead = function (source) {
//     var importElement = document.createElement("script");
//     importElement.src = source;
//     document.head.appendChild(importElement);
//   };
  
//   var addImportToBody = function (source) {
//     var importElement = document.createElement("script");
//     importElement.src = source;
//     importElement.type = "module";
//     document.body.appendChild(importElement);
//   };
  
//   var addImportToBodyNoModule = function (source) {
//     var importElement = document.createElement("script");
//     importElement.src = source;
//     importElement.noModule = true;
//     document.body.appendChild(importElement);
//   };
  
//   var addStyleToHead = function (source) {
//     var importElement = document.createElement("link");
//     importElement.href = source;
//     importElement.rel = "stylesheet";
//     document.head.appendChild(importElement);
//   };
  
//   addImportToHead(
//     "https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-loader.js"
//   );
//   addImportToHead(
//     "https://unpkg.com/intersection-observer@0.5.1/intersection-observer.js"
//   );
//   addImportToHead(
//     "https://unpkg.com/resize-observer-polyfill@1.5.0/dist/ResizeObserver.js"
//   );
//   addImportToHead(
//     "https://unpkg.com/fullscreen-polyfill@1.0.2/dist/fullscreen.polyfill.js"
//   );
//   addImportToHead("https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js");
//   addImportToBody("https://unpkg.com/@google/model-viewer/dist/model-viewer.js");
//   addImportToBodyNoModule(
//     "https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
//   );
//   addStyleToHead("https://sharpar-io.web.app/style.css");
  
  
  
//   var createModel = function (el, link, iosLink, altTag) {
//     var importElement = document.createElement("model-viewer");
//     importElement.setAttribute("src", link);
//     importElement.setAttribute("ios-src", iosLink);
//     importElement.setAttribute("alt", altTag);
//     importElement.setAttribute("shadow-intensity", "1");
//     importElement.setAttribute("camera-controls", "");
//     importElement.setAttribute("interaction-prompt", "auto");
//     importElement.setAttribute("auto-rotate", "");
//     importElement.setAttribute("ar", "");
//     importElement.setAttribute("ar-modes", "webxr scene-viewer quick-look");
//     importElement.setAttribute("ar-scale", "auto");
//     el.replaceWith(importElement);
//     var buttonElement = document.createElement("button");
//     buttonElement.setAttribute("class", "sharpar-button");
//     buttonElement.setAttribute("slot", "ar-button");
//     var buttonText = document.createTextNode("View in Augmented Reality");
//     buttonElement.appendChild(buttonText);
//     importElement.appendChild(buttonElement);
//   };
// }