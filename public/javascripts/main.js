/**
 * Created by donpage on 1/12/15.
 */

$(document).ready(function (e) {

    var resultList = $('.list');

    console.log("jquery ready");

    $(".find").on("click", function (e) {
        e.preventDefault();

        $(".ff-form").fadeOut("slow");

        var th = {search: $(".th-input").val()};

        console.log("finding:", th.search);

        $.get("/find", th, function (data) {
            console.log("DATA:", data);
            var users = data.users;

            for (var i = 0; i < users.length; i++) {
                console.log(i);
                var obj = users[i];
                var followerNumber = users.length - i;

                resultList.append(
                    "<li>" +
                    "<span class='number'>#"+followerNumber+"</span>"+
                    "<a href='https://twitter.com/"+obj.screen_name+"' target='_blank'>" +
                        "<img src="+obj.profile_image_url+"/>" +
                        "<h3 class='name'>"+obj.name+"</h3>" +
                        "<p class='screen_name'>@"+obj.screen_name+"("+obj.followers_count+")</p>"
                    + "</a>" +
                    "</li>"
                );
            }
            $(".results").slideDown("slow");
        })

    });

    $(".back").on("click", function(e){
        e.preventDefault();
        resultList.empty(); //resets whats in the html so it doesnt keep appending list-items.

        $(".results").slideUp("slow");
        $(".ff-form").fadeIn("slow");
    })


});

