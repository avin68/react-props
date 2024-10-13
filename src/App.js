import User from "./User"
import "./App.css"
function App(){

    // let users = [{name:'avin' , age:35 , height:165},
    //              {name:'sali' , age:37 , height:189},
    //              {name:'suni' , age:39 , height:170}
    //             ]
    return(
        <div className="row">
            {/* <User name="avin" age="35" height="165" />
            <User name="sali" age="37" height="189" />
            <User name="suni" age="39" height="170" /> */}

            {/* <User name={users[0].name} age={users[0].age} height= {users[0].height}/>
            <User name={users[1].name} age={users[1].age} height= {users[1].height}/>
            <User name={users[2].name} age={users[2].age} height= {users[2].height}/> */}
            
            {/* 
                        <User {...users[0]} />
                        <User {...users[1]} />
                        <User {...users[2]} /> */}

            {/* <User name="avin" >
                <h1>اوین</h1>
            </User>
            <User name="sali" >
                <p>سالی</p>
            </User>
            <User name="suni" >
                <button>
                سونی
                </button>
            </User> */}


            <User  />
            <User name="sali" age="37" height="189" />
            <User name="suni" age="39" height="170" />


        </div>
    );
}

export default App