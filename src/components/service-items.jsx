// Props 
// if we want to use destructuring concept then we need to pass the keys as a parameters

export default function ServiceItems({image, title, description}){
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }