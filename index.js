// domcontentloaded event
document.addEventListener('DOMContentLoaded', function () {
    const currentBrowserSupportsPush = () => {
        if (!'PushManager' in window) { return false; }
        if (!'serviceWorker' in navigator) { return false; }
        if (!'Notification' in window) { return false; }
        return true;
    }

    const pushElement = document.getElementById('isPushSupported');

    if (currentBrowserSupportsPush()) {
        pushElement.innerHTML = 'Push is supported';
    } else {
        pushElement.innerHTML = 'Push is not supported';
    }
});