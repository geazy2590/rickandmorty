import React from "react";
import ReactPaginate from "react-paginate";
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  border: 1px solid gray;
  li a {
    padding: 0 1rem;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  return (
    <PaginationContainer>
      <MyPaginate
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        activeClassName="active"
        pageCount={info?.pages}
        onPageChange={pageChange}
      />
    </PaginationContainer>
  )
}

export default Pagination;