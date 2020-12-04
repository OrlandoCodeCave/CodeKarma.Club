import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import background from '../../assets/1oiryi.jpg'

const TableColor = styled.div`
  background-color: black;
  width:  100%;
  margin: 0 auto;
  padding: 5%;
  padding-top: 50px;
  flex: 1;
  z-index: 1;
`;
export const Layout = (props) => (
  <Container className="flex-column d-flex flex-grow-1">
    {props.children}
  </Container>
);
export const Table = (props) => (
  <TableColor>
    <div>{props.children}</div>
  </TableColor>
);
export const Indent = styled.div`
  width:  90%;
  margin: 0 auto;
`;
export const SmallText = styled.div`
    top : center;
    left :center;
    white-Space : pre-line;
    font-size : 15px;
    color : #efefef;`;

export const HeaderText = styled.div`
    padding-top: 10px;
    top : center;
    left :center;
    white-Space : pre-line;
    font-size : 50px;
    color : #efefef;
`;
export const PageTitleText = styled.div`
    top : center;
    left :center;
    text-align : center;
    white-Space : pre-line;
    font-size : 80px;
    color : #efefef;
`;
export const NotFound = styled.div`
    background: url(${background}) no-repeat;
    background-size: 100% 100%;
    position: relative;
    z-index: -1;
    min-height: 100%;
    min-width: 1024px;
    margin-top: 5%;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
`;
