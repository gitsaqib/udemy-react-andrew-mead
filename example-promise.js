function getCallback(locationName,callback) {
  callback(undefined,78);
  console.log("City Not Found");
}
getCallback("Philadelphia",function (err,temp){
  if(err) {
    console.log("error",err);
  }else {
    console.log("Success",temp);
  }
});
