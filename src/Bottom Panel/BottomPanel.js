import githubIcon from '../assets/GitHub-Icon.svg';
import './bottom-style.scss';

const BottomPanel = () => {
  return (
    <footer className="bottom-panel">
      <div>Made by</div>
      <a href="https://github.com/kasparas-ban">
        <img src={githubIcon} className="icon" />
      </a>
    </footer>
  );
};

export default BottomPanel;