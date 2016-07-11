$('input[type="submit"]').on('click', function(evt) {
    evt.preventDefault();


    var task = document.querySelector('input[type="text"]').value;

    var list = $('.lists');
    var button = $('<button>complete</button>');
    var item = $('<li></li>');
    item.append(task);
    list.append(item);
    list.append(button);

    $(button).on('click', function() {
        item.remove();
        button.remove();

    });


    var form = document.getElementById("myForm");
    form.reset();

});


//make a new item on server
//get all item from server when page loads
//be able to delete item from server when they click on them
//


var submits = {

    "name": "Joey",
    "color": "white",
    "powers": ["healing", "healing"],
    "last": false
};

var postedItems =
    $.ajax({
        url: 'http://tiny-za-server.herokuapp.com/collections/hakchurintodo',
        type: 'POST',
        dataType: 'json',
        success: function(response) {
            submits.response.forEach(function(submit, i, arr) {

            });


            console.log(submits);
        }



    });









//   var container =('.content','.lists','#myForm');
// response.forEach(function(current) {



// });
//
//   }
// });



// $.ajax({
//
//
//     url: 'http://tiny-za-server.herokuapp.com/collections/hakchurintodo',
//     type: 'GET',
//     dataType: 'json',
//     success: function(response) {
//         var content = $('.content');
//         response.forEach(function(cuurrent) {
//
//             var itemObj = $('lists').addClass('itemObj');
//             itemObj.append(content.innerText);
//             //console.log(content);
//
//
//         });
//     }
// });







//create li or whatever container
//append itemObj.listItem

//console.log(itemObj.listItem);
//     });
//
//   }
// };





// $('item').on('click',function(e){
//   $(e.target).val('complete');
//   $(this).attr('disabled',true);
//   setTimeout(function(){
//    $(e.target).val('complete');
//   $(e.target).attr('disabled',true);
//  }, 4000);
//
// });
