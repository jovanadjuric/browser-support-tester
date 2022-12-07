document.addEventListener('DOMContentLoaded', async function () {
    const currentBrowserSupportsPush = () => {
        if (!('PushManager' in window)) {
            return false;
        }
        if (!('serviceWorker' in navigator)) {
            return false;
        }
        if (!('Notification' in window)) {
            return false;
        }

        document.querySelector('body').insertAdjacentHTML('afterbegin', 'This browser does support notifications.<br> Notification in window: ' + !!('Notification' in window));
        return true;
    }

    const pushElement = document.getElementById('isPushSupported');
    const error = document.getElementById('error');

    if (currentBrowserSupportsPush()) {
        try {
            await Notification.requestPermission()
            pushElement.innerHTML = Notification;
        } catch (e) {
            pushElement.innerHTML = !!('Notification' in window);
            error.innerHTML = e;
        }
    } else {
        pushElement.innerHTML = 'Push is not supported';
    }
});