function tankCapacityViewModel() {
  var self = this;

  this.selectedYear   = ko.observable();
  this.selectedBrand  = ko.observable();
  this.selectedModel  = ko.observable();
  this.selectedEngine = ko.observable();

  this.years  = ko.observableArray([]);
  this.brands = ko.observableArray([]);
  this.models = ko.observableArray([]);

  requestManager().getCarYears(function (years) {
    console.log("1");
    self.years(years);
    self.getBrands();
  });


  this.getBrands = function() {
    self.selectedYear.subscribe(function (year) {
      requestManager().getCarMakes(year, function (makes) {
        self.brands(makes);
        self.getModels(year);
       });
    });
  };

  this.getModels = function(year) {
    self.selectedBrand.subscribe(function (brand) {
      requestManager().getCarModels(year, brand, function (models) {
        self.models(models);
      });
    });
  };

  // this.brand = ko.pureComputed(function() {
  //     requestManager().getCarYears(this.year, function (years) {
  //       self.years(self.years().concat(years));
  //     });
  //   });

};



$(function() {
  ko.applyBindings(new tankCapacityViewModel());
});
