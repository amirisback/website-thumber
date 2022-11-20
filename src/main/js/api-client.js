async function fetchData() {
    let response = await fetch('https://amirisback.github.io/website-thumber/api/v1/gallery.json');

    if (response.status === 200) {
        let responseBody = await response.json();
        console.log(responseBody);

        let htmlBottomSlide = '';
        let htmlTopSlide = '';

        responseBody.data.forEach(data => {
            console.log(data.url);
            let htmlBottomSegment = `<div class="swiper-slide cover" style="background-image:url(${data.url})"></div>`;
            let htmlTopSegment = `<div class="swiper-slide cover" style="background-image: url(${data.url});">
                <a href="${data.url}" data-fancybox="gallery" class="zoom"><span class="icon-search"></span></a>
                <div class="img-info">
                    <span class="btn-toggle-expand"><span class="icon-call_made"></span></span>
                    <div class="img-info-content">
                        <h2>${data.name}</h2>
                        <div class="scrollbar-inner style-scrollbar-sm js-scrollbar-container">
                            <p class="mb-0">${data.description}</p>
                        </div>
                    </div>
                </div>
            </div>`;
            htmlTopSlide += htmlTopSegment;
            htmlBottomSlide += htmlBottomSegment;
        });

        let containerTopSlide = document.querySelector('.swiper-wrapper.top-slide');
        let containerBottomSlide = document.querySelector('.swiper-wrapper.bottom-slide');
        containerTopSlide.innerHTML = htmlTopSlide;
        containerBottomSlide.innerHTML = htmlBottomSlide;

    }
}

fetchData();