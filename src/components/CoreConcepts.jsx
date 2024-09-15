import ServiceItems from './service-items';
import {CORE_CONCEPTS} from '../data.js';

export default function CoreConcepts(){
    return(
        <section id="core-concepts">
        <h2>Service Items</h2>
        <ul>
        {/* Generate List by using map */}
        {CORE_CONCEPTS.map((conceptItem)=>(
        <ServiceItems key={conceptItem.title}  {...conceptItem} />
        ))}


        {/* Another way of doing dynamically  */}
        {/* <ServiceItems title={CORE_CONCEPTS[0].title} image={CORE_CONCEPTS[0].image} description={CORE_CONCEPTS[0].description}></ServiceItems> */}
            
        {/* This is very short and handy */}
        {/* //   <ServiceItems {...CORE_CONCEPTS[1]}></ServiceItems> */}
        
        {/* One way of using props
        <ServiceItems
            image={serviceItemImg}
            title="React Core Concepts"
            description="Learn the core concepts of React that you will need for any React app you are going to build."
        /> */}
        
        </ul>
    </section>
    );
}