//     var shouldContinue = true;
// //detect the ip address, and if it is my ip address redirect to the new script
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
//   if (ip === '23.233.93.240')shouldContinue = false;
//   if (location.hostname=== 'localhost') shouldContinue = false;
// //   if (!shouldContinue){
// //     //this is my ip, redirect me to the correct script
// //     var newScript = document.createElement('script');
// //     newScript.src = "https://sharpar-io.web.app/model.js"
// //     newScript.setAttribute('model-id',"-MIQG-c9kwK4uKT94KSQ");
// //     document.currentScript.replaceWith(newScript);
// //   }
// if (shouldContinue){
// createModel(
//     document.currentScript,
//     document.currentScript.getAttribute("data-link"),
//     document.currentScript.getAttribute("data-ios-link"),
//     document.currentScript.getAttribute("data-alt")
//   );
//}
var dataLink = document.currentScript.getAttribute("data-link");
var modelID = '';
//convert data-link to modelID
switch (dataLink){
  case 'https://firebasestorage.googleapis.com/v0/b/sharpar-io.appspot.com/o/roseandcrown_sharpar_model_0104.glb?alt=media&token=ea79598d-caa7-42fd-896c-506f90afe1c7':
    modelID = '-MI4oo1r4W3JLAcVTC9e';
    break;
  case "https://firebasestorage.googleapis.com/v0/b/sharpar-io.appspot.com/o/authentique_sharpar_model_0101.glb?alt=media&token=36e1a9e8-3030-4221-bb21-c23fc33e2b5b":
    modelID = '-MI4qeOCl8AYzUlFLxTD';
    break;
  case "https://firebasestorage.googleapis.com/v0/b/sharpar-io.appspot.com/o/authentique_sharpar_model_0102.glb?alt=media&token=c205b09a-14c2-4561-9f4e-2faecf7cf4fc":
    modelID = "-MIQCMR1CFTc4oEOoqZX";
    break;
  case "https://firebasestorage.googleapis.com/v0/b/sharpar-io.appspot.com/o/authentique_sharpar_model_0103.glb?alt=media&token=fb07b758-76f4-426a-a2b2-b726a5529134":
    modelID = "-MIQG-c9kwK4uKT94KSQ";
    break;
  case "https://firebasestorage.googleapis.com/v0/b/sharpar-io.appspot.com/o/roseandcrown_sharpar_model_0105.glb?alt=media&token=87d76fa2-255c-4bee-b417-0226dc6560b5":
    modelID = "-MIZeqP817bOFds2WmyY";
    break;
  default:
    console.log('error: couldnt match sharpar data-link to model-id');
    break;
}


var newScript = document.createElement('script');
newScript.src = "https://sharpar-io.web.app/model.js"
newScript.setAttribute('model-id',modelID);
document.currentScript.replaceWith(newScript);


