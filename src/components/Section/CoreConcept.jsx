export default function CoreConcept({ image, title, description, url }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {url && (
        <p>
          <a href={url}>Contact</a>
        </p>
      )}
    </li>
  );
}
