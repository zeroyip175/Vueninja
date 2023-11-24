var ninja = Vue.createApp ({
    data(){
        return{
            title: 'Welcome to ninja world',
            ninjadatas: [
                {name: "Name: John Smith"},
                {health: "Health: 100/100"},
                {level: "lv: 20"}
            ]
        }
    }
})

ninja.mount('#gameapp')

