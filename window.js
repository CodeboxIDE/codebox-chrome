window.onresize = doLayout;
var baseHost = "https://www.codebox.io";
var userAgent = "codebox-app";

onload = function() {
    var webview = getWebview();

    doLayout();
    webview.setUserAgentOverride(userAgent);
    webview.addEventListener('newwindow', function(e) {
        window.open(e.targetUrl);
    });
    webview.addEventListener('loadredirect', function(e) {
        if (e.originalEvent.targetUrl.indexOf(baseHost) == 0) {
            return;
        }
        e.preventDefault();
        window.open(e.newUrl);
        return;
    });

    navigateTo(baseHost);
};

function getWebview() {
    return document.querySelector('webview');
}

function navigateTo(url) {
    document.querySelector('webview').src = url;
}

function doLayout() {
    var webview = getWebview();
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    var webviewWidth = windowWidth;
    var webviewHeight = windowHeight;

    webview.style.width = webviewWidth + 'px';
    webview.style.height = webviewHeight + 'px';
}
