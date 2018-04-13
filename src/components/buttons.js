import { h } from "preact"
import styled, { css } from "styled-components"

const normal = css`
  color: rgb(249, 129, 0);
  border: 2px solid #f98100;
  background: #fff;
  &:hover {
    background: rgb(249, 129, 0);
    color: #fff;
  }
`

const info = css`
  color: #ffffff;
  border: 2px solid #79bd1a;
  background: #79bd1a;
`

export const Button = styled.a`
  ${props => (props.info ? info : normal)}
  font-size: ${props => (props.small ? "13px" : "15px")};
  height: ${props => (props.small ? "37px" : "50px")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 200ms linear;

  &:not(:first-child) {
    margin-left: 20px;
  }
`
