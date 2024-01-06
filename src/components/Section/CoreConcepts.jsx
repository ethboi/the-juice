import { CORE_CONCEPTS } from '../../data.js'
import CoreConcept from './CoreConcept.jsx';

const CoreConcepts = () => {

return(
    <section id="core-concepts">
    <h2>Choose one of these Zings</h2>
          <ul className="core-concepts-list">
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
    </section>
)}

export default CoreConcepts;