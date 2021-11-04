import "./info-style.scss";
import personIcon from "../assets/person_icon.svg";

const InfoTable = ({ charInfo }) => {
  console.log('INFO: ', charInfo)
  return (
  <div className="table-container">
    <table>
    <tbody>
      <tr>
        <td>ID</td>
        <td className="td-center">{charInfo?.id || "???"}</td>
      </tr>
      <tr>
        <td>Status</td>
        <td className="td-center">{charInfo?.status || "???"}</td>
      </tr>
      <tr>
        <td>Species</td>
        <td className="td-center">{charInfo?.species || "???"}</td>
      </tr>
      <tr>
        <td>Type</td>
        <td className="td-center">{charInfo?.type || "???"}</td>
      </tr>
      <tr>
        <td>Gender</td>
        <td className="td-center">{charInfo?.gender || "???"}</td>
      </tr>
      <tr>
        <td>Origin</td>
        <td className="td-center">{charInfo?.origin?.name || "???"}</td>
      </tr>
      <tr>
        <td>Location</td>
        <td className="td-center">{charInfo?.location?.name || "???"}</td>
      </tr>
      </tbody>
    </table>
  </div>);
};

const InfoPanel = ({ char, isLoaded }) => {
  const { name, id, status, species, type, gender, origin, location, image } = char;
  const info = `#${id}, ${status}, ${species}, ${gender}.`;

  let displayImage;
  let displayName;
  let displayOrigin;
  let displayLocation;
  let displayInfo;
  switch (isLoaded) {
    case 'initial':
      displayImage = <img className="person-icon" src={personIcon} />;
      displayName = "???";
      displayInfo = "";
      displayOrigin = "";
      displayLocation = "";
      break;
    case 'waiting':
      displayImage = (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
      displayName = "???";
      displayInfo = "";
      displayOrigin = "";
      displayLocation = "";
      break;
    case 'loaded':
      displayImage = <img src={image} alt={name} />;
      displayName = name;
      displayInfo = info;
      displayOrigin = origin.name;
      displayLocation = location.name;
      break;
    default:
      throw Error('the value of "isLoaded" is incorrect.');
  }

  return (
    <div className="info-panel">
      {displayImage}
      <div className="side-info">
        <div className="name">{displayName}</div>
        <InfoTable charInfo={char} />
        {/* <div className="char-info">{displayInfo}</div>
        <div className="char-info">
          {displayOrigin}
        </div>
        <div className="char-info">
          {displayLocation}
        </div> */}
      </div>
    </div>
  );
};

export default InfoPanel;