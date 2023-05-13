if(document.readyState=="loading")
{
    document.addEventListener('DOMContentLoaded',ready)
}
else
{
    ready()
}
function ready()
{
        var removecartitem=document.getElementsByClassName("Remove-btn")
    console.log(removecartitem)
    for(var i=0;i<removecartitem.length;i++)
    {
        var button=removecartitem[i]
        button.addEventListener('click',removeCartItem)
    }
    var quantityinputs=document.getElementsByClassName("cart-quantity-input")
    for(var i=0;i<quantityinputs.length;i++)
    {
       var input=quantityinputs[i]
       input.addEventListener('change',quantitychanged)
    }
    var addToCartButtons=document.getElementsByClassName("b-cart")
    for(var i=0;i<addToCartButtons.length;i++)
    {
      var button=addToCartButtons[i]
      button.addEventListener('click',addToCartClicked)
    }
}

function removeCartItem(event)
{
    var buttonclicked=event.target
    buttonclicked.parentElement.parentElement.remove()
    UpdateCartTotal()
}

function quantitychanged(event)
{
    var input=event.target
    if(isNaN(input.value)|| input.value<=0 )
    {
       input.value=1
    }
    UpdateCartTotal()
}
function addToCartClicked(event)
{
    var button=event.target
    var shopItem=button.parentElement.parentElement
    var title=shopItem.getElementsByClassName("b-tittle")[0].innerText
    var price=shopItem.getElementsByClassName("b-price")[0].innerText
    var imgsrc=shopItem.getElementsByClassName("photo-img")[0].src

    console.log(title,price,imgsrc)
    addItemToCart(title,price,imgsrc)
}






function UpdateCartTotal()
{
    var cartItemContainer=document.getElementsByClassName("cart-items")[0]
    var cartRows=cartItemContainer.getElementsByClassName("cart-row")
    var total=0
    for(var i=0;i<cartRows.length;i++)
    {
      var cartRow=cartRows[i]
      var priceElement= cartRow.getElementsByClassName("cart-price")[0]
      var quantityElement= cartRow.getElementsByClassName("cart-quantity-input")[0]
      var price= parseFloat( priceElement.innerText.replace('EGP',''))
      var quantity=quantityElement.value
       total=total+(price*quantity)
    console.log(price*quantity)
       
    }
    document.getElementsByClassName("total-p")[0].innerText=total +' EGP' 
    
} 
       