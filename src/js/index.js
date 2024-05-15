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
if(dropItems.length > 0) {
	dropItems.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.classList.toggle('show');
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
