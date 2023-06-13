let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
});



// gives some weird crap that has the url but in a form that idk how to extract
//
// async function getCurrentTab() {
//   let queryOptions = { active: true, lastFocusedWindow: true };
//   // `tab` will either be a `tabs.Tab` instance or `undefined`.
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab.url;
// }
// 
//  chrome.tabs.onUpdated.addListener(function (tabId , info) {
//    console.log('activated');
//    console.log(getCurrentTab());
//    if ( getCurrentTab() == "https://youtube.com" ) {
//      console.log('youtube if triggered');
//      chrome.tabs.create({url: "https://google.com"});
//    }
//    
//  });


chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url) return;
  const url = new URL(tab.url);
  console.log("activated")
  console.log(url.origin)
  console.log(tab.id)


  if (url.origin === "https://www.youtube.com") {
    console.log("youtube detected")
    console.log("bye bye youtube >:)")
    chrome.tabs.remove(tab.id)

  }
});