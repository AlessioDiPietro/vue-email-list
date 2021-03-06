// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus Far comparire gli indirizzi email solamente quando sono stati tutti generati.


const app = new Vue({

    el: "#app",
    data:{
        emailList: []
    },
    mounted(){
        for (i = 0; i < 10; i++){
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(result =>{
                    this.emailList.push(result.data.response)
                    console.log(this.emailList)
                })
        }
        
    }

    
});
