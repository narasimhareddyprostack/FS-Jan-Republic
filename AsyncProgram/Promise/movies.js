let goToMovies = (success, failure) => {
    let money = 350;
    money > 400 ? success("Buy Tickets, Go To Movies")
        : failure("Go to PG, Practice Promise Examples")

}
//goToMovies(1,2);
goToMovies((msg) => {
    console.log(msg)
}, (err) => {
    console.error(err)
});