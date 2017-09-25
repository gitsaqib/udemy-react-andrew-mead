var DataUtility =
  {
        asynchronousSaveToDo : function (todo) {
            console.log("Saving in DB .. . . .."+todo);
            return new Promise(function (resolve, reject) {
                console.log("Async call .. . . .."+todo.todo.length);
                if (todo.todo.length %2==0) {
                    console.log("Async call pass.. . . ..");
                resolve()
              } else {
                  console.log("Async call fail.. . . ..");
                reject()
              }
            })
          }
    }

module.exports = DataUtility