function tankCapacityViewModel() {
  var self = this;

  this.year  = ko.observable();
  this.brand = ko.observable(null);
  this.model = ko.observable(null);
  this.engine = ko.observable(null);

  this.years = ko.observableArray([]);

  requestManager().getCarYears(function (years) {
    self.years(self.years().concat(years));
  });
};


$(function() {
  ko.applyBindings(new tankCapacityViewModel());
});
