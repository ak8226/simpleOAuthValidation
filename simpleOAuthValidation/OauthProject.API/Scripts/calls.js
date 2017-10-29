$("textarea").css("resize", "none");
$('#getToken').click(function () {
    var params = {
        username: 'admin',
        password: 'admin',
        grant_type: 'password',
       
    };

    var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
    }

    var formBody = [];
    for (var property in params) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(params[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    var request = {
        method: 'POST',
        headers: headers,
        body: formBody
    };

    fetch("/token",request)
        .then(function (response) {
            if (response.status !== 200) {
                $("#tokenString").html("status : "+ response.status+ "  "+"Error Text : "+response.statusText);
                return;
            }   

        response.json().then(function (data) {
            $("#tokenString").html(data.access_token);
        });
    })
    .catch(function (error) {
        $("#tokenString").html(data.access_token);
        // If there is any error you will catch them here
    });   

});

$('#getResponse').click(function () {
    var headers = {
        'Accept': 'application/json',
        'Authorization': "Bearer " + $("#tokenString").val()
    }

    var request = {
        method: 'GET',
        headers: headers,
    };

    fetch("/api/orders", request)
        .then(function (response) {
            if (response.status !== 200) {
                $("#responseArea").html("status : " + response.status + "  " + "Error Text : " + response.statusText);
                return;
            } 
            response.json().then(function (data) {
                $('#responseArea').val("");
                for (var i = 0; i < data.length; i++) {
                    var dataString = "Customer Id : " + data[i].OrderId + " Customer Name : " + data[i].CustomerName + " Customer City : " + data[i].City + "\n";
                    $('#responseArea').val($('#responseArea').val() + dataString);
                }

            });
        })
        .catch(function (error) {
            console.log(error);
            // If there is any error you will catch them here
        });
});

