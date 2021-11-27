import React from 'react'
import PropTypes from 'prop-types'
import DetailItemIcon from '../DetailItemIcon';
import DetailItem from '../DetailItem';

const Hometown = ({ hometown, isMine, edit }) => (
  <>
    {isMine ? (
      // if wall is mine, display edit option
      <>
        <div className="edit-toggler" onClick={edit}>
          <DetailItemIcon category={"plus"} />
          <span>Add your hometown</span>
        </div>
        {hometown && (
          <DetailItem category="hometown" info={hometown} />
        )}
      </>
    ) : (
      // if wall is not mine, do not display edit option
      <>
        {hometown ? (
          <DetailItem category="hometown" info={hometown} />
        ) : (
          <DetailItem category="hometown" info="" />
        )}
      </>
    )}
  </>
)

Hometown.propTypes = {
  hometown: PropTypes.string,
  isMine: PropTypes.bool.isRequired,
  edit: PropTypes.func,
}

export default Hometown;