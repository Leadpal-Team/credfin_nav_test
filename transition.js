const sections = ['products', 'solutions', 'docs', 'about'];
const sectionEls = document.querySelectorAll('.section');
const navLinkEls = document.querySelectorAll('.nav-link');
const headerEl = document.querySelector('.header');
const popDown = document.querySelector(".pop-down");

let sectionCount = 0;

// TODO: generate on the fly
const dimensions = {
    products: { width: 600, height: 200, x: 0 },
    solutions: { width: 500, height: 200, x: 100 },
    docs: { width: 500, height: 200, x: 200 },
    about: { width: 260, height: 200, x: 300 }
}

const originalWidth = dimensions.products.width;
const originalHeight = dimensions.products.height;

const backgroundEl = document.querySelector('.nav-container');
const contentEl = document.querySelector('.content');

function showSection(section) {
    popDown.classList.add('open');
    sectionEls.forEach(el => el.classList.remove('active'));
    document.querySelector(`.section-${section}`).classList.add('active');

    // Resize and position background
    backgroundEl.style.transform = `
    translateX(${ dimensions[section].x}px)
    scaleX(${ dimensions[section].width / originalWidth})
    scaleY(${ dimensions[section].height / originalHeight})
  `;

    // Position content
    contentEl.style.transform = `translateX(${dimensions[section].x}px)`

    // size container? If we remove from CSS and do everything dynamically.
}

function hide() {
    popDown.classList.remove('open');
}


navLinkEls.forEach((navLink) => {
    navLink.addEventListener('mouseenter', (event) => {
        let targetPopover = event.target.getAttribute('data-nav');
        showSection(targetPopover); // Runs the resize, position, and fade code from the prev section
    });
});

headerEl.addEventListener('mouseleave', () => {
    hide();
})