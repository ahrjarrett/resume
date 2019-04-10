import React, { Component } from 'react'
import { SectionContainer } from './Containers'
import SectionItem from './SectionItem'

export default class Section extends Component {

  render() {
    return (
      <SectionContainer>
	<h2 className='section-header'>
	  {this.props.heading}
	</h2>
	{this.props.items.map((item, i) => <SectionItem key={i} item={item}/>)}

      </SectionContainer>
    )
  }
}

