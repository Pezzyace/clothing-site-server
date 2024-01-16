const productContainers = [...document.querySelectorAll('.product-container')];
const nextbtn = [...document.querySelectorAll('.next-btn')];
const prebtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextbtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prebtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
