const app=Vue.createApp({
    data(){
        return{
        Books:[
            {   img:"imgs/1.jpg",
                title:"hi there",
                age:20,
                isFav:true
            },
            {   img:"imgs/2.jpg",
                title:"hi here",
                age:23,
                isFav:false
            },
            {   img:"imgs/3.jpg",
                title:"hello there",
                age:25,
                isFav:true
            },
            ],
            show:true,
            link:"http://www.google.com"
        }
    },
            methods:{
                mouseOver(event,data){
                    console.log("hi",event.type,data)
                },
                mouseLeave(){
                    console.log("leave")
                },
                dbDouble(){
                    console.log("double")
                },
                Fav(book){
                    book.isFav=!book.isFav
                }
            },
            computed:{
                filteredBooks(){
                    return this.Books.filter(book=>{
                        return book.isFav
                    })
                }
            }
});

app.mount("#app");