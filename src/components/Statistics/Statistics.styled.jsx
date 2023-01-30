import styled from '@emotion/styled';

export const CardsItem = styled.div`
  display: flex;
  border: solid black 1px;
`;

export const Cards = styled.div`
  display: block;
  gap: 10px;
  border: solid black 1px;
  padding: 15px 20px;
  background-color: ${props => {
    switch (props.label) {
      case '.docx':
        return '#3da3c5';
      case '.pdf':
        return '#b366ff';
      case '.mp3':
        return '#d14747';
      case '.psd':
        return '#46b5de';
      default:
        return '#ffffff';
    }
  }};
`;

export const Docs = styled.div`
  text-align: center;
  font-size: 20px;
`;
export const DocsValue = styled.div`
  text-align: center;
  font-size: 25px;
`;
export const Text = styled.h2`
  text-align: center;
  font-size: 30px;
  color: grey;
  background-color: #eeeded;
  margin: 25px 0 0;
  padding: 30px 0;
`;
