let timeline = gsap.timeline({
    repeat: -1,
})

timeline.to(".imagecontainer",{
    ease: Expo.easeInOut,
    width: "100%",
    stagger:2,
    duration:2,
    // opacity:2,
},"a")
timeline.to(".text h1" ,{
    ease: Expo.easeInOut,
    top: "0%",
    stagger:2,
    duration:2,
    // opacity:2,
},"a")
timeline.to(".text h1",{
    delay:2,
    ease: Expo.easeInOut,
    stagger:2,
    duration:2,
    // opacity:2,
    top: "-100%",
},"a")
timeline.to(".textp p" ,{
    ease: Expo.easeInOut,
    top: "0%",
    stagger:2,
    duration:2,
    // opacity:2,
},"a")
timeline.to(".textp p",{
    delay:2,
    ease: Expo.easeInOut,
    stagger:2,
    duration:2,
    top: "-100%",
},"a")