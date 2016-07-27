$('input[type="submit" ]').on('click', function(evt) {
    evt.preventDefault();

    var task = document.querySelector('input[type="text"]').value;

    var list = $('.lists');
    var button = $('<button>X</button>');
    var item = $('<li></li>');


    item.append(task);
    list.append(item);
    list.append(button);

    // $(button).on('click', function() {
    //     item.remove();
    //     button.remove();

    // });


    // var form = document.getElementById("myForm");
    // form.reset();


    $.ajax({
        type: 'POST',
        url: 'http://tiny-za-server.herokuapp.com/collections/hakchurintodo',
        contentType: 'application/JSON',
        data: JSON.stringify({
            todo: task
        }),
        success: function(postResponse) {
          console.log('hi');
            button.on('click', function() {
            item.remove();
            button.remove();

            $.ajax({
                type: 'DELETE',
                url: 'http://tiny-za-server.herokuapp.com/collections/hakchurintodo/' + postResponse._id,
                success: function(deleteResponse) {
                    console.log('it deleted');

                },
                error: function() {

                    console.log('it didnt delete');
                }


            });


        });
      }
    });

});


//make a new item on server
//get all item from server when page loads
//be able to delete item from server when they click on them
//





var settingsGET = {
    url: 'http://tiny-za-server.herokuapp.com/collections/hakchurintodo',
    type: 'GET',
    success: function(response) {



        response.forEach(function(item) {
            // make an li and add it to the ul
            var deleteButton = $("<button>X</button>");
            var listItems = $("<li>" + item.todo + "</li>");
            $('ul').append(listItems);
            listItems.append(deleteButton);
            deleteButton.on('click', function() {
                listItems.remove();
                console.log(item._id);
                $.ajax({
                    type: 'DELETE',
                    url: 'http://tiny-za-server.herokuapp.com/collections/hakchurintodo/' + item._id,
                    success: function(response) {
                        console.log('it deleted');
                    },
                    error: function() {

                        console.log('it didnt delete');
                    }


                });


            });
        });
    }
};

$.ajax(settingsGET);
