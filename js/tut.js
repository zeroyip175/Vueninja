var ninja = Vue.createApp ({
    data(){
        return{
            title: 'Welcome to ninja world',
            ninjaelement: "Ability: Fire ball jutsu ☄️",
            tabletitles:[
                {members:"Ninjas Members", health:"Health", level:"Level"}
            ],
            ninjadatas: [
                {name:"John Smith", health: "30/100", level:10},
                {name:"Naruto Uzumaki", health:"40/100", level:1},
                {name:"Sasuke Uchiha", health: "100/100", level:80},
                {name:"Shikamaru Nara",health:"98/100",level:76},
                {name:"Hinata Hyuga",health:"98/100",level:73},
                {name:"Jiraiya",health:"98/100",level:72},
                {name:"Gaara",health:"98/100",level:71},
                {name:"Rock Lee",health:"98/100",level:75},
                {name:"Itachi Uchiha",health:"98/100",level:100}
            ],
            newninjastudent : " ",
        }
    },
    methods: {
       addNinjaStudent(){
            if (this.newninjastudent.length > 0) {
                this.ninjadatas.push({name: this.newninjastudent,health: "0/100",level:0});
                this.newninjastudent = '';
            }
        }
    },
})

ninja.mount('#gameapp')

