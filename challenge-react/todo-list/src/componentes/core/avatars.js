export function Avatar({ gentlemen }) {
  const listItems = gentlemen.map((item) => (
    <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img className="gentleman__avatar" src={item.img} alt=" " />
        <span className="gentleman__initial">{item.letter}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{item.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">{item.profession}</span>
            {item.title2}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">{item.status}</span>
            {item.title3}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">{item.twitter}</span>
            {item.title4}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check">✓</i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times">
        X
      </i>
    </li>
  ));
  const template = <ul className="gentlemen">{listItems}</ul>;
  return template;
}
