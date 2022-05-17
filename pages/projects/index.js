import Layout from '../../components/Layout'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Row from '../../components/Row'
import Col from '../../components/Col'
import Paragraph from '../../components/Paragraph'
import Link from 'next/link'
import Image from 'next/image'

import { getProjects } from '../../lib/api'

export async function getStaticProps(){
    const projects =  await getProjects();
    
    return {
        props : {
            projects
        }
    }
}
const ProjectsPage = ({projects}) =>{
 
    return <Layout>
        <Container>
            <Heading level="1">Projects</Heading>
            <Row>
                {projects.map((project, index) => {
                    const { title, slug, featuredImage, content} = project.node;
                    return <Col key={index}
                    xs="6"
                    sm="4"
                    md="3"
                    >
                        {featuredImage &&
                        <Image
                        src={featuredImage.node.sourceUrl}
                        alt={featuredImage.node.altText}
                        width={featuredImage.node.mediaDetails.width}
                        height={featuredImage.node.mediaDetails.height}
                        />
                    }
                        <Heading level="3">
                            {title}
                        </Heading>
                        <Paragraph>
                            <Link href={`/projects/${slug}`}>
                            <a>
                             View Project 
                             </a>
                             </Link>
                        </Paragraph>
                    </Col>
                })}
            </Row>
        </Container>
    </Layout>
} 
export default ProjectsPage;