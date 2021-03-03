import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

import { IconButton } from '@material-ui/core';


const SocialIcon = ({ type, link, className }) => {
  const openLink = (link) => {
    window.open(link, '_blank');
  };

  const setIcon = (type) => {
    switch (type) {
      case 'facebook':
        return <FacebookIcon />;
      case 'twitter':
        return <TwitterIcon />;
      case 'instagram':
        return <InstagramIcon />;
      default:
        return '';
    }
  };

  return (
    <IconButton onClick={() => openLink(link)} className={className}>
      {setIcon(type)}
    </IconButton>
  );
};


export default SocialIcon;