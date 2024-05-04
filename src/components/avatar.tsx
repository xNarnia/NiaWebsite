import Photo from '../img/photo.jpg'
import '../css/component_avatar.css'

export function Avatar({size = 5 }) {
    const borderSize = (size * .06).toFixed(3);
    return <img style={{width: size + "em", border: borderSize + "em #fff solid"}} className='avatar' src={Photo} />
}