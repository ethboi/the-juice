export default function ContentCard({ image, title, description, url }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h2 className="main-h2-h2">{title}</h2>
      <p>{description}</p>
      {url && (
        <p>
          <a href={url} class="btn">
            Contact
          </a>
        </p>
      )}
    </li>
  );
}
