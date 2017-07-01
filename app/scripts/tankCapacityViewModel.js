function tankCapacityViewModel() {
  var self = this;

  this.year = ko.observable();

  this.years = ko.observableArray([]);

  requestManager().getCarYears(function (years) {
    self.years(self.years().concat(years));
  });
};


$(function() {
  ko.applyBindings(new tankCapacityViewModel());
});
