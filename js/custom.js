window.onload = function(){
    let params = (new URL(document.location)).searchParams;
    let language_name = params.get("lang");
    console.log(language_name);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(response){
        if(response.currentTarget.readyState == 4){
            var data = JSON.parse(response.currentTarget.response);

            for(var i=0;i<data.length;i++){
                if(data[i].lang_code == language_name){
                    console.log(data[i].heading3);
                    document.getElementById('heading-3').innerHTML = data[i].heading3;
                    document.getElementById('question-1').innerHTML = data[i].question1;
                    document.getElementById('question-2').innerHTML = data[i].question2;
                    document.getElementById('para-1').innerHTML = data[i].para1;
                    document.getElementById('para-2').innerHTML = data[i].para2;
                }
            }
        }
    },
    xhttp.open("GET", "https://api.myjson.com/bins/w8rjq", false);
    xhttp.send();
};