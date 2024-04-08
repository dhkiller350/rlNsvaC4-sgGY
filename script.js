chrome.devtools.network.onRequestFinished.addListener(
  function(request) {
    if (request.response.bodySize > 40*1024) {
      chrome.devtools.inspectedWindow.eval(
          'console.log("Large image: " + unescape("' +
          escape(request.request.url) + '"))');
    }
  }
);

chrome.devtools.network.getHAR(
  callback: function,
)


chrome.devtools.network.onNavigated.addListener(
  callback: function,
)

chrome.devtools.network.onRequestFinished.addListener(
  callback: function,
)


chrome.devtools.network.onRequestFinished.addListener(
  callback: function,
)
