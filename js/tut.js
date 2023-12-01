var ninja = Vue.createApp ({
    data(){
        return{
            title: 'Welcome to ninja world',
            ninjaelement: "Ability: Fire ball jutsu ☄️",
            tabletitles:[
                {members:"Ninjas Members", health:"Health", level:"Level"}
            ],
            ninjadatas: [
                {name:"john Smith", health: "30/100", level:10},
                {name:"naruto Uzumaki", health:"40/100", level:1},
                {name:"sasuke Uchiha", health: "100/100", level:80},
                {name:"shikamaru Nara",health:"98/100",level:76},
                {name:"hinata Hyuga",health:"98/100",level:73},
                {name:"jiraiya",health:"98/100",level:72},
                {name:"gaara",health:"98/100",level:71},
                {name:"rock Lee",health:"98/100",level:75},
                {name:"itachi Uchiha",health:"98/100",level:100}
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
        },

        deleteNinjaStudent(index){
            this.ninjadatas.splice(index,1);
        },
        capitalizedfirstletter(value){
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    },
    
})

ninja.mount('#gameapp')

