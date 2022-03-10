AFRAME.registerComponent("rotate-box", {
    schema:{
        box: {type:"number", default:1}
    },

    tick:function(){
        this.data.box = this.data.box+5
        var rot = this.el.getAttribute("rotation")
        rot.x = this.data.box
        rot.y = this.data.box
        this.el.setAttribute("rotation", {x:rot.x, y:rot.y, z:rot.z})
    },
})