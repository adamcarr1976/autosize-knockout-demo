function Model() {
    self = this;

    self.inputFocused = ko.observable(false);
    self.alternativeFocused = ko.observable(false);

    self.displayAlternative = ko.pureComputed(function () {
        const inputFocused = self.inputFocused();
        self.alternativeFocused(!inputFocused);
    });

    self.comment = ko.observable('');

    self.hasContent = ko.pureComputed(function () {
        return self.comment().length > 0;
    });
}