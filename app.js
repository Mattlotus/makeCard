



const open = () =>{
    let card = document.querySelector('cardContainer')
    let newImage = document.createElement('img')
    newImage.setAttribute('src' ,'https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9zdGF0aWMvaW1hZ2VzL3dlYnNpdGUvMjAyMi0xMC9ybTQ2Ny1oZWFydC0wMDFfMS5wbmc.png?s=aO5yviu6eYtr09KFppgRwJTNj2GkZlKZpjLh2DD3zOk' )
    newImage.setAttribute('class,mainImage')
    let ogImg  = document.querySelector('.mainImage')
    ogImg.replaceWith(newImage)
    let top = document.querySelector('.toptitle')
    top.innerHTML = "I LOVE YOU"
    let down = document.querySelector('.title')
    down.innerHTML = "SPREAD LOVE"
}