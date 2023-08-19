var tl = gsap.timeline()

tl.from("#nav img,#nav h3,#nav h4,#nav button",{
    y:-100,
    duration:2,
    delay:.5,
    opacity:0,
    stagger:.2,
})

tl.from("#hero h1",{
    y:200,
    opacity:0,
    stagger:.3,
})

tl.from("#images>img",{
    scale:0,
    opacity:0,
    stagger:.2,
})

tl.from("h5",{
    scale:0,
    opacity:0,
})

tl.to("h5",{
    y:50,
    repeat:-1,
    duration:.8,
    yoyo:true
})
