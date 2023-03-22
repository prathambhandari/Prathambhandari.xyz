import React, { Component } from "react";

class Home extends Component{
    constructor(){
        super();
        this.state = {
            title: ''
        }
    }
    myArray=['Hello','Hola','مرحبًا','ನಮಸ್ಕಾರ','नमस्ते','Bonjour','привет','salut'];

    componentDidMount(){
        setInterval(()=>{
            this.setState({title:this.myArray[Math.floor(Math.random()*this.myArray.length)]})
        },1500);
    }
    render(){
        return(
            <div>
            <div className="flex flex-col justify-center items-center bg-slate-100  h-screen p-36">
            <li className=" h-52 w-52 bg-rose-200 blur-3xl rounded-3xl self-start animate-spin-slow list-none z-0"></li>
            <h1 className=" w-auto font-bold p-10 z-20 text-5xl sm:text-5xl md:text-7xl lg:text-7xl 2xl:text-7xl">{this.state.title}</h1> 
            <h2 className="flex justify-center font-sans z-20 w-96 text-lg sm:text-lg md:text-xl lg:text-xl 2xl:text-xl">Im web Developer,</h2>
             <li className=" h-52 w-52 bg-teal-200 blur-3xl rounded-3xl self-end animate-spin-slow list-none z-0"></li>
            </div>
      
            </div>
        )
    }

}




export default Home;