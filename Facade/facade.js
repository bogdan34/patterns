function addEventListener(element, event, handler) {

    if (element.addEventListener) {
        element.addEventListener(event, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent(`on${event}`, handler)
    } else {
        element[`on${event}`] = handler;
    }
};

function removeEventListener(element, event, handler) {

    if (element.removeEventListener) {
        element.removeEventListener(event, handler, false);
    } else if (element.dettachEvent) {
        element.dettachEvent(`on${event}`, handler)
    } else {
        element[`on${event}`] = null;
    }
};