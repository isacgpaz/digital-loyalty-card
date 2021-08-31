import styled from "styled-components";

export const TableUsers = styled.table`
  width: 100%;
  
  background: var(--gray);
  border: 1px solid var(--gray-light);
  border-spacing: 0;
  border-radius: 4px;
  color: var(--black);

  font-size: 1.1rem;

  td, tr, th{
    border: 1px solid var(--gray-light);
    border-top: none;
    padding: .75rem;
    width: 100%;
  }

  th{
    text-transform: uppercase;
    color: var(--gray-dark);
    font-size: .875rem;

    &:first-child{
      text-align: left;
    }
  }

  td, th{
    &:first-child{
      border-left: none;
    }

    &:last-child{
      border-right: none;
    }
  }

  td{
    &:first-child{
      display: flex;
      flex-direction: column;
      gap: .12rem;
      
      p{
        font-weight: 500;
      }
  
      span{
        font-size: 1rem;
      }

      small{
        display: flex;
        align-items: center;
        gap: .25rem;

        color: var(--gray-dark);
      }
    }

    &:last-child {
      text-align: center;
      font-size: 1.25rem;
    }
  }
`