import styled from "@emotion/styled";

export const ParentStyled = styled.div<{ bg: string }>`
  width: 274px;
  height: 336px;
  border-radius: 20px;
  background: linear-gradient(rgba(0, 0, 0, 0) 10%, rgba(29, 64, 128, 0.95) 90%),
    url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 150%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  transition: background-size 0.5s ease-in-out;
  position: relative;
  z-index: 1;
  color: white;

  &:hover {
    background-size: 160%; /* work with the background-size */
  }

  &::before {
    border-radius: 20px;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
