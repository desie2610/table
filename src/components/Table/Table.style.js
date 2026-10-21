
import styled from "styled-components";

export const TableWrapper = styled.section`
  width: min(100%, 960px);
  margin: 0 auto;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  background: linear-gradient(
    145deg,
    rgba(25, 22, 43, 0.96),
    rgba(13, 12, 24, 0.98)
  );
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  box-sizing: border-box;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  text-align: center;

  > div {
    width: 100%;
  }

  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const TableTitle = styled.h2`
  margin: 0;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-align: center;
`;

export const TableDescription = styled.p`
  margin: 8px 0 0;
  color: #9691ad;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
`;

export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  border-radius: 12px;
`;

export const StyledTable = styled.table`
  width: min(100%, 900px);
  border-collapse: collapse;
  text-align: left;
  white-space: nowrap;
  margin: 0 auto;
`;

export const TableHead = styled.thead`
  background: rgba(255, 255, 255, 0.035);
`;

export const TableHeading = styled.th`
  padding: 16px;
  color: #aaa3c7;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  transition: background 0.2s ease;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  &:hover {
    background: rgba(139, 92, 246, 0.08);
  }

  &:focus-visible {
    outline: 2px solid #c4b5fd;
    outline-offset: -2px;
  }
`;

export const TableCell = styled.td`
  padding: 18px 16px;
  color: #e7e3f5;
  font-size: 14px;
`;

export const TableBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 8px;
  color: #c4b5fd;
  background: rgba(139, 92, 246, 0.14);
  font-size: 12px;
  font-weight: 600;
`;
