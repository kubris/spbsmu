// === start DROPLIST
if (document.querySelector(".drop")) {
	const lists = document.querySelectorAll(".drop");

	lists.forEach((el) => {
		el.addEventListener("click", (e) => {
			e.stopPropagation();
			if (window.innerWidth <= 1024) {
				if (!e.currentTarget.classList.contains("show")) {
					closeAllDrops(lists);
					e.currentTarget.classList.add("show");
					let content = e.currentTarget.nextElementSibling;
					content.style.maxHeight = content.scrollHeight + "px";
				} else {
					e.currentTarget.classList.remove("show");
					e.currentTarget.nextElementSibling.style.maxHeight = null;
				}
			}
		});
	});

	window.addEventListener("resize", function () {
		closeAllDrops(lists);
	});
}

function dropListClick(els) {
	els.forEach((el) => {
		el.addEventListener("click", (e) => {

			if (e.currentTarget.classList.contains("show")) {
				e.currentTarget.classList.remove("show");
				e.currentTarget.nextElementSibling.style.maxHeight = null;
			} else {
				closeAllDrops(els);
				e.currentTarget.classList.add("show");
				let content = e.currentTarget.nextElementSibling;
				content.style.maxHeight = content.scrollHeight + "px";
			}
		});
	});
}

function closeAllDrops(els) {
	els.forEach((el) => {
		if (el.classList.contains("show")) {
			el.classList.remove("show");
			el.nextElementSibling.style.maxHeight = null;
		}
	});
}
// === end DROPLIST

// === MODALS
let disableScroll = function () {
	let paddingOffset = window.innerWidth - document.body.offsetWidth + "px";
	document.body.parentElement.classList.add("no-scroll");
	document.body.style.paddingRight = paddingOffset;
};

let enableScroll = function () {
	document.body.parentElement.classList.remove("no-scroll");
	document.body.style.paddingRight = 0;
};

// === BURGER menu button click
const burgerBtn = document.querySelector(".burger");
if (burgerBtn) {
	const mobileNav = document.querySelector(".header__bottom-list");

	burgerBtn.addEventListener("click", (e) => {
		e.currentTarget.classList.toggle("open");
		mobileNav.classList.toggle("show");
		document.body.parentNode.classList.toggle("no-scroll");
		if (e.currentTarget.classList.contains("open")) {
			document.body.parentNode.setAttribute('id', 'overlay');
		} else {
			document.body.parentNode.removeAttribute('id');
		}
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth < 1025) {
			burgerBtn.classList.remove("open");
			mobileNav.classList.remove("show");
			document.body.parentNode.classList.remove("no-scroll");
			document.body.parentNode.removeAttribute('id');
		}
	});
	document.body.addEventListener('keydown', function (e) {
		if (e.key == "Escape" && mobileNav.classList.contains("show")) {
			burgerBtn.classList.remove("open");
			mobileNav.classList.remove("show");
			document.body.parentNode.classList.remove("no-scroll");
			document.body.parentNode.removeAttribute('id');
		}
	});
	mobileNav.querySelector('.jsOpenModal').addEventListener('click', () => {
		burgerBtn.classList.remove("open");
		mobileNav.classList.remove("show");
		document.body.parentNode.classList.remove("no-scroll");
		document.body.parentNode.removeAttribute('id');
	});

}
// === end BURGER menu button click

// === start DROP ITEM
const dropItems = document.querySelectorAll('.navbar__list-dropitem');
if (dropItems.length > 0) {
	dropItems.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.stopPropagation();
			e.currentTarget.classList.toggle('show');
		});
	});

	document.body.addEventListener('click', () => {
		dropItems.forEach((item) => {
			if (item.classList.contains('show')) {
				item.classList.remove('show');
			}
		});
	});
}
// === end DROP ITEM

// === start MODAL CALLBACK
if (document.querySelector(".callback-bg")) {
	const btnsOpen = document.querySelectorAll(".jsOpenModal");
	const modalWin = document.querySelector(".callback-bg");
	const closeWin = document.querySelector(".callback-close");

	btnsOpen.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			modalWin.classList.add("show");
			disableScroll();
		});
	});

	closeWin.addEventListener("click", (event) => {
		modalWin.classList.remove("show");
		enableScroll();
	});

	document.body.addEventListener('keydown', function (e) {
		if (e.key == "Escape" && modalWin.classList.contains("show")) {
			modalWin.classList.remove("show");
			enableScroll();
		}
	});
}
// === end MODAL CALLBACK

// === start MODAL SEARCH
if (document.querySelector(".search-bg")) {
	const btnsOpen = document.querySelectorAll(".jsOpenSearch");
	const modalWin = document.querySelector(".search-bg");
	const closeWin = document.querySelector(".search-close");

	btnsOpen.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			modalWin.classList.add("show");
			disableScroll();
		});
	});

	closeWin.addEventListener("click", (event) => {
		modalWin.classList.remove("show");
		enableScroll();
	});

	document.body.addEventListener('keydown', function (e) {
		if (e.key == "Escape" && modalWin.classList.contains("show")) {
			modalWin.classList.remove("show");
			enableScroll();
		}
	});
}
// === end MODAL SEARCH

// === start FOOTER LIST DROP
const foolistTitle = document.querySelectorAll('.foo-list__title');
if (foolistTitle.length > 0) {
	foolistTitle.forEach((title) => {
		title.addEventListener('click', (e) => {
			e.currentTarget.classList.toggle('show');
		});
	});
}
// === end FOOTER LIST DROP

// === start ROLL-LIST
if (document.querySelector(".jsCatList")) {
	const boxes = document.querySelectorAll(".jsCatList");

	boxes.forEach((box) => {

		let isDown = false;
		let startX;
		let startY;
		let scrollLeft;
		let scrollTop;

		box.addEventListener("mousedown", (e) => {
			isDown = true;
			startX = e.pageX - box.offsetLeft;
			startY = e.pageY - box.offsetTop;
			scrollLeft = box.scrollLeft;
			scrollTop = box.scrollTop;
			box.style.cursor = "grabbing";
		});

		box.addEventListener("mouseleave", () => {
			isDown = false;
			box.style.cursor = "grab";
		});

		box.addEventListener("mouseup", () => {
			isDown = false;
			box.style.cursor = "grab";
		});

		document.addEventListener("mousemove", (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - box.offsetLeft;
			const y = e.pageY - box.offsetTop;
			const walkX = (x - startX) * 1;
			const walkY = (y - startY) * 1;
			box.scrollLeft = scrollLeft - walkX;
			box.scrollTop = scrollTop - walkY;
		});
	});
}
// === end ROLL-LIST

// === start TABS SCRIPT
const fadeIn = (el, timeout, display) => {
	el.style.opacity = 0;
	el.style.display = display || "block";
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
};

const fadeOut = (el, timeout) => {
	el.style.opacity = 1;
	el.style.transition = `opacity ${timeout}ms`;
	el.style.opacity = 0;

	setTimeout(() => {
		el.style.display = "none";
	}, timeout);
};

function hideAll(els) {
	els.forEach((item) => {
		item.style.display = "none";
	});
}

function delAllActiveBtns(els) {
	els.forEach((item) => {
		item.contains.classList = "active" ? item.classList.remove("active") : false;
	});
}

if (document.querySelector(".htb") && document.querySelector(".btb")) {
	const btns = document.querySelectorAll(".htb");
	const blocks = document.querySelectorAll(".btb");
	btns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			let currBtn = e.currentTarget.dataset.tb;
			let currBlock = document.querySelector("[data-cnt=" + currBtn + "]");

			delAllActiveBtns(btns);
			let isClass = e.currentTarget.contains.classList == "active";
			!isClass ? e.currentTarget.classList.add("active") : false;

			hideAll(blocks);

			if (currBlock) {
				fadeIn(currBlock, 1000, "block");
			} else {
				fadeIn(blocks[0], 1000, "block");
			}
		});
	});
}
// === end TABS SCRIPT

// === start TOGGLE HEIGHT
const allHeights = document.querySelectorAll('.jsHeightBtn');
if (allHeights.length > 0) {
	allHeights.forEach((el) => {
		el.addEventListener("click", (e) => {
			if (e.currentTarget.parentElement.classList.contains("open")) {
				e.currentTarget.parentElement.classList.remove("open");
				e.currentTarget.classList.remove("open");
				e.currentTarget.innerText = 'Больше информации';
			} else {
				e.currentTarget.parentElement.classList.add("open");
				e.currentTarget.classList.add("open");
				e.currentTarget.innerText = 'Меньше информации';
			}
		});
	});
}
// === end TOGGLE HEIGHT

// === start ACCORDION
if (document.querySelector(".accordion-btn")) {
	const acc = document.getElementsByClassName("accordion-btn");
	for (let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			if (!this.classList.contains("active")) {
				closeAccTabs();
				toggleAcc(this);
				console.log("Non Active");
			} else {
				closeAccTabs();
				console.log("Active");
			}
		});
	}
	function toggleAcc(e) {
		e.classList.toggle("active");
		var panel = e.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	}
	function closeAccTabs() {
		for (let i = 0; i < acc.length; i++) {
			if (acc[i].classList.contains("active")) {
				acc[i].classList.remove("active");
				acc[i].nextElementSibling.removeAttribute("style");
			}
		}
	}
	function openFirstAccTab() {
		if (!acc[0].classList.contains("active")) {
			acc[0].classList.add("active");
			acc[0].nextElementSibling.style.maxHeight =
				acc[0].nextElementSibling.scrollHeight + "px";
		}
	}
	window.addEventListener(
		"resize",
		function () {
			for (let i = 0; i < acc.length; i++) {
				if (acc[i].classList.contains("active")) {
					acc[i].nextElementSibling.style.maxHeight =
						acc[i].nextElementSibling.scrollHeight + "px";
				}
			}
		},
		true
	);
}
// === end ACCORDION

// === start RELOCATE BY CLICK
const allPosts = document.querySelectorAll("[data-postlink]");
if (allPosts.length > 0) {
	allPosts.forEach((post) => {
		post.addEventListener("click", (e) => {
			let link = e.currentTarget.dataset.postlink;
			location.href = link;
		});
	});
}
// === end RELOCATE BY CLICK

// === start HOME OBJECTS SLIDER
if (document.querySelector('.home-objects__grid')) {
	let hoInit = false;
	let hoSwiper;
	function swiperCard() {
		if (window.innerWidth <= 767) {
			if (!hoInit) {
				hoInit = true;
				hoSwiper = new Swiper(".home-objects__grid", {
					slidesPerView: 1.2,
					spaceBetween: 20,
				});
			}
		} else if (hoInit) {
			hoSwiper.destroy();
			hoInit = false;
		}
	}
	swiperCard();
	window.addEventListener("resize", swiperCard);
}
// === end HOME OBJECTS SLIDER

// === start HOME OBJECTS SLIDER
if (document.querySelector('.home-testimonials__grid')) {
	let htInit = false;
	let htSwiper;
	function swiperCard() {
		if (window.innerWidth <= 767) {
			if (!htInit) {
				htInit = true;
				htSwiper = new Swiper(".home-testimonials__grid", {
					slidesPerView: 1.2,
					spaceBetween: 20,
				});
			}
		} else if (htInit) {
			htSwiper.destroy();
			htInit = false;
		}
	}
	swiperCard();
	window.addEventListener("resize", swiperCard);
}
// === end HOME OBJECTS SLIDER

// === start HOME OBJECTS SLIDER
if (document.querySelector('.home-news__slider')) {
	const newSwiper = new Swiper(".home-news__slider", {
		slidesPerView: 1.2,
		spaceBetween: 0,
		loop: true,
		breakpoints: {
			480: {
				slidesPerView: 2.2
			},
			1024: {
				slidesPerView: 3
			}
		}
	});
}
// === end HOME OBJECTS SLIDER

// === start CARD-TEXT MODAL 
const btns = document.querySelectorAll(".jsTestiBtn");
if (btns.length > 0) {
	const modal = document.createElement("div");
	modal.classList.add("card-modal");

	modal.innerHTML = `
		<button class="card-close"><svg class="svg-icon"><use xlink:href="images/sprite/sprite-mono.svg#close"></use></svg></button>
		<span class="card-name">Firm name</span>
		<p class="card-text">Firm description</p>
	`;
	document.body.appendChild(modal);

	const modalClose = modal.querySelector(".card-close");

	btns.forEach((btn) => {
		btn.addEventListener("click", function () {
			showModal(this, modal);
		});
	});

	modalClose.addEventListener("click", () => {
		modal.classList.remove("show");
	});
}

function showModal(el, m) {
	let cName = el.closest(".swiper-slide").querySelector("span").innerText;
	let cText = el.closest(".swiper-slide").querySelector("p").innerText;
	m.classList.add("show");
	m.querySelector(".card-name").innerText = cName;
	m.querySelector(".card-text").innerText = cText;
}
// === end CARD-TEXT MODAL 

// === start A FEW SWIPER
const hbSwipers = document.querySelectorAll(".home-blog__swiper");
if (hbSwipers.length > 0) {
	hbSwipers.forEach(value => {
		let hbSwiper = new Swiper(value, {
			slidesPerView: 1.2,
			spaceBetween: 20,
			freemode: true,
			//init: false,
			breakpoints: {
				768: {
					slidesPerView: 2.2,
				},
				1024: {
					slidesPerView: 4,
				},
			},
			observer: true,
			observerParents: true
		});
	});
}
// === end A FEW SWIPER
// === start A FEW SWIPER
const spaSwipers = document.querySelector(".service-page__about-slider");
if (spaSwipers) {
	const spaSwiper = new Swiper(".service-page__about-slider", {
		slidesPerView: 1.1,
		spaceBetween: 16,
		initialSlide: 2,
		loop: true,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 2.8,
				spaceBetween: 20,

			},
			1440: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1920: {
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});
}
// === end A FEW SWIPER

// === start READ MORE
if (document.querySelector(".jsReadMore")) {
	const readMoreBtns = document.querySelectorAll(".jsReadMore");

	readMoreBtns.forEach((rmBtn) => {
		rmBtn.addEventListener("click", (e) => {
			e.currentTarget.previousElementSibling.classList.toggle("full-height");
			e.currentTarget.classList.toggle("full-height");
		});
	});
}
// === end READ MORE

// === SLIDER OWN CLASS
if (document.querySelector('.others-slider')) {
	let spsInit = false;
	let spsSwiper;
	function spsIperCard() {
		if (window.innerWidth <= 767) {
			if (!spsInit) {
				spsInit = true;
				spsSwiper = new Swiper(".others-slider", {
					slidesPerView: 1.1,
					loop: true,
					spaceBetween: 20,
				});
			}
		} else if (spsInit) {
			window.location.reload();
			// spsSwiper.destroy();
			// spsInit = false;
		}
	}
	spsIperCard();
	window.addEventListener("resize", spsIperCard);
}
// === end SLIDER OWN CLASS

// === start PROJECT-PAGE SLIDER
if (document.querySelector('.ppo-slider')) {
	const newSwiper = new Swiper(".ppo-slider", {
		slidesPerView: 1.2,
		spaceBetween: 16,
		loop: true,
		breakpoints: {
			768: {
				slidesPerView: 2.2,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 3.6,
				spaceBetween: 20
			}
		}
	});
}
// === end PROJECT-PAGE SLIDER

// === start DROP BLOG
const bdd = document.querySelectorAll('.bg-cats');
if (bdd.length > 0) {
	bdd.forEach((el) => {
		el.addEventListener('click', () => {
			el.querySelector('.h3').classList.toggle('open');
		});
	});
	window.addEventListener('resize', () => {
		bdd.forEach((el) => {
			el.querySelector('.h3').classList.remove('open');
		});
	});
}
// === end DROP BLOG

// === start SMOOTH-SCROLL TO ANCHOR
const anhors = document.querySelectorAll('a[href^="#"]');
if (anhors.length > 0) {
	anhors.forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			try {
				document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
				});
			} catch {
				console.warn('Is working the script for smooth transition to links. You need to remove the "#" symbol in the href="#" for the script to work correctly. For example, replace it with href="javascript:"');
			}
		});
	});
}
// === end SMOOTH-SCROLL TO ANCHOR

// === start BLOG-PAGE SLIDER
if (document.querySelector('.bp-slider')) {
	const newSwiper = new Swiper(".bp-slider", {
		slidesPerView: 1.2,
		spaceBetween: 16,
		loop: true,
		breakpoints: {
			768: {
				slidesPerView: 2.2,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 20
			}
		}
	});
}
// === end BLOG-PAGE SLIDER