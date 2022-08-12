
// quantity and notification
// quantityIncreaseValue and notification
var input=document.getElementById('input')
var inputValue=input.value
var increase = document.getElementById('increase')
var notification=document.getElementById('notification')
notification.innerHTML=inputValue

increase.addEventListener('click', function(){
    inputValue++;
    input.setAttribute('value', `${inputValue}`)
    notification.innerHTML=`${inputValue}`
})

// quantityDecreasevalue and notification
var decrease = document.getElementById('decrease')
decrease.addEventListener('click', function(){
    inputValue--;
    if (inputValue<0) {
        inputValue=0
    } else {
        input.setAttribute('value', `${inputValue}`)
        notification.innerHTML=`${inputValue}`
    }
    
})


// addToCart
var addToCart=document.getElementById('addToCart')
addToCart.addEventListener('click', function(){
    console.log(inputValue)
    inputValue++
    input.setAttribute('value', inputValue)
    notification.innerHTML=`${inputValue}`

})




// mobile imageSlide

var allImages=['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg']
var displayed=0
var next=document.getElementById('next')
var bigImg=document.getElementById('bigImg')
next.addEventListener('click', function(){
    displayed++;
    if(displayed>allImages.length-1){
        displayed=0
    }
    bigImg.src=`${allImages[displayed]}`
    
    // console.log(allImages[displayed])
})
var previous=document.getElementById('previous')
previous.addEventListener('click', function(){
    displayed--;
    if(displayed<0){
        displayed=allImages.length-1
    }
    bigImg.src=`${allImages[displayed]}`
    
    // console.log(allImages[displayed])
    // console.log(displayed)
})






// basket Display

var cartBasket= document .getElementById('cartBasket')
var cartNoti=document.getElementById('cartNoti')
cartNoti.addEventListener('click', function(e){
    e.preventDefault()
    cartBasket.style.visibility= 'visible'
})
cartNoti.addEventListener('mouseover', function(e){
    e.preventDefault()
    cartBasket.style.visibility= 'visible'
})
cartNoti.addEventListener('mouseenter', function(e){
    e.preventDefault()
    cartBasket.style.visibility= 'hidden'
})



// visible nav bar

var navBars=document.getElementById('navBars')
var navSideBar=document.getElementById('navSideBar')
navBars.addEventListener('click', function(){
    navSideBar.style.visibility='visible'
})


// close nav bar
var closeIcon=document.getElementById('closeIcon')
closeIcon.addEventListener('click', function(){
    navSideBar.style.visibility='hidden'
})



// desktopImageClick

var bigImg=document.getElementById('bigImg')
var allImgs=document.getElementById('allImgs')

allImgs.children[0].addEventListener('click', function(){
    bigImg.src=`${allImgs.children[0].getAttribute('src')}`
    console.log(bigImg)
})
allImgs.children[1].addEventListener('click', function(){
    bigImg.src=`${allImgs.children[1].getAttribute('src')}`
    console.log(bigImg)
})
allImgs.children[2].addEventListener('click', function(){
    bigImg.src=`${allImgs.children[2].getAttribute('src')}`
    console.log(bigImg)
})
allImgs.children[3].addEventListener('click', function(){
    bigImg.src=`${allImgs.children[3].getAttribute('src')}`
    console.log(bigImg)
})