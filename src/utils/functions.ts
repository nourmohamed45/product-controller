/**
 * 
 * @param {string} text - the text to be sliced
 * @param {number} [length=50] - the length of the sliced text
 * @returns {string} - the sliced text with ellipsis if it exceeds the length
 */
export const txtSlicer = (text: string, length: number = 50) => {
  if (text.length > length) {
    return text.slice(0, length) + "..."
  } else {
    return text
  }
}

export const numberWithCommas = (x: string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}