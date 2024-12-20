import { Button, List } from 'antd';
import { darken } from 'polished';
import styled from 'styled-components';

export const StyledCourseCell = styled(List.Item)`
  display: flex;
  flex-direction: column;
  padding: 8px 20px !important;
  align-items: flex-start;
  flex-wrap: nowrap;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledCourseCellContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 55%;
    margin-bottom: 0;
    margin-right: 8px;
  }
`;

export const StyledCourseCellThumb = styled.div`
  margin-right: 16px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }

  & img {
    width: 68px;
    height: 68px;
    overflow: hidden;
    display: block;
    object-fit: cover;
    border-radius: 4px !important;
  }
`;

export const StyledCourseCellInfo = styled.div`
  width: calc(100% - 76px);

  & h3 {
    display: inline-block;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin: 0 0 2px 0;
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & p {
    margin: 0;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledCourseCellAction = styled.div`
  display: flex;
  align-items: center;
  /* width: 100%; */

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-left: auto;
    /* width: 45%; */
    justify-content: flex-end;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: auto;
    }
  }

  & .ant-row {
    flex-wrap: nowrap;
  }
`;

export const StyledCourseCellBtn = styled(Button)`
  white-space: nowrap;
  width: 105px;
  padding: 8px 9px 7px;
  font-size: 13px;
  height: auto;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledMyCourseHeader = styled.div`
  margin-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledMyCategoryItem = styled.div`
  margin-right: 12px;
  margin-bottom: 4px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 12px;
  }
`;

export const StyledCategoryBadge = styled.span`
  cursor: pointer;
  background-color: ${({ theme }) =>
    darken(0.078, theme.palette.background.default)};
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 6px 12px 7.1px;
  border-radius: 30px;
  display: block;
  transition: all 0.2s ease;

  &.active {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
