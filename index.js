const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 * Base url: https://jsonmock.hackerrank.com/api/movies/search/?Title=
 */
function getMovieTitles(substr) {
      let url = "https://jsonmock.hackerrank.com/api/movies/search/?Title=";
      let result=[];
      let data = "";
      https.get(url+substr, function(res) {
         if (res.statusCode >= 200 && res.statusCode < 400) {
           res.on('data', function(data_) { 
                  data += data_;
           });
           res.on('end', function() {  
               let temp= JSON.parse(data)
              // console.log( JSON.parse(data))
               for(let i=0;i<temp.data.length;i++){
                   result.push(temp.data[i].Title)
               }
               if(temp.page === temp.total_pages) console.log(result.sort(); 
               else{
                  for(let i=2;i<=temp.total_pages;i++){
                    https.get(url+substr+'&page=' + i, function(res) {
                      let page_data = "";
                      res.on('data', function(data_) { 
                        page_data += data_;
                      });
                      res.on('end',function(){
                        let temp_2= JSON.parse(page_data)
                        for(let j=0;j<temp_2.data.length;j++){
                          result.push(temp_2.data[j].Title)
                        }
                        console.log(result.sort());
                      })
                    })
                  }
               } 
           });
           
         }
       });
     

}
getMovieTitles("spiderman");