import React from 'react';

import { faJava, faPython, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import {
  faAtom,
  faCode,
  faCogs,
  faDatabase,
  faCodeBranch,
  faClipboardList,
  faVial,
  faBox,
  faPlug
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TechIconProps {
  type: string;
}

class TechIcon extends React.Component<TechIconProps> {
  render() {
    let icon;

    switch (this.props.type) {
      case 'api':
        icon = <FontAwesomeIcon icon={faPlug} />;
        break;
      case 'db':
        icon = <FontAwesomeIcon icon={faDatabase} />;
        break;
      case 'infra':
        icon = <FontAwesomeIcon icon={faCogs} />;
        break;
      case 'java':
        icon = <FontAwesomeIcon icon={faJava} />;
        break;
      case 'js':
        icon = <FontAwesomeIcon icon={faJsSquare} />;
        break;
      case 'language':
        icon = <FontAwesomeIcon icon={faCode} />;
        break;
      case 'manage':
        icon = <FontAwesomeIcon icon={faClipboardList} />;
        break;
      case 'package_manager':
        icon = <FontAwesomeIcon icon={faBox} />;
        break;
      case 'python':
        icon = <FontAwesomeIcon icon={faPython} />;
        break;
      case 'react':
        icon = <FontAwesomeIcon icon={faAtom} />;
        break;
      case 'ruby':
        icon = <FontAwesomeIcon icon={faGem} />;
        break;
      case 'test':
        icon = <FontAwesomeIcon icon={faVial} />;
        break;
      case 'version_control':
        icon = <FontAwesomeIcon icon={faCodeBranch} />;
        break;
      default:
        icon = <FontAwesomeIcon icon={faCode} />;
    }
    return icon;
  }
}

export default TechIcon;
