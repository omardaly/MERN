import React, { Component } from 'react'

class PersonCard extends Component {
  render() {
    return (
    <div>
      <h1>My name is { this.props.person.firstname } { this.props.person.lastname }</h1>
      <p> Age:{ this.props.person.age }</p>
      <p> Hair color :{ this.props.person.haircolor }</p>
    </div>
    // <div>
    //   {this.props.person.map(p => 
    //     <div>
    //     <h2>{p.firstname}</h2>
    //     <p>{p.age}</p>
    //     </div>
    //     )}
    // </div>
    )
  }
}
export default PersonCard
