var ninja = Vue.createApp ({
    data(){
        return{
            title: 'Welcome to ninja world',
            userInput: 'A',
            ninjaelement: "Ability: Fire ball jutsu ☄️",
            tabletitles:[
                {members:"Ninjas Members", health:"Health", level:"Level", dob: "Date of Birth"}
            ],
            ninjadatas: [
                {name:"john Smith", health: "30/100", level:10, dob:"1990-10-18"},
                {name:"naruto Uzumaki", health:"40/100", level:1, dob:"1991-02-03"},
                {name:"sasuke Uchiha", health: "100/100", level:80, dob:"1994-05-13"},
                {name:"shikamaru Nara",health:"98/100",level:76, dob:"1992-05-13"},
                {name:"hinata Hyuga",health:"98/100",level:73, dob:"1998-02-13"},
                {name:"jiraiya",health:"98/100",level:72, dob:"1993-10-18"},
                {name:"gaara",health:"98/100",level:71, dob:"1994-10-18"},
                {name:"rock Lee",health:"98/100",level:75, dob:"1995-10-18"},
                {name:"itachi Uchiha",health:"98/100",level:100, dob:"1997-10-18"}
            ],
            newninjastudent : " ",
            ninjaClassActive: true,
            ninjaStyleObject:{
                color: 'grey',
                fontSize: '50px'
            },
            conterobject:{
                conter1: 0,
                conter2: 0,
                conter3: 0,
                conter4: 0
            },
            //formdata
            message:'Type something here 1!',
            mutiplelinemessage:'Type something here 2!',
            checked: true,
            checkedInterests:[],
            selected:'',
            mutiple_selecte_options:[
                {text:'1', value:'one'},
                {text:'2', value:'two'},
                {text:'3', value:'three'}
            ],
            mutipleselected:[],
            gender:''

        }
    },
    computed:{
        sortedNinjaStudents: function(){
            return this.ninjadatas.reverse();
        }
    },
    methods: {
       addNinjaStudent(){
            if (this.newninjastudent.length > 0) {
                this.ninjadatas.push({name: this.newninjastudent,health: "0/100",level:0});
                this.newninjastudent = '';
            }
        },
        capitalizedfirstletter:function(value){
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        deleteNinjaStudent(index){
            this.ninjadatas.splice(index,1);
        },
        ageFromDOB: function(dob){
            return moment().diff(dob,"years");//if you need to use function like momnet -> add <script>index page</script>
        }, 
        bobButtonClick1: function(){
            this.conterobject.conter1++;
        },
        bobButtonClick2: function(){
            this.conterobject.conter2++;
        },
        bobButtonClick3: function(){
            this.conterobject.conter3++;
        },
        bobButtonClick4: function(){
            this.conterobject.conter4++;
        }

    },
    
    
})

ninja.mount('#gameapp')

