function tankCapacityViewModel() {
  var self = this;

  this.years        = ko.observableArray([]);
  this.brands       = ko.observableArray([]);
  this.models       = ko.observableArray([]);
  this.engines      = ko.observableArray([]);
  this.tankCapacity = ko.observable();

  this.selectedYear   = ko.observable();
  this.selectedBrand  = ko.observable();
  this.selectedModel  = ko.observable();
  this.selectedEngine = ko.observable();

  function resetValues (howMany) {
    if (howMany == 3) {
      self.selectedBrand(null);
      self.selectedModel(null);
      self.selectedEngine(null);
    } else if (howMany == 2) {
      self.selectedModel(null);
      self.selectedEngine(null);
    } else {
      self.selectedEngine(null);
    }
  };

  function getYears(){
    requestManager().getCarYears(function (years) {
      self.years(years);
    });
  };

  function getBrands(){
    var year = self.selectedYear();
    requestManager().getCarMakes(year, function (makes) {
      self.brands(makes);
    });
  };

  function getModels(){
    var year  = self.selectedYear();
    var brand = self.selectedBrand();
    requestManager().getCarModels(year, brand, function (models) {
      self.models(models);
    });
  };

  function getEngines(){
    var year  = self.selectedYear();
    var model = self.selectedModel();
    var brand = self.selectedBrand();
    requestManager().getCarEngines(year, model, brand, function (engines) {
      getEngineValues(engines);
    });
  };

  function getEngineValues(arrayEngines) {
    var allOptions = [];
    arrayEngines.forEach(function (element) {
      if (element.cylinders && element.liters) {
        allOptions.push(element.cylinders + ' cilindros' + ' ' + element.liters +' litros');
      } else if (!element.cylinders) {
        allOptions.push(element.liters +' litros');
      } else {
        allOptions.push(element.cylinders + ' cilindros');
      }
    });
    self.engines(allOptions);
  };

  function getTankCapacity(){
    var year   = self.selectedYear();
    var model  = self.selectedModel();
    var brand  = self.selectedBrand();
    var engine = self.selectedEngine();
    requestManager().getCarTankCapacity(year, model, brand, engine, function (capacity) {
      self.tankCapacity(capacity);
    });
  };

  self.selectedYear.subscribe(function (year) {
    if (year) {
      getBrands();
    } else {
      resetValues(3);
    }
  });

  self.selectedBrand.subscribe(function (brand) {
    if (brand) {
      getModels();
    } else {
      resetValues(2);
    }
  });

  self.selectedModel.subscribe(function (model) {
    if (model) {
      getEngines();
    } else {
      resetValues(1);
    }
  });

  getYears();

};


var view = new tankCapacityViewModel();
$(function() {
  ko.applyBindings(view);

});
