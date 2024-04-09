import styled from 'styled-components';

export const Icons = styled.img`
  width: 15px;
  height: 13px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #717272;
`;

export const FlexContainer = styled.span`
justify-content: space-between;
gap: 2px;
display: flex;
`

export const TableRow = styled.tr<any>`
  background-color: ${props => (props.isSelected ? '#CFD0D0' : 'white')};
  border-right:0.5px solid #CFD0D0;
  border-left:0.5px solid #CFD0D0;
  cursor: pointer;

  @media (max-width: 768px) {
    border-right: 1px solid #CFD0D0;
    border-left: 1px solid #CFD0D0;
    }
`;




export const TableHeader = styled.th`
font: normal normal bold 14px/14px Inconsolata;
  height: 42px;
  padding: 0 15px;
  text-align: left;
  opacity: 1;
  color: white;
`;

export const TableCell = styled.td`
  height: 42px;
  padding: 0px 15px;
  font: normal normal bold 14px/14px Inconsolata;
  border-bottom: 0.5px solid #CFD0D0;
  opacity: 1;

  @media (max-width: 768px) {
    border-bottom: 1px solid #CFD0D0;
    }
`;

export const ContainerText = styled.div`
text-align: center;
  padding: 20px 15px;
`;
