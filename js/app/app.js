domReady(function () {
    const model = new Model();
    ko.applyBindings(model, document.getElementById('app'));
});

domReady(function () {
    console.log("hello");
});

