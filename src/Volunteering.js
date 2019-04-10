import React from 'react'
import Section from './Section'

const items = [{
  title: 'Highlands Ranch HS',
  subtitle: 'Debate Coach',
  location: 'Denver', time: '2008-2010',
  bullets: [
    <p className="section-item-bullet">Teaching kids how to argue</p>,
    <p className="section-item-bullet">Travel national circuits</p>,
  ]
}]

const Volunteering = () => (
  <Section
    heading='Volunteering'
    items={items}
    />
)

export default Volunteering

