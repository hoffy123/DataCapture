var app = new Vue({
    el:'#app',
    data(){
        return{
        displayText: "Mendel CheckList Aplication",
        checklist:[
            {displayText: 'do uni work', done: true},
            {displayText: 'go for run at 4pm', done: true},
            {displayText: 'doctor appointment Monday 12pm', done: false},
            {displayText: 'go to shop buy desk chair ', done: false}
        ]
    };// use ; end data()
    },//use , Vue app
    methods: {
        toggle(list){
            list.done !=  list.done
        }       
    }
});
app.checklist.push({ displayText: 'New Item', done: false })