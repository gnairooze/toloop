function getUrlParameter(url, name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(url);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function playToURL(){
    browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      console.log(tabs[0].url);
      var videoId = getUrlParameter(tabs[0].url, "v");
      var newURL = "https://www.loopvideos.com/" + videoId;

      browser.tabs.create({url: newURL});
  })
}

browser.browserAction.onClicked.addListener(playToURL);
browser.pageAction.onClicked.addListener(playToURL);
