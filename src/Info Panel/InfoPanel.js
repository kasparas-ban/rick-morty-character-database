import "./info-style.scss";
import personIcon from "../assets/person_icon.svg";

const InfoTable = ({ charInfo }) => {
  return (
  <div className="table-container">
    <table>
    <tbody>
      <tr>
        <td className="td-label">ID</td>
        <td className={`td-center${charInfo?.id ? "" : " td-label"}`}>{charInfo?.id || "???"}</td>
      </tr>
      <tr>
        <td className="td-label no-info">Status</td>
        <td className={`td-center${charInfo?.id ? "" : " td-label"}`}>{charInfo?.status || "???"}</td>
      </tr>
      <tr>
        <td className="td-label">Species</td>
        <td className={`td-center${charInfo?.id ? "" : " td-label"}`}>{charInfo?.species || "???"}</td>
      </tr>
      <tr>
        <td className="td-label">Type</td>
        <td className={`td-center${charInfo?.id ? "" : " td-label"}`}>{charInfo?.type || "???"}</td>
      </tr>
      <tr>
        <td className="td-label">Gender</td>
        <td className={`td-center${charInfo?.id ? "" : " td-label"}`}>{charInfo?.gender || "???"}</td>
      </tr>
      <tr>
        <td className="td-label">Origin</td>
        <td className={`td-center${charInfo?.id ? "" : " td-label"}`}>{charInfo?.origin?.name || "???"}</td>
      </tr>
      <tr>
        <td className="td-label">Location</td>
        <td className={`td-center${charInfo?.id ? "" : " td-label"}`}>{charInfo?.location?.name || "???"}</td>
      </tr>
      </tbody>
    </table>
  </div>);
};

const InfoPanel = ({ char, isLoaded }) => {
  let displayImage;
  let displayName;

  switch (isLoaded) {
    case 'initial':
      displayImage = <img className="person-icon" src={personIcon} alt="Placeholder" />;
      displayName = "???";
      break;
    case 'waiting':
      // displayImage = (
      //   <div className="lds-ellipsis">
      //     <div></div>
      //     <div></div>
      //     <div></div>
      //     <div></div>
      //   </div>
      // );
      displayImage = <img className="person-icon" src={personIcon} alt="Placeholder" />;
      displayName = "???";
      break;
    case 'loaded':
      displayImage = <img src={char.image} alt={char.name} />;
      displayName = char.name;
      break;
    default:
      throw Error();
  }

  return (
    <div className="info-panel">
      {displayImage}
      <div className="side-info">
        <div className={`name${displayName ? "" : " gray-name"}`}>{displayName}</div>
        <InfoTable charInfo={char} />
      </div>
    </div>
  );
};

export default InfoPanel;