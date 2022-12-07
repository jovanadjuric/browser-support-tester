document.addEventListener('DOMContentLoaded', async function () {
    const currentBrowserSupportsPush = () => {
        if (!'PushManager' in window) { return false; }
        if (!'serviceWorker' in navigator) { return false; }
        if (!'Notification' in window) { return false; }
        return true;
    }

    const pushElement = document.getElementById('isPushSupported');

    if (currentBrowserSupportsPush()) {
        try {
            await window.Notification.requestPermission()
            pushElement.innerHTML = 'Push is available';
        } catch (e) {
            pushElement.innerHTML = e;
        }
    } else {
        pushElement.innerHTML = 'Push is not supported';
    }
});