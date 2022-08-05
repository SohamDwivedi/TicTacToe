import React from 'react';
import './App.css';
let ar=[1,2,3];
class App extends React.Component {
  constructor(){
    super();
    this.state={
      turn:'X',
      win:''
    }
  }
  showToast(message="",color='green'){
    var x = document.getElementById("snackbar");
      x.className = "show";
      if(this.state.win===' Tie '){
        x.innerHTML = "It's a Tie";
      }else{
        x.innerHTML = message;
      }
      x.style.backgroundColor = color;
     
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  checkWin(id){
    let f=0,c=0;

        if(document.getElementById(0).innerHTML===document.getElementById(1).innerHTML && document.getElementById(0).innerHTML===document.getElementById(2).innerHTML && document.getElementById(0).innerHTML!==''){
          f=1;
          c=1;
        }
        if(document.getElementById(3).innerHTML===document.getElementById(4).innerHTML && document.getElementById(3).innerHTML===document.getElementById(5).innerHTML && document.getElementById(3).innerHTML!==''){
          f=1;
          c=2;

        }
        if(document.getElementById(6).innerHTML===document.getElementById(7).innerHTML && document.getElementById(6).innerHTML===document.getElementById(8).innerHTML && document.getElementById(6).innerHTML!==''){
          f=1;
          c=3;
        }
        if(document.getElementById(1).innerHTML===document.getElementById(4).innerHTML && document.getElementById(1).innerHTML===document.getElementById(7).innerHTML && document.getElementById(1).innerHTML!==''){
          f=1;
          c=4;
        }
        if(document.getElementById(2).innerHTML===document.getElementById(5).innerHTML && document.getElementById(2).innerHTML===document.getElementById(8).innerHTML && document.getElementById(2).innerHTML!==''){
          f=1;c=5;
        }
        if(document.getElementById(0).innerHTML===document.getElementById(4).innerHTML && document.getElementById(0).innerHTML===document.getElementById(8).innerHTML && document.getElementById(0).innerHTML!==''){
          f=1;c=6;
        }
        if(document.getElementById(6).innerHTML===document.getElementById(4).innerHTML && document.getElementById(6).innerHTML===document.getElementById(2).innerHTML && document.getElementById(6).innerHTML!==''){
          f=1;c=7;
        }
        console.log(c);
    if(f===1){
      console.log(c);
      
      this.setState({win:this.state.turn});
      this.showToast("winner is "+this.state.turn);
    }else{
      let j=0;
      for(let i=0;i<9;i++){
        if(document.getElementById(i).innerHTML!==''){
          j++;
        }
      }
      if(j===9){
         this.setState({win:' Tie '});
      }
    }
    return true;
  }
  render() {
    return (
      <body>
        <div id="snackbar">Some text some message..</div>
     
      <div style={{margin:'auto',width:'50%'}}><a style={{backgroundColor:'red',margin:'auto',width:'50%',border:'5px black',textAlign:'center'}} href="/#" disable={true} onClick={()=>{
        for(let i=0;i<9;i++){
          document.getElementById(i).innerHTML='';
        }
        this.setState({win:'',turn:'X'});
      }}>Reset</a></div>

      {this.state.win==='' && <div style={{margin:'auto',width:'50%'}}>
      {'Next Player :'}{this.state.turn}
      </div>}
     
        {this.state.win!=='' && this.state.win!=='Tie' && <div style={{margin:'auto',width:'50%'}}>
          {'Winner - '}{this.state.win}
        </div>}
        { this.state.win==='Tie' && <div style={{margin:'auto',width:'50%'}}>
          {this.state.win}
        </div>}

        <div id="article">
          {Object.keys(ar).map((e)=>{
            e=parseInt(e);
            let id1=3*e;
            let id2= 3*e+1;
            let id3=3*e+2;
            console.log(id1,id2,id3);
            return <div style={{overflow:'hidden'}}>
            <a href='/#' class='square' id={id1} onClick={()=>{
              console.log(document.getElementById(id1));
              if(document.getElementById(id1).innerHTML==='' && this.state.win===''){
                 let t=this.state.turn;
                if(t==='X'){
                  t='O';
                }else{
                  t='X';
                }
                this.setState({turn:t});

                document.getElementById(id1).innerHTML=this.state.turn;
                
                this.checkWin(id1);

              }else{
                if(document.getElementById(id1).innerHTML!=='' && this.state.win===''){
                  this.showToast("Kindly select another",'yellow');  
                }else{
                  this.showToast(this.state.win+" already won, please reset.",'red');
                }
              }
              
            }}>{}</a><a class='square' href='/#' id={id2} onClick={()=>{
              console.log(document.getElementById(id2));
              if(document.getElementById(id2).innerHTML==='' && this.state.win===''){
                let t=this.state.turn;
                if(t==='X'){
                  t='O';
                }else{
                  t='X';
                }
                this.setState({turn:t});
                document.getElementById(id2).innerHTML=this.state.turn;
                
                this.checkWin(id2);
               


              }else{
                if(document.getElementById(id2).innerHTML!=='' && this.state.win===''){
                  this.showToast("Kindly select another",'yellow');  
                }else{
                  this.showToast(this.state.win+" already won, please reset.",'red');
                }
              }
            }}>{}</a><a class='square' href='/#' id={id3} onClick={()=>{
              console.log(document.getElementById(id3));
               if(document.getElementById(id3).innerHTML==='' && this.state.win===''){
                 let t=this.state.turn;
                if(t==='X'){
                  t='O';
                }else{
                  t='X';
                }
                this.setState({turn:t});
                document.getElementById(id3).innerHTML=this.state.turn;
                
                this.checkWin(id3);
               

                

              }else{
                if(document.getElementById(id3).innerHTML!=='' && this.state.win===''){
                  this.showToast("Kindly select another",'yellow');  
                }else{
                  this.showToast(this.state.win+" already won, please reset.",'red');
                }
              }
            }}>{}</a>
            </div>
          })
             }
             
        </div>
      </body>
    )
  }
}

export default App;
