

export const Prfilecomponenet = props =>{
const style={color:'green',textAlign:'center',fontSize:'60px'}
     return (
        <div style={style}>
     
       <p1> {props.name} </p1><br/>
       <p2> {props.bio}</p2><br/>
       <p3>{props.profession}</p3><br/>
       <img src={props.src} alt='pic'/>
      {props.children}
       </div>
            )
    }