window.onload=function(){ //entry point
  
  var o=new Kuma3ary("w");
  intext.value = o.toString();
};
var dothemall=function(){ //button
  var str=intext.value;
  //trimming \n
  str=str.replace(/^\n*/g, "");
  str=str.replace(/\n*$/g, "");
  str=str.replace(/\n+/g, "\n");
  //parse
  //test
};

