import React, { Component } from 'react';
import TeamMember from './TeamMember';
import memberinfo from './memberinfo';

class Team extends Component {
    constructor() {
        super();
        this.state = {
            info: memberinfo,
            members: [],
            counter: 0,
            noMoreMembers: false,
        };
    }

    clickEvent = () => {
        if (this.state.counter < this.state.info.length) {
            const newMember = this.state.info[this.state.counter];
            this.setState(prevState => ({
                members: [...prevState.members, newMember],
                counter: prevState.counter + 1,
                noMoreMembers: false
            }));
        } else {
            this.setState({ noMoreMembers: true });
        }
    };

    render() {
        const memberElements = this.state.members.map(member => (
            <TeamMember 
                key={member.id}
                img={member.img}
                name={member.name}
                position={member.position}
                phone={member.phone}
                email={member.email}
                website={member.website}
            />
        ));

        return (
            <div className="row">
                {this.state.noMoreMembers && (
                    <div className="alert alert-warning w-100 text-center">
                        No more team members to show.
                    </div>
                )}

                <button className="btn btn-primary btn-lg btn-block" onClick={this.clickEvent}>Click Me!</button>
                {memberElements}
            </div>
        );
    }
}

export default Team;
