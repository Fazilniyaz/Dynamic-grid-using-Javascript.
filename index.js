var productList =[ {
    id : 1,
    pic : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    isClothing : true,
    Brand :"United colors of Beneton",
    swagon:"Men Navy blue solid sweat shirt",
    price:" Rs 2599"
},
{
    id : 2,
    pic : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",   
    isClothing : true,
    Brand :"Puma",
    swagon:"Men Black MamGp T7 Sweat sporty jacket",
    price:"Rs 7999"
},
{
    id : 3,
    pic : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg",

    isClothing : true,
    Brand :"Hush puppies",
    swagon:"Men Black Action parkview License shoe",
    price:"Rs 6999"
},
{
    id:4,
    pic:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg",

    isClothing:true,
    Brand:"Bareskin",
    swagon:"Women Black Solid Lightweight Leather Jacket",
    price:"Rs 9999"
},
{
    id:5,
    pic:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg",

    isClothing:true,
    Brand:"SASSAFRAS",
    swagon:"Women Blue Solid Shirt Dress",
    price:"Rs 5200"
},
{
    id:6,
    pic:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",

    isClothing:false,
    Brand:"Apple",
    swagon:"Unisex Silver-Toned Series 3 Smart Watch",
    price:"Rs 31999"
},
{
    id:7,
    pic:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",

    isClothing:false,
    Brand:"Fasttrack",
    swagon:"Unisex Black & Green Reflex 2.0 Smart Band",
    price:"Rs 1999"
},
{
    id:8,
    pic:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",

    isClothing:false,
    Brand:"Samsung",
    swagon:"Unisex Black Galaxy Fit Fitness Band",

    price:"Rs 9990"
},
{
    id:9,
    pic:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg",

    isClothing:false,
    Brand:"Samsung",
    swagon:"Gear IconX Black Cord-free Fitness Earbuds",
    price:"Rs 13990"
},
{
    id:10,
    pic:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg",

    isClothing:false,
    Brand:"Apple",
    swagon:"White 2nd Gen AirPods with Charging Case",
    price:"Rs 14999"
}];


//-----------------------------------------------------------------------------

var cloth = document.getElementById("cloth")
var noncloth = document.getElementById("Noncloth")
var head = document.getElementById("head")
var head2 = document.getElementById("head2")


var heading1 = document.createElement("p")
heading1.innerText = "Clothing for Men and Women"
heading1.className = "heading1"

head.appendChild(heading1)


var heading2 = document.createElement("p")
heading2.innerText = "Accessories for men and women"
heading2.className = "heading1"

head2.appendChild(heading2)

//-----------------------------------------------------------------------------

for(var i=0;i<productList.length;i++){

    var card = document.createElement("div")
    card.className = "card"

    var p = document.createElement("h2")
    p.className = "Brand"
    p.innerText = productList[i].Brand

    var imgdiv = document.createElement("div")
    var img = document.createElement("img")
    img.src = productList[i].pic
    img.className = "img"
    imgdiv.className = "imgdiv"
    imgdiv.appendChild(img)
    card.appendChild(imgdiv)


    var swag = document.createElement("p")
    swag.className = "swag"
    swag.innerText = productList[i].swagon
    card.appendChild(swag)
    card.appendChild(p)

    var price = document.createElement("p")
    price.className = "price"
    price.innerText = productList[i].price
    card.appendChild(price)

    if(productList[i].isClothing === true){
        cloth.appendChild(card)
    }
    else{
        noncloth.appendChild(card)
    }


}

//-----------------------------------------------------------------------------


