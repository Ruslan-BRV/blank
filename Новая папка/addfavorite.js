function favBtn(pid){

    $.post('/addfavorite.php', {PID: pid}, function(data){
          alert("Товар добавлен в избранное!")
    })

    return false
}