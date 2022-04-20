import styled from 'styled-components';

export const Container = styled.div`

  min-width: 320px;
  max-width: 540px;
  width: 100%;

  .items-nested {

    &.active {
      background-color: rgb(252, 252, 255);
    }

    .title {
      position: relative;
      padding: 18px 0px 18px 20px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      &:hover {
        background-color: rgb(250, 248, 255);
      }

      & > div {
        width: 100%;
      }

      span {
        margin-left: 10px;
      }

      .icon {
        width: 70px;
        display: flex;
        justify-content: flex-end;

        svg {
          margin-right: 20px;
          color: #000;
          transition: transform .4s;
          cursor: pointer;

          &.collapsed {
            transform: rotate(180deg);
          }
        }
      }

      .checkbox {
        cursor: pointer;
      }
    }

    .subitem {
      overflow: hidden;
      transition: flex 0.3s ease-out;
      height: auto;
      flex: 0;
      padding: 0px 0px 0px 20px;
    }
  }


  /* ============= RESPONSIVE ============= */
  @media only screen and (max-width: 768px) {
    width: 100%;
  }


`;
