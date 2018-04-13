import { h } from "preact"
import styled from "styled-components"

import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"

const Footer = () => (
  <Wrapper>
    <div>
      <Link>
        <img src={facebook} alt="" />
      </Link>
      <Link>
        <img src={twitter} alt="" />
      </Link>
      <Link>
        <img src={instagram} alt="" />
      </Link>
    </div>
    <Text>
      © 2004-2017 Visit Charlotte. All Rights Reserved. 500 S. College Street,
      Suite 300.
    </Text>
  </Wrapper>
)

const Wrapper = styled.footer`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 160px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    box-shadow: 0px -10px 20px -10px rgba(0, 0, 0, 0.33) inset;
  }
`

const Link = styled.a.attrs({
  href: props => props.href || "#"
})`
  display: inline-block;
  width: 34px;
  margin: 10px 10px;
`

const Text = styled.p`
  padding: 0 20px;
  text-align: center;
  font-size: 12px;
  color: rgb(181, 181, 181);
`

export default Footer
