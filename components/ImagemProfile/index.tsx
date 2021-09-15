import Image from 'next/image';
import ProfileImage from '../../public/assets/others/profile.jpeg';

import { Container } from './styles';

const ImagemProfile = () => {
  return (
    <Container>
      <Image src={ProfileImage} alt="" />
    </Container>
  );
};

export default ImagemProfile;
