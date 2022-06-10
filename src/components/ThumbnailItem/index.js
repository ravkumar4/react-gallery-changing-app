// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateThumbnailImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onChangeImage = () => {
    updateThumbnailImage(id)
  }

  return (
    <>
      <li className="thumbnail-item">
        <button type="button" className="button">
          <img
            className="image"
            src={thumbnailUrl}
            alt={thumbnailAltText}
            onClick={onChangeImage}
          />
        </button>
      </li>
    </>
  )
}
export default ThumbnailItem
