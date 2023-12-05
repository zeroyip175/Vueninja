var style = Vue.createApp ({
    data(){
        return{
            ninjaClassActive: true,
            ninjaStyleObject:{
                color: 'orange',
                fontSize: '50px'
            }
        }

    }
})

style.mount('#gameapp')