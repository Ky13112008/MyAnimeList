var i = 0
var time = 3000
var images = []

images[0] = 'https://taoanhdep.com/wp-content/uploads/2023/11/hinhnen-ato.jpg'
images[1] = 'https://vi.wappuri.com/wp-content/uploads/2022/07/ogp-1.jpg'
images[2] = 'https://m.media-amazon.com/images/M/MV5BMjVjZGU5ZTktYTZiNC00N2Q1LThiZjMtMDVmZDljN2I3ZWIwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX500_CR0,234,500,281_.jpg'
images[3] = 'https://a.storyblok.com/f/178900/1504x846/cce89fee50/yuji-megumi-and-nobara.png'

function changeImg() {
    document.slide.src = images[i]
    if (i < images.length - 1) {
        i++
    } else {
        i = 0
    }

    setTimeout("changeImg()", time)
}

window.onload = changeImg()