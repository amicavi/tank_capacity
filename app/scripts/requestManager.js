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
        	console.log(data);
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
        	console.log(data);
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
    	    console.log("getCarMakes success");
        	console.log(data);
          cb(data);
        },
        error: function(e){
        	console.log(e);
        }
      });
    };

    return self;

};
