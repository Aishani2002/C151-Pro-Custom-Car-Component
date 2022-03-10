AFRAME.registerComponent("log", {
    schema: {
        messages: {type:"string", default:"Hi!"}
    },

    init: function(){
        console.log(this.data.messages)
    }
})

/*
AFRAME.registerComponent (name, definition) 
name: is the component name; it is of string data type. Here 'Log' is the name of the component. 
definition: contains the component definition. It is a JavaScript object
which has schema and lifecycle handler methods(init, update, tick, remove etc). 

Let’s take a quick overview of the basic structure of the component and terminology used here. 
schema: is an object that defines the property names, its types and default values. 
Schema defines the shape of the data.      
Lifecycle Handler Methods: 
init: is used to set up the initial state. It is called once when the component is initialized.
update: is used to modify the entity. 
remove: is used to undo all previous modifications to the entity. 
tick: is used for checking continuous changes. It is called on every render loop of the scene.
 */