function requestManager(){var e=this;return e.getCarYears=function(e){$.ajax({url:"http://mvp.clonemirefaccion.com/vechicle/fleet/api/years?access_token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiOGYwZWIzZjU5In0.8MNTm8SwVmkeLCR5omERTXzaqtPVnByg0wLcnOYHvBY",type:"GET",headers:{Authorization:"Basic "+btoa("tank_capacity:JT^0s#^X56Bm*M")},success:function(c){console.log("getCarYears success"),e(c)},error:function(e){console.log(e)}})},e.getCarMakes=function(e,c){$.ajax({url:"http://mvp.clonemirefaccion.com/vechicle/fleet/api/makes?access_token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiOGYwZWIzZjU5In0.8MNTm8SwVmkeLCR5omERTXzaqtPVnByg0wLcnOYHvBY&year="+e,type:"GET",headers:{Authorization:"Basic "+btoa("tank_capacity:JT^0s#^X56Bm*M")},success:function(e){console.log("getCarMakes success"),c(e)},error:function(e){console.log(e)}})},e.getCarModels=function(e,c,o){$.ajax({url:"http://mvp.clonemirefaccion.com/vechicle/fleet/api/models?access_token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiOGYwZWIzZjU5In0.8MNTm8SwVmkeLCR5omERTXzaqtPVnByg0wLcnOYHvBY&year="+e+"&make="+c,type:"GET",headers:{Authorization:"Basic "+btoa("tank_capacity:JT^0s#^X56Bm*M")},success:function(e){console.log("getCarModels success"),o(e)},error:function(e){console.log(e)}})},e.getCarEngines=function(e,c,o,a){$.ajax({url:"http://mvp.clonemirefaccion.com/vechicle/fleet/api/engines?access_token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiOGYwZWIzZjU5In0.8MNTm8SwVmkeLCR5omERTXzaqtPVnByg0wLcnOYHvBY&year="+e+"&model="+c+"&make="+o,type:"GET",headers:{Authorization:"Basic "+btoa("tank_capacity:JT^0s#^X56Bm*M")},success:function(e){console.log("getCarEngines success"),a(e)},error:function(e){console.log(e)}})},e.getCarTankCapacity=function(e,c,o,a,n){$.ajax({url:"http://mvp.clonemirefaccion.com/vechicle/fleet/api/tank-capacity?access_token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiOGYwZWIzZjU5In0.8MNTm8SwVmkeLCR5omERTXzaqtPVnByg0wLcnOYHvBY&year="+e+"&model="+c+"&make="+o+"&engine="+a,type:"GET",headers:{Authorization:"Basic "+btoa("tank_capacity:JT^0s#^X56Bm*M")},success:function(e){console.log("getCarMakes success",e),n(e)},error:function(e){n("error"),console.log(e)}})},e}