import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as pageStyle from './index.module.css'
import * as data from '../../data/projects.json'

const ProjectCard = ({data, index=0})=>{
  const {name, creators, link} = data;
  return <a href={link} className={pageStyle.projectCard} style={{animationDelay:Math.random()*0.3+'s'}} tabIndex={0}>
    <h2>{name}</h2>
    <p>Created by <strong>{creators}</strong></p>
  </a>
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={pageStyle.projectsContainer}>
      {data.map((element, i)=><ProjectCard key={element.name+element.creators} data={element} index={i} />)}
    </div>
  </Layout>
)

export default IndexPage
