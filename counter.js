let arr = document.querySelectorAll(".second_div_about_us_block_text_1")
arr.forEach(item =>{
    item.innerHTML=0
    let endvalue =item.getAttribute('data-num')
    let a = endvalue /200
    function func()
    {
        let value = +item.innerHTML
        if(value<endvalue)
        {
            value +=Math.round(a)
            item.innerHTML=value
            setTimeout(func, 100)
        }
        else
        {
            item.innerHTML=endvalue
        }
    }
    func()
})


