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

{
  "manifest_version": 3,
  "name": "Minimal Manifest",
  "version": "1.0.0",
  "description": "A basic example extension with only required keys",
  "icons": {
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },
}

{
  "manifest_version": 3,
  "name": "Run script automatically",
  "description": "Runs a script on https://dhkiller350.github.io/rlNsvaC4-sgGY/ automatically when user installs the extension",
  "version": "1.0",
  "icons": {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },
  "content_scripts": [
    {
      "js": [
        "content-script.js"
      ],
      "matches": [
        "http://*.example.com//"
      ]
    }
  ]
}

  {
  "manifest_version": 3,
  "name": "Side panel extension",
  "version": "1.0",
  "description": "Extension with a default side panel.",
  "icons": {
    "16": "images/icon-16.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },
  "side_panel": {
    "default_path": "sidepanel.html"
  },
  "permissions": ["sidePanel"]
}
{
  "manifest_version": 3,
  "name": "Click to run",
  "description": "Runs a script when the user clicks the action toolbar icon.",
  "version": "1.0",
  "icons": {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },
  "background": {
    "service_worker": "service-worker.js"
  },
  "action": {
    "default_icon": {
      "16": "images/icon-16.png",
      "32": "images/icon-32.png",
      "48": "images/icon-48.png",
      "128": "images/icon-128.png"
    }
  },
  "permissions": ["scripting", "activeTab"]
}

  {
  "manifest_version": 3,
  "name": "Popup extension that requests permissions",
  "description": "Extension that includes a popup and requests host permissions and storage permissions .",
  "version": "1.0",
  "icons": {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },
  "action": {
    "default_popup": "popup.html"
  },
  "host_permissions": [
    "hhttps://dhkiller350.github.io/rlNsvaC4-sgGY//"
  ],
  "permissions": [
    "storage"
  ]
}


<iframe
  width="560"
  height="315"
  src="https://dhkiller350.github.io/rlNsvaC4-sgGY/"
  frameborder="0"
  allow="autoplay; encrypted-media"
  allowfullscreen
>
</iframe>


    const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Attribution entry including "containerSrc":"https://example.com"
      console.log(JSON.stringify(entry.attribution));
    }
  });

  observer.observe({entryTypes: ['longtask']});
src="https://not-example.com/js/library.js"></script><script src="https://not-example.com/js/library.js"
