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

// === start MOBILE MENU
const mobMenuModal = document.querySelector('.m-menu__bg');
if (mobMenuModal) {
	const mobMenu = document.querySelector('.jsMobMenu');
	const mobMenuModalClose = mobMenuModal.querySelector('.m-menu__close');
	const localBtns = mobMenuModal.querySelectorAll('button');

	mobMenu.addEventListener('click', (e) => {
		mobMenuModal.classList.add('show');
		disableScroll();
	});

	localBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			mobMenuModal.classList.remove('show');
			enableScroll();
		});
	});

	mobMenuModalClose.addEventListener('click', () => {
		mobMenuModal.classList.remove('show');
		enableScroll();
	});
}
// === end MOBILE MENU

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

// === start MODAL SEARCH
if (document.querySelector(".lk-bg")) {
	const btnsOpen = document.querySelectorAll(".jsOpenLK");
	const modalWin = document.querySelector(".lk-bg");
	const closeWin = document.querySelector(".lk-close");

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

// === start MODAL SIGN
if (document.querySelector(".sign-bg")) {
	const btnsOpen = document.querySelectorAll(".jsSignModal");
	const modalWin = document.querySelector(".sign-bg");
	const closeWin = document.querySelector(".sign-close");

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
}
// === end MODAL SIGN

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

// === start SCROLLING in MAIN - SERVICES
if (document.getElementById("jsScrolList")) {
	document.addEventListener("DOMContentLoaded", function () {
		const ele = document.getElementById("jsScrolList");
		ele.style.cursor = "grab";

		let pos = { top: 0, left: 0, x: 0, y: 0 };

		const mouseDownHandler = function (e) {
			ele.style.cursor = "grabbing";
			ele.style.userSelect = "none";

			pos = {
				left: ele.scrollLeft,
				top: ele.scrollTop,
				x: e.clientX,
				y: e.clientY
			};

			document.addEventListener("mousemove", mouseMoveHandler);
			document.addEventListener("mouseup", mouseUpHandler);
		};

		const mouseMoveHandler = function (e) {
			const dx = e.clientX - pos.x;
			const dy = e.clientY - pos.y;

			ele.scrollTop = pos.top - dy;
			ele.scrollLeft = pos.left - dx;
		};

		const mouseUpHandler = function () {
			ele.style.cursor = "grab";
			ele.style.removeProperty("user-select");

			document.removeEventListener("mousemove", mouseMoveHandler);
			document.removeEventListener("mouseup", mouseUpHandler);
		};

		ele.addEventListener("mousedown", mouseDownHandler);
	});
}
// === end SCROLLING in MAIN - SERVICES

// === start MAIN-HERO SLIDER
if (document.querySelector(".sales-hit__slider")) {
	const dpSlider = new Swiper(".sales-hit__slider", {
		pagination: {
			el: ".sales-hit__pagination",
			clickable: true,
		},
	});
}
// === end MAIN-HERO SLIDER

// === start OUR WORKS SLIDER
if (document.querySelector('.our-works__grid')) {
	let owInit = false;
	let owSwiper;
	function swiperCard() {
		if (window.innerWidth <= 767) {
			if (!owInit) {
				owInit = true;
				owSwiper = new Swiper(".our-works__grid", {
					slidesPerView: 1,
					spaceBetween: 20,
					pagination: {
						el: ".our-works__pagination",
						clickable: true,
					},
				});
			}
		} else if (owInit) {
			owSwiper.destroy();
			owInit = false;
		}
	}
	swiperCard();
	window.addEventListener("resize", swiperCard);
}
// === end OUR WORKS SLIDER

// === start OUR WORKS SLIDER
if (document.querySelector('.clients__grid')) {
	let cInit = false;
	let cSwiper;
	function swiperCard() {
		if (window.innerWidth > 1024) {
			if (!cInit) {
				cInit = true;
				cSwiper = new Swiper(".clients__grid", {
					slidesPerView: 5,
					spaceBetween: 20,
					loop: true,
					navigation: {
						nextEl: '.clients__btns-next',
						prevEl: '.clients__btns-prev',
					},
				});
			}
		} else if (cInit) {
			cSwiper.destroy();
			cInit = false;
		}
	}
	swiperCard();
	window.addEventListener("resize", swiperCard);
}
// === end OUR WORKS SLIDER

// === start SP-AIO SLIDER (all-in-one)
if (document.querySelector('.sp-aio__slider')) {
	aioSwiper = new Swiper(".sp-aio__slider", {
		slidesPerView: "auto",
		spaceBetween: 20,
		navigation: {
			nextEl: '.sp-aio__btns-next',
			prevEl: '.sp-aio__btns-prev',
		},
		pagination: {
			el: ".sp-aio__pagination",
			clickable: true,
		},
	});
}
// === end SP-AIO SLIDER

// === start TESTIMONIALS SLIDER
if (document.querySelector(".testimonials__grid")) {
	const tmSlider = new Swiper(".testimonials__grid", {
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			el: ".testimonials__pagination",
			clickable: true,
		},
		breakpoints: {
			575: {
				slidesPerView: 2,
				spaceBetween: 20
			}
		}
	});
}
// === end TESTIMONIALS SLIDER

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

// === start BLOG TAB
const fadeIn = (el, timeout, display) => {
	el.style.opacity = 0;
	el.style.display = display || "block";
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
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

if (document.querySelector(".jsTab")) {
	const allTabs = document.querySelectorAll(".jsTab");

	allTabs.forEach((tab) => {
		const btns = tab.querySelectorAll(".thb");
		const blocks = tab.querySelectorAll(".tbc");
		btns.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				let currBtn = e.currentTarget.dataset.btn;
				let currBlock = tab.querySelector("[data-text=" + currBtn + "]");

				delAllActiveBtns(btns);
				let isClass = e.currentTarget.contains.classList == "active";
				!isClass ? e.currentTarget.classList.add("active") : false;

				hideAll(blocks);

				if (currBlock) {
					fadeIn(currBlock, 1000, "grid");
				} else {
					fadeIn(blocks[0], 1000, "grid");
				}
			});
		});
	});
}
// === end BLOG TAB

// === start TABS SCRIPT
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

// === start SELECT FIELD
let x = document.getElementsByClassName("custom-select");
if (x) {
	const eventChange = new Event('change');
	let i, j, l, ll, selElmnt, a, b, c;
	l = x.length;
	for (i = 0; i < l; i++) {
		selElmnt = x[i].getElementsByTagName("select")[0];
		ll = selElmnt.length;
		a = document.createElement("DIV");
		a.setAttribute("class", "select-selected");
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		x[i].appendChild(a);
		b = document.createElement("DIV");
		b.setAttribute("class", "select-items select-hide");
		for (j = 1; j < ll; j++) {
			c = document.createElement("DIV");
			c.innerHTML = selElmnt.options[j].innerHTML;
			c.addEventListener("click", function (e) {
				let y, i, k, s, h, sl, yl;
				s = this.parentNode.parentNode.getElementsByTagName("select")[0];
				sl = s.length;
				h = this.parentNode.previousSibling;
				for (i = 0; i < sl; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						y = this.parentNode.getElementsByClassName("same-as-selected");
						yl = y.length;
						for (k = 0; k < yl; k++) {
							y[k].removeAttribute("class");
						}
						this.setAttribute("class", "same-as-selected");
						break;
					}
				}
				h.click();
				s.dispatchEvent(eventChange);
			});
			b.appendChild(c);
		}
		x[i].appendChild(b);
		a.addEventListener("click", function (e) {
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle("select-hide");
			this.classList.toggle("select-arrow-active");
		});
	}
	function closeAllSelect(elmnt) {
		var x,
			y,
			i,
			xl,
			yl,
			arrNo = [];
		x = document.getElementsByClassName("select-items");
		y = document.getElementsByClassName("select-selected");
		xl = x.length;
		yl = y.length;
		for (i = 0; i < yl; i++) {
			if (elmnt == y[i]) {
				arrNo.push(i);
			} else {
				y[i].classList.remove("select-arrow-active");
			}
		}
		for (i = 0; i < xl; i++) {
			if (arrNo.indexOf(i)) {
				x[i].classList.add("select-hide");
			}
		}
	}

	if (document.getElementsByClassName("custom-select")) {
		document.addEventListener("click", closeAllSelect);
	}
}
// === end SELECT FIELD

// === start SP-VARS SLIDER
if (document.querySelector('.sp-vars__slider')) {
	let spInit = false;
	let spSwiper;
	function swiperSpCard() {
		if (window.innerWidth <= 767) {
			if (!spInit) {
				spInit = true;
				spSwiper = new Swiper(".sp-vars__slider", {
					slidesPerView: 1,
					spaceBetween: 20,
					wrapperClass: "sp-vars__grid",
					slideClass: "sp-vars__grid-item",
					pagination: {
						el: ".sp-vars__pagination",
						clickable: true,
					},
				});
			}
		} else if (spInit) {
			spSwiper.destroy(true, true);
			spInit = false;
		}
	}
	swiperSpCard();
	window.addEventListener("resize", swiperSpCard);
}
// === end VARIABLES SLIDER

// === start ABOUT PRODUCTION SLIDER
if (document.querySelector('.ap-slider')) {
	const apSwiper = new Swiper(".ap-slider", {
		slidesPerView: 1.2,
		spaceBetween: 20,
		loop: true,
		pagination: {
			el: ".ap__pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.ap-next',
			prevEl: '.ap-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2.3,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 20
			},
		}
	});
}
// === end ABOUT PRODUCTION SLIDER

// === start ABOUT PRODUCTION SLIDER
if (document.querySelector('.bp-intrest__slider')) {
	const bpSwiper = new Swiper(".bp-intrest__slider", {
		slidesPerView: 1.1,
		spaceBetween: 20,
		loop: true,
		breakpoints: {
			768: {
				slidesPerView: 2.1,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20
			},
		}
	});
}
// === end ABOUT PRODUCTION SLIDER

// === start VIDEO
const videoWrap = document.querySelector('#video');
if (videoWrap) {
	const video = document.querySelector('#myVideo');

	videoWrap.addEventListener('click', function () {
		if (video.paused) {
			video.play();
			videoWrap.classList.add('is-playing');
		} else {
			video.pause();
			videoWrap.classList.remove('is-playing');
		}
	});
}
// === end VIDEO

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

// === start PAGINATION
const pg = document.querySelector('.pagination');
if (pg) {
	const pgItems = pg.querySelectorAll('.pagination-list a');
	const prev = pg.querySelector('.pagination-prev');

	if (!pgItems[0].closest('li').classList.contains('active')) {
		if (prev.classList.contains('disable')) {
			prev.classList.remove('disable');
		}
	}
	/* --- if will be AJAX post switching ---
	pgItems.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();

			pgItems.forEach((el) => {
				if(el.closest('li').classList.contains('active')) {
					el.closest('li').classList.remove('active');
				}
			});

			e.currentTarget.closest('li').classList.add('active');

			if(pgItems[0].closest('li').classList.contains('active')) {
				if(!prev.classList.contains('disable')){
					prev.classList.add('disable');
				}
			} else {
				if(prev.classList.contains('disable')){
					prev.classList.remove('disable');
				}
			}
			
		});
	});
	*/
}
// === end PAGINATION

// === start CALC
const clInp = document.querySelectorAll(".jsCalcField");
if (clInp.length > 0) {
	const clSel = document.querySelectorAll(".jsCalcSelect");
	let clA = document.querySelector(".jsCalcPrice");
	let letterPriceSqSm = 120;

	let amount = Number(clA.textContent);
	let cmPrice = 800; /* 800 рублей за кв.см */

	clInp.forEach((inp) => {
		inp.addEventListener("keyup", () => {
			sumAll();
		});
	});

	clSel.forEach((sel) => {
		sel.addEventListener("change", function () {
			sumAll();
		});
	});

	function sumAll() {
		const result = {
			res: 0,
			baseNull: false
		};

		clInp.forEach((inp) => {
			if (result.res === 0) {
				result.baseNull = false;
				result.res += Number(inp.value);
				return result;
			} else {
				result.baseNull = true;
				result.res *= Number(inp.value) * letterPriceSqSm;
				return result;
			}
		});

		clSel.forEach((sel) => {
			if (result.baseNull) {
				result.res *= Number(sel.value);
				return result;
			}
		});

		if (result.baseNull) {
			clA.textContent = result.res.toFixed(2);
		} else {
			clA.textContent = 0;
		}
	}
}
// === end CALC
