const glass = document.getElementById("glass")
glass.addEventListener('mouseenter', () => {
    glass.classList.add("ph-duotone")
    // magGlass.classList.remove("ph ph-magnifying-glass")
    glass.style.color = "#161616"
    // console.log(magGlass)
})
glass.addEventListener('mouseleave', () => {
    glass.classList.remove("ph-duotone")
    // magGlass.classList.add("ph ph-magnifying-glass")
    glass.style.color = ""
})

const heart = document.getElementById("heart")
heart.addEventListener('mouseenter', () => {
    heart.classList.add("ph-duotone")
    heart.style.color = "#E52521"
})
heart.addEventListener('mouseleave', () => {
    heart.classList.remove("ph-duotone")
    heart.style.color = ""
})

const cart = document.getElementById("cart")
cart.addEventListener('mouseenter', () => {
    cart.classList.add("ph-duotone")
    cart.style.color = "#0045a7"
})
cart.addEventListener('mouseleave', () => {
    cart.classList.remove("ph-duotone")
    cart.style.color = ""
})

const profile = document.getElementById("profile")
profile.addEventListener('mouseenter', () => {
    profile.classList.add("ph-duotone")
    profile.style.color = "#014b1b"
})
profile.addEventListener('mouseleave', () => {
    profile.classList.remove("ph-duotone")
    profile.style.color = ""
})