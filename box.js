AFRAME.registerComponent("move-box",{
    schema: {
        moveX: {type:"number", default:1}
    },

    tick:function(){
        this.data.moveX = this.data.moveX+0.03
        var pos = this.el.getAttribute("position")
        pos.x = this.data.moveX
        this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
    },
})

/*this.el.getAttribute(): to get the current values of the position attribute. 
this.el.setAttribute(): to set the updated value of the position attribute. 
this.el: gives reference to the entity as an HTML element.
*/