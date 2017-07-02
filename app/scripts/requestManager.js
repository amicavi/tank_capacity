function requestManager () {
    var self = this;

    self.getCarYears = function(cb) {
      $.ajax({
      	url: 'http://mvp.clonemirefaccion.com/vechicle/fleet/api/years?access_token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiOGYwZWIzZjU5In0.8MNTm8SwVmkeLCR5omERTXzaqtPVnByg0wLcnOYHvBY',
        type: "GET",
        headers: {
      	  "Authorization": "Basic " + btoa("tank_capacity:JT^0s#^X56Bm*M")
    	  },
        success:function(data){
    	    console.log("getCarYears success");
          cb(data);
        },
        error: function(e){
        	console.log(e);
        }
      });
    };

    self.getCarMakes = function(year,cb) {
      $.ajax({
      	url: 'http://mvp.clonemirefaccion.com/vechicle/fleet/api/makes?access_token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiOGYwZWIzZjU5In0.8MNTm8SwVmkeLCR5omERTXzaqtPVnByg0wLcnOYHvBY&year=' + year,
        type: "GET",
        headers: {
      	  "Authorization": "Basic " + btoa("tank_capacity:JT^0s#^X56Bm*M")
    	  },
        success:function(data){
    	    console.log("getCarMakes success");
          cb(data);
        },
        error: function(e){
        	console.log(e);
        }
      });
    };

    self.getCarModels = function(year, make, cb) {
      $.ajax({
      	url: 'http://mvp.clonemirefaccion.com/vechicle/fleet/api/models?access_token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiOGYwZWIzZjU5In0.8MNTm8SwVmkeLCR5omERTXzaqtPVnByg0wLcnOYHvBY&year=' + year + '&make=' + make,
        type: "GET",
        headers: {
      	  "Authorization": "Basic " + btoa("tank_capacity:JT^0s#^X56Bm*M")
    	  },
        success:function(data){
    	    console.log("getCarModels success");
          cb(data);
        },
        error: function(e){
        	console.log(e);
        }
      });
    };

    self.getCarEngines = function(year, model, make, cb) {
      $.ajax({
      	url: 'http://mvp.clonemirefaccion.com/vechicle/fleet/api/engines?access_token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiOGYwZWIzZjU5In0.8MNTm8SwVmkeLCR5omERTXzaqtPVnByg0wLcnOYHvBY&year=' + year + '&model=' + model + '&make=' + make,
        type: "GET",
        headers: {
      	  "Authorization": "Basic " + btoa("tank_capacity:JT^0s#^X56Bm*M")
    	  },
        success:function(data){
    	    console.log("getCarEngines success");
          cb(data);
        },
        error: function(e){
        	console.log(e);
        }
      });
    };

    // self.getCarTankCapacity = function(year, model, make, cb) {
    //   $.ajax({
    //   	url: 'http://mvp.clonemirefaccion.com/vechicle/fleet/api/tank-capacity?access_token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiOGYwZWIzZjU5In0.8MNTm8SwVmkeLCR5omERTXzaqtPVnByg0wLcnOYHvBY&year=' + year + '&model=' + model + '&make=' + make + '&engine=' + engine,
    //     type: "GET",
    //     headers: {
    //   	  "Authorization": "Basic " + btoa("tank_capacity:JT^0s#^X56Bm*M")
    // 	  },
    //     success:function(data){
    // 	    console.log("getCarMakes success");
    //       cb(data);
    //     },
    //     error: function(e){
    //     	console.log(e);
    //     }
    //   });
    // };

    return self;

};
