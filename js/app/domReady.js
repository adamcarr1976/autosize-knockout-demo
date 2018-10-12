function domReady(callback) {
    if (typeof callback !== "function") throw Error("callback must be a function");

    if (document.readyState === "complete" ||
        (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        callback();
    } else {
        document.addEventListener("DOMContentLoaded", callback);
    }
}
