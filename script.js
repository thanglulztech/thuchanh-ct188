const searchForm = document.getElementById('searchForm');
const search = document.getElementById('search');
const searchInput = document.getElementById('searchInput');
const cart = document.getElementById('cart');

function guidulieu(){
    const keyword = searchInput.value.trim();
    if(keyword.length > 0){
        searchForm.submit();
    }
    else{
        alert("Nhap vao tu khoa tin kiem");
    }
}
searchInput.addEventListener('keydown',function(event){
    if(event.key == 'Enter'){
        event.preventDefault();
        guidulieu();
    }
});
search.addEventListener('click', guidulieu);
cart.addEventListener('click', guidulieu);
//dang nhap
function formValidate(){
    const email = document.getElementById('email');
    const psw = document.getElementById('psw');

}
