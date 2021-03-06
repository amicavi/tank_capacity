function tankCapacityViewModel() {
  var self = this;

  this.years        = ko.observableArray([]);
  this.brands       = ko.observableArray([]);
  this.models       = ko.observableArray([]);
  this.engines      = ko.observableArray([]);
  this.tankCapacity = ko.observable();
  this.vehicle      = ko.observable();

  this.selectedYear   = ko.observable();
  this.selectedBrand  = ko.observable();
  this.selectedModel  = ko.observable();
  this.selectedEngine = ko.observable();

  function setVehicle () {
    console.log(self.selectedBrand() + ", " + self.selectedModel());
      self.vehicle(self.selectedBrand() + ", " + self.selectedModel());
  };

  function resetSomeValues (howMany) {
    if (howMany == 5) {
      self.selectedBrand(null);
      self.selectedModel(null);
      self.selectedEngine(null);
      self.vehicle(null);
      self.tankCapacity(null);
    } else if (howMany == 4) {
      self.selectedModel(null);
      self.selectedEngine(null);
      self.vehicle(null);
      self.tankCapacity(null);
    } else {
      self.selectedEngine(null);
      self.vehicle(null);
      self.tankCapacity(null);
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
    console.log(allOptions);
    self.engines(allOptions);
  };

  function getTankCapacity(engine){
    var year   = self.selectedYear();
    var model  = self.selectedModel();
    var brand  = self.selectedBrand();
    requestManager().getCarTankCapacity(year, model, brand, engine, function (res) {
      console.log(res);
      if (res == 'error') {
        self.tankCapacity('No se encontró información de este vehículo');
      } else {
        self.tankCapacity(res.capacity + ' lts.');
      }
    });
  };

  self.selectedYear.subscribe(function (year) {
    if (year) {
      getBrands();
    } else {
      resetSomeValues(5);
    }
  });

  self.selectedBrand.subscribe(function (brand) {
    if (brand) {
      getModels();
    } else {
      resetSomeValues(4);
    }
  });

  self.selectedModel.subscribe(function (model) {
    if (model) {
      getEngines();
    } else {
      resetSomeValues(3);
    }
  });

  self.selectedEngine.subscribe(function (engine) {
    console.log('selectedEngine',engine);
    if (engine) {
      var onlyEngine = engine.replace(' cilindros ','+').replace(' litros', '');
      getTankCapacity(onlyEngine);
      setVehicle();
    }
  });

  getYears();

};


var view = new tankCapacityViewModel();
$(function() {
  ko.applyBindings(view);

});
