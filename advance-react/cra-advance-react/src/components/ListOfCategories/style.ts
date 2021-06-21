import styled, { css } from 'styled-components';

interface IListUL {
  fixed: boolean;
}

export const List = styled.ul<IListUL>`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 0px;
  ${props =>
    props.fixed &&
    css`
       {
        background-color: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20pz rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(0.5);
        z-index: 1;
      }
    `}
`;

export const Item = styled.li`
  padding: 0px 8px;
`;
