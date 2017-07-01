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
    	    console.log("success");
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
