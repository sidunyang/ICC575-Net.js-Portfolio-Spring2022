import Layout from '../../components/Layout'
import Heading from '../../components/Heading'
import Container from '../../components/Container'
import Paragraph from '../../components/Paragraph'
import Image from 'next/image'
import Link from 'next/link'

import { getAllProjectSlugs, getSingleProjectData } from '../../lib/api'

// The waterfall

//1. Get a list of paths for Next.js to pre-render
export async function getStaticPaths(){
    const paths = await getAllProjectSlugs();
    return {
        paths,
        fallback:false
    }
}
//2. Get the data that belongs to each page
export async function getStaticProps({ params }){
    const projectData = await getSingleProjectData(params.id);
    return {
        props : {
            projectData
        }
    }
}
//3.Use the data inside your SingleProjectPage component
const SingleProjectPage = ({ projectData }) => {
     // console.log({projectData});
     const {title, image, content} = projectData.matchingProject;
    return <Layout>
        <Container>
            {/*featuredImage &&
            <Image
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText}
            width={featuredImage.node.mediaDetails.width}
            height={featuredImage.node.mediaDetails.height}
            />
*/} 
 <Image
            src={`/images/${image}`}
            alt={title}
            width={1500}
            height={1000}
            />
            
       <Heading level="1">{title}</Heading>
       <div dangerouslySetInnerHTML={{__html:content}} />
       <Paragraph>
           <Link href="/projects">
           <a>Back to all projects
           </a>
           </Link>
           </Paragraph>
       </Container>
    </Layout>
}
export default SingleProjectPage;
 