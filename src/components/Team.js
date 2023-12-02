import React, {Component} from 'react'
import TeamMember from './TeamMember';
import memberinfo from './memberinfo'
class Team extends Component{
    constructor(){
        super()
        this.state = {
            info : memberinfo 
        }
    }

    clickEvent(){
        console.log(memberinfo);
    }

mapping(x){
    const members = x.map(  member => <TeamMember 
        key={member.id}
        img={member.img}
        name={member.name}
        position={member.position}
        phone={member.phone}
        email={member.email}
        website={member.website}
        />);
    return members
}

   render(){
    return(
        <div className="row">
            <button className="btn btn-primary btn-lg btn-block" onClick={this.clickEvent}>Click Me!</button>
          {this.mapping(this.state.info)}
        </div>
    )
   }
}

export default Team;