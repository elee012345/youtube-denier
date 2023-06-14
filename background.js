let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
});


/*
another way of doing things
but it's really aids
probably because idk webdev or js in genearl and i'm botching this code to make professional js devs cry


async function getURL() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab.url;
}

async function getID() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab.id;
}

function youtubequestionmarkexclamationmark(url) {
  console.log('activated');
  console.log(url);
  if ( url === "https://www.youtube.com/" ) {
    console.log('youtube if triggered');
    chrome.tabs.remove(getID().then(byebyeyoutube));
  }
}

function byebyeyoutube(id) {
  chrome.tabs.remove(id);
}

chrome.tabs.onUpdated.addListener(function (tabId , info) {
  let promise = getURL();
  promise.then(youtubequestionmarkexclamationmark);
  
  
});
*/


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