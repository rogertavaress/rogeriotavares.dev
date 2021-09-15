import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Container, SocialButton } from './styles';

const SocialArea: React.FC = () => {
  const handleClick = (href: string) => {
    window.open(href, '_blank');
  };

  return (
    <Container>
      <SocialButton onClick={() => handleClick("https://github.com/rogertavaress")}>
        <FaGithub size={25} />
      </SocialButton>
      <SocialButton onClick={() => handleClick("https://www.linkedin.com/in/rogertavaress")}>
        <FaLinkedinIn size={25} />
      </SocialButton>
      <SocialButton onClick={() => handleClick("https://twitter.com/rogertavaress")}>
        <FaTwitter size={25} />
      </SocialButton>
      <SocialButton onClick={() => handleClick("mailto:email@rogeriotavares.dev")}>
        <MdEmail size={25} />
      </SocialButton>
    </Container>
  );
}

export default SocialArea;