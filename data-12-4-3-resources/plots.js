d3.json("samples.json").then(function(data){
    console.log(data);
});

function optionChanged(newSample) {
    console.log(newSample);
  }