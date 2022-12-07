document.addEventListener('DOMContentLoaded', async function () {
    const status = document.getElementById('status');
    const message = document.getElementById('message');

    const displayError = (err) => {
        message.innerHTML = `<strong>"${err}"</strong> is not defined`;
    }

    const browserSupportsPush = () => {
        if (!('PushManager' in window)) {
            displayError('window.PushManager');
            return false;
        }
        if (!('serviceWorker' in navigator)) {
            displayError('navigator.serviceWorker');
            return false;
        }
        if (!('Notification' in window)) {
            displayError('window.Notification');
            return false;
        }

        return true;
    }

    if (browserSupportsPush() === true) {
        try {
            await Notification.requestPermission()
            status.innerHTML = `This browser supports push notifications.`;
            message.innerHTML = `Status: ${Notification.permission}`;
        } catch (error) {
            status.innerHTML = error;
        }
    } else {
        status.innerHTML = 'Push notifications are not supported by this browser.';
    }
});