import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'

import './index.css'

const PaginationButton = props => {
  const {firstPage, lastPage, onPaginationButtonClicked} = props

  const rightArrowClick = () => {
    if (firstPage > 0 && firstPage < lastPage) {
      const pageNo = firstPage + 1
      onPaginationButtonClicked(pageNo)
    }
  }

  const leftArrowClick = () => {
    if (firstPage > 1 && firstPage < lastPage + 1) {
      const pageNo = firstPage - 1
      onPaginationButtonClicked(pageNo)
    }
  }

  return (
    <div className="pagination-button-container">
      <button
        type="button"
        className="pagination-button"
        onClick={leftArrowClick}
      >
        <FaChevronLeft className="pagination-arrow-icons" />
      </button>
      <p className="pagination-page-numbers">{`${firstPage} of ${lastPage}`}</p>
      <button
        type="button"
        className="pagination-button"
        onClick={rightArrowClick}
      >
        <FaChevronRight className="pagination-arrow-icons" />
      </button>
    </div>
  )
}

export default PaginationButton
