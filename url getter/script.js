document.addEventListener('DOMContentLoaded', function () {
    
    var getUrl = document.getElementById('geturl');
    
    getUrl.addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {

            document.getElementById('url').innerHTML = tab.url;
    
        });
    });
});
