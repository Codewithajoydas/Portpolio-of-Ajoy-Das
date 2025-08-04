import "../styles/Card.scss";
const Card = ({ img, img1, title, des, goToUrl, goToTitle, likeUrl }) => {
  return (
    <div className="project">
      <div className="img">
        <img src={img} alt={img} id="one" />
        <img src={img1} alt={img1} id="two" />
      </div>
      <div className="card-info">
        <div className="info">
          <h3>{title}</h3>
          <p>{des}</p>
          <a href={goToUrl}>{goToTitle}</a>
        </div>
        <a href={likeUrl}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-heart-icon lucide-heart"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default Card;
