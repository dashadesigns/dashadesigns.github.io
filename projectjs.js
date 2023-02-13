// gallery item filter

const filterButtons = document.querySelectorAll(".list");
const items = document.querySelectorAll(".portfolio-gallery");

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function() {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");

        const target = this.getAttribute("data-target");

        for (let k = 0; k < items.length; k++) {
            items[k].classList.remove('active');
            items[k].classList.add('hide');


            if (items[k].getAttribute('data-id') == target || target == "all") {
                items[k].classList.remove('hide');
                items[k].classList.add('active');

            }
        }

    })
}