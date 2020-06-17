
var rule = {
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'localhost', schemes: ['http'] },
        })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
};

chrome.runtime.onInstalled.addListener(function () {
    console.log("Installed ")
    chrome.declarativeContent.onPageChanged.addRules([rule])
})
