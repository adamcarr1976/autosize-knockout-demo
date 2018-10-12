ko.bindingHandlers.autosize = {
    init: function (element, valueAccessor) {
        autosize(element);
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            // This will be called when the element is removed by Knockout or
            // if some other part of your code calls ko.removeNode(element)
            autosize.destroy(element);
        });
    }
};