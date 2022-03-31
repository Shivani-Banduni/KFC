function navbar(){

return`
<div id="nav">
<div id="nav1">
     
<div><h1 onclick="kfc"><a href="index.html">KFC</a></h1></div>
<div><h3 onclick="m"><a href="menu.html">Menu</a></h3></div>
<div><h3> <a href="deals.html">Deals</a></h3></div>  
</div>


<div id="nav2">
    <div> <img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" alt=""></div>
    <div><h4 onclick="sign"> <a href="signin.html">Sign in</a></h4></div>
    <div><h3 id="account"><a href="post_signin.html">Account</a></h3></div>
  
    <div><h4>0</h4></div>
    <div><a href="cart.html"><img src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt=""</a>></div>
</div>
    </div>
    <div id="nav_two">
        <div><h4>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</h4></div>
        <div><button> <a href="menu.html">Start Order</a></button></div>
    </div>`
    
}export default navbar