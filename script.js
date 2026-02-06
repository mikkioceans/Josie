// // (() => {
// //   const herName = "Ohemaa"; // change this

// //   // Put your images in /assets and update these names.
// //   const slideImages = [
// //     "assets/slide1.jpg",
// //     "assets/slide2.jpg",
// //     "assets/slide3.jpg",
// //     "assets/slide4.jpg",
// //     "assets/slide5.jpg",
// //     "assets/slide6.jpg",
// //     "assets/slide7.jpeg",
// //     "assets/slide8.jpg",
// //     "assets/slide9.jpg",
// //     "assets/slide10.jpg",
// //   ];

// //   const slidesData = [
// //     { kicker:"Page 1",  title:`Hey ${herName} 👋`, desc:"" },
// //     { kicker:"Page 2",  title:"Quick vibe check ✅", desc:"If you're smiling right now, that's already a win." },
// //     { kicker:"Page 3",  title:"This is intentional because I really wanna do LIFE with you. My heart has settled❤️ ", 
// //       desc:"I’m not usually one for making big plans early on, but with you, it feels different. I JUST WANT YOU ALL TO MY SELF NOWWW!. I keep catching myself thinking, 'Oh, she’d love this,' whenever I pass a cool gallery or a beautiful restaurant in Downtown. I want to be the one who introduces you to your new favorite song and the one who listens to you vent after a long Monday. I want us to do multiple parts of  The story of FA, as a matter of fact we need a night set aside for gists like that😂 .  I have plans for us that involve zero pressure and a lot of laughter, maybe a low-stakes arcade night or just a long walk where we lose track of time. You’ve sparked a lot of curiosity in me Ama Adjeiwaa, and I’m really excited to see how all these ideas in my head play out with you by my side ♾️." },
// //     { kicker:"Page 4",  title:"You stand out 💕",
// //        desc: "I just wanted to tell you that you stand out to me in the best way. There’s a lot of 'same-ness' out there, but you have this unique rhythm to the way you live your life that I find fascinating. I think your parents did an excellent job, you rarely encounter beautiful yet very humble women like yourself. How lucky am I? I guess I'm a very luckyyy man fr.  Whether it’s your sense of humor, your laughter or the way you get passionate about the randomest things, you’re just different Ama. I’m really enjoying the process of getting to know you and seeing all the ways you’re unique. You’re definitely the highlight of my LIFE right now ( I am dead serious) , and I’m not even trying to hide it. I am always looking at pictures and videos of you. I truly love you Ama. " },
// //     { kicker:"Page 5",  title:"My Simple plan", desc:"Get to know every version of you Josie, love you like there's no tomorrow, and eventually convince you that 'happily ever after' isn't just for the movies" },
// //     { kicker:"Page 6",  title:"Real talk", desc:"You are beautiful💓.. coss Look at youu..." },
// //     { kicker:"Page 7",  title:"Almost there…", desc:"One more slide and I’ll ask properly 😅" },
// //     { kicker:"Page 8",  title:"Deep breath", desc:"Okay… here we go." },
// //     { kicker:"Page 9",  title:"You deserve all the effort my love", desc:"So I’m asking in a cute way — because you matter. " },
// //     { kicker:"Page 10", title:"I hope this would be considered our first Valentine's Day as a couple ? 💌", desc:"Would you be my Valentine? This would be the 1/62" },
// //   ].map((s, i) => ({ ...s, img: slideImages[i] })); // ✅ FIXED

// //   const landing = document.getElementById("landing");
// //   const carousel = document.getElementById("carousel");
// //   const startBtn = document.getElementById("startBtn");
// //   const previewBtn = document.getElementById("previewBtn");
// //   const backBtn = document.getElementById("backToLandingBtn");
// //   const slider = document.getElementById("slider");
// //   const dots = document.getElementById("dots");

// //   const modal = document.getElementById("modal");
// //   const modalBackdrop = document.getElementById("modalBackdrop");
// //   const yesBtn = document.getElementById("yesBtn");
// //   const noBtn = document.getElementById("noBtn");
// //   const modalTitle = document.getElementById("modalTitle");
// //   const modalText = document.getElementById("modalText");
// //   const modalFootnote = document.getElementById("modalFootnote");

// //   if (!landing || !carousel || !startBtn || !previewBtn || !backBtn || !slider || !dots || !modal) {
// //     console.error("Missing elements. Check IDs in HTML.");
// //     return;
// //   }

// //   // ✅ HARD FIX: only one screen can be active at once
// //   const screens = document.querySelectorAll(".screen");
// //   function setActiveScreen(id){
// //     screens.forEach(s => s.classList.remove("screen--active"));
// //     const el = document.getElementById(id);
// //     if (el) el.classList.add("screen--active");
// //   }

// //   // Fireworks
// //   const modalCard = modal.querySelector(".modal-card");
// //   const fx = document.createElement("div");
// //   fx.className = "fx";
// //   fx.innerHTML = `<canvas id="fxCanvas"></canvas>`;
// //   if (modalCard) modalCard.appendChild(fx);
// //   const fxCanvas = fx.querySelector("#fxCanvas");
// //   const ctx = fxCanvas ? fxCanvas.getContext("2d") : null;

// //   let current = 0;
// //   let isModalOpen = false;
// //   let fxRunning = false;
// //   let particles = [];
// //   let rafId = 0;
// //   let burstTimer = 0;

// //   // Build slides
// //   const slideEls = slidesData.map((s, idx) => {
// //     const el = document.createElement("article");
// //     el.className = "slide" + (idx === 0 ? " active" : "");
// //     el.style.backgroundImage = `url("${s.img}")`;

// //     const isLast = idx === slidesData.length - 1;

// //     el.innerHTML = `
// //       <div class="overlay"></div>
// //       <div class="content">
// //         <div class="kicker">
// //           <span class="pill">${s.kicker}</span>
// //           <span>•</span>
// //           <span>${idx + 1}/${slidesData.length}</span>
// //         </div>

// //         <h2 class="title">${s.title}</h2>
// //         <p class="desc">${s.desc}</p>

// //         <div class="footerRow">
// //           <div class="progressText">${isLast ? "Last slide 🎉" : "Tip: swipe left/right or use arrows"}</div>
// //           <div class="controls">
// //             <button type="button" class="btn btn--ghost prevBtn">← Prev</button>
// //             ${
// //               isLast
// //                 ? `<button type="button" class="btn btn--primary askBtn">Pop the question 💖</button>`
// //                 : `<button type="button" class="btn btn--primary nextBtn">Next →</button>`
// //             }
// //           </div>
// //         </div>
// //       </div>
// //     `;
// //     slider.appendChild(el);
// //     return el;
// //   });

// //   // Dots
// //   const dotEls = slidesData.map((_, idx) => {
// //     const b = document.createElement("button");
// //     b.className = "dotBtn" + (idx === 0 ? " active" : "");
// //     b.type = "button";
// //     b.addEventListener("click", () => goTo(idx));
// //     dots.appendChild(b);
// //     return b;
// //   });

// //   function goTo(index){
// //     const total = slideEls.length;
// //     const nextIndex = (index + total) % total;

// //     slideEls[current].classList.remove("active");
// //     dotEls[current].classList.remove("active");

// //     current = nextIndex;

// //     slideEls[current].classList.add("active");
// //     dotEls[current].classList.add("active");
// //   }
// //   const next = () => goTo(current + 1);
// //   const prev = () => goTo(current - 1);

// //   // Modal
// //   function openModal(){
// //     isModalOpen = true;
// //     modal.classList.add("modal--open");
// //     modal.setAttribute("aria-hidden", "false");
// //     modalTitle.textContent = "Will you be my Valentine? ❤️";
// //     modalText.textContent = `${herName}, will you be my Valentine?`;
// //     modalFootnote.textContent = "";
// //     resetNoButton();
// //     stopFireworks();
// //   }
// //   function closeModal(){
// //     isModalOpen = false;
// //     modal.classList.remove("modal--open");
// //     modal.setAttribute("aria-hidden", "true");
// //     resetNoButton();
// //     stopFireworks();
// //   }

// //   // No runaway
// //   function resetNoButton(){
// //     noBtn.classList.remove("no-runaway");
// //     noBtn.style.left = "";
// //     noBtn.style.top = "";
// //   }
// //   function moveNoButton(){
// //     const card = modal.querySelector(".modal-card");
// //     if (!card) return;

// //     noBtn.classList.add("no-runaway");

// //     const cardRect = card.getBoundingClientRect();
// //     const btnRect = noBtn.getBoundingClientRect();

// //     const pad = 14;
// //     const minX = pad;
// //     const minY = 100;
// //     const maxX = Math.max(minX, cardRect.width - btnRect.width - pad);
// //     const maxY = Math.max(minY, cardRect.height - btnRect.height - pad);

// //     const x = minX + Math.random() * (maxX - minX);
// //     const y = minY + Math.random() * (maxY - minY);

// //     noBtn.style.left = `${x}px`;
// //     noBtn.style.top = `${y}px`;
// //   }

// //   // Fireworks
// //   function resizeCanvas(){
// //     if (!fxCanvas) return;
// //     fxCanvas.width = Math.floor(fxCanvas.clientWidth * devicePixelRatio);
// //     fxCanvas.height = Math.floor(fxCanvas.clientHeight * devicePixelRatio);
// //   }

// //   function burst(){
// //     if (!fxCanvas || !ctx) return;

// //     const w = fxCanvas.width;
// //     const h = fxCanvas.height;
// //     const cx = Math.random() * w * 0.9 + w * 0.05;
// //     const cy = Math.random() * h * 0.45 + h * 0.05;

// //     for (let i = 0; i < 90; i++){
// //       const a = Math.random() * Math.PI * 2;
// //       const sp = (Math.random() * 4 + 2) * devicePixelRatio;
// //       const life = Math.random() * 40 + 40;

// //       particles.push({
// //         x: cx, y: cy,
// //         vx: Math.cos(a) * sp,
// //         vy: Math.sin(a) * sp,
// //         g: 0.07 * devicePixelRatio,
// //         life, maxLife: life,
// //         hue: Math.random() < 0.6 ? 330 : 175
// //       });
// //     }
// //   }

// //   function draw(){
// //     if (!fxCanvas || !ctx) return;
// //     ctx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
// //     particles = particles.filter(p => p.life > 0);

// //     for (const p of particles){
// //       p.life -= 1;
// //       p.vy += p.g;
// //       p.x += p.vx;
// //       p.y += p.vy;

// //       const alpha = Math.max(0, p.life / p.maxLife);
// //       ctx.beginPath();
// //       ctx.arc(p.x, p.y, 2.2 * devicePixelRatio, 0, Math.PI * 2);
// //       ctx.fillStyle = `hsla(${p.hue}, 95%, 65%, ${alpha})`;
// //       ctx.fill();
// //     }
// //   }

// //   function startFireworks(){
// //     if (fxRunning) return;
// //     fxRunning = true;
// //     fx.classList.add("fx--show");
// //     resizeCanvas();
// //     burst();
// //     burstTimer = setInterval(burst, 450);

// //     const loop = () => {
// //       draw();
// //       rafId = requestAnimationFrame(loop);
// //     };
// //     loop();
// //   }

// //   function stopFireworks(){
// //     fxRunning = false;
// //     fx.classList.remove("fx--show");
// //     particles = [];
// //     if (burstTimer) clearInterval(burstTimer);
// //     if (rafId) cancelAnimationFrame(rafId);
// //   }

// //   window.addEventListener("resize", () => { if (fxRunning) resizeCanvas(); });

// //   // Events
// //   startBtn.addEventListener("click", () => {
// //     setActiveScreen("carousel");
// //     goTo(0);
// //   });

// //   previewBtn.addEventListener("click", () => {
// //     setActiveScreen("carousel");
// //     goTo(0);
// //   });

// //   backBtn.addEventListener("click", () => {
// //     setActiveScreen("landing");
// //     closeModal();
// //   });

// //   // ✅ FIX: use pointerup for buttons (more reliable than click in pointer scenarios)
// //   slider.addEventListener("pointerup", (e) => {
// //     const t = e.target;
// //     if (!(t instanceof Element)) return;

// //     if (t.closest(".nextBtn")) next();
// //     if (t.closest(".prevBtn")) prev();
// //     if (t.closest(".askBtn")) openModal();
// //   });

// //   modalBackdrop.addEventListener("click", closeModal);

// //   yesBtn.addEventListener("click", () => {
// //     modalFootnote.textContent = "Yessss! 😭💖 Okay… I’m celebrating!!";
// //     startFireworks();
// //   });

// //   noBtn.addEventListener("mouseenter", moveNoButton);
// //   noBtn.addEventListener("click", () => {
// //     moveNoButton();
// //     modalFootnote.textContent = `Oh ${herName} NOOO 😭 ...try again 😅`;
// //     setTimeout(() => {
// //       modalTitle.textContent = "Please reconsider 🥺";
// //       modalText.textContent = `${herName}, will you be my Valentine? ❤️`;
// //     }, 650);
// //   });

// //   window.addEventListener("keydown", (e) => {
// //     if (isModalOpen) {
// //       if (e.key === "Escape") closeModal();
// //       return;
// //     }
// //     if (!carousel.classList.contains("screen--active")) return;
// //     if (e.key === "ArrowRight" || e.key === " ") next();
// //     if (e.key === "ArrowLeft") prev();
// //   });

// //   // ✅ SWIPE FIX (this is the core fix)
// //   // - NO pointer capture
// //   // - swipe only on touch/pen
// //   // - never start swipe when clicking buttons
// //   let startX = 0;
// //   let isDown = false;

// //   slider.addEventListener("pointerdown", (e) => {
// //     if (isModalOpen) return;

// //     // if clicking UI inside slide, don't treat as swipe
// //     if (e.target instanceof Element) {
// //       if (e.target.closest("button") || e.target.closest(".controls") || e.target.closest(".content")) {
// //         return;
// //       }
// //     }

// //     // don't run swipe logic on mouse (desktop)
// //     if (e.pointerType === "mouse") return;

// //     isDown = true;
// //     startX = e.clientX;
// //   });

// //   slider.addEventListener("pointerup", (e) => {
// //     if (!isDown) return;
// //     isDown = false;

// //     const dx = e.clientX - startX;
// //     if (dx > 50) prev();
// //     else if (dx < -50) next();
// //   });

// //   slider.addEventListener("pointercancel", () => { isDown = false; });

// //   // Preload images
// //   slidesData.forEach(s => { const img = new Image(); img.src = s.img; });

// //   // Start clean
// //   setActiveScreen("landing");
// // })();

// (() => {
//   const herName = "Ohemaa"; // change this

//   // ✅ ONLY EDIT REQUIRED: default crop position so faces show more
//   // Lower % = moves image UP (shows more face). Try 25% if needed.
//   const DEFAULT_BG_POS = "center 35%";

//   // Put your images in /assets and update these names.
//   const slideImages = [
//     "assets/slide1.jpg",
//     "assets/slide2.jpg",
//     "assets/slide3.jpg",
//     "assets/slide4.jpg",
//     "assets/slide5.jpg",
//     "assets/slide6.jpg",
//     "assets/slide7.jpeg",
//     "assets/slide8.jpg",
//     "assets/slide9.jpg",
//     "assets/slide10.jpeg",
//   ];

//   // ✅ Optional per-slide overrides (leave null to use DEFAULT_BG_POS)
//   const slidePos = [
//     "center  50%", "center 42%", "center  50%", "center  68%", "center 25%",
//     "center 80%", "center 82%", null, null, null
//   ];

//   const slidesData = [
//     { kicker:"Page 1",  title:`${herName} Ama Adjeiwaa😘`, desc:"This is me reaching out, to show you how deeply I care. Not with certainty,but with intention. If this finds you,know it was written with a smile meant only for you.💗💝" },
//     { kicker:"Page 2",  title:"Captivated", desc:"The first time I saw you, I was already captured❤️ . You were funny, pleasant, and had this sense of humor that I couldn't ignore, not to mention how beautiful you are. But honestly? I was completely out of words when I finally saw you in Toronto. I just kept asking myself, 'Where have you been all my life?'" },
//     {
//       kicker:"Page 3",
//       title:"This is intentional because I really wanna do LIFE with you. My heart has settled❤️ ",
//       desc:"I’m not usually one for making big plans early on, but with you, it feels different. I JUST WANT YOU ALL TO MY SELF NOWWW!. I keep catching myself thinking, 'Oh, she’d love this,' whenever I pass a cool gallery or a beautiful restaurant in Downtown. I want to be the one who introduces you to your new favorite song and the one who listens to you vent after a long Monday. I want us to do multiple parts of  The story of FA, as a matter of fact we need a night set aside for gists like that😂 .  I have plans for us that involve zero pressure and a lot of laughter, maybe a low-stakes arcade night or just a long walk where we lose track of time. You’ve sparked a lot of curiosity in me Ama Adjeiwaa, and I’m really excited to see how all these ideas in my head play out with you by my side ♾️."
//     },
//     {
//       kicker:"Page 4",
//       title:"You stand out 💕",
//       desc:"I just wanted to tell you that you stand out to me in the best way. There’s a lot of 'same-ness' out there, but you have this unique rhythm to the way you live your life that I find fascinating. I think your parents did an excellent job, you rarely encounter beautiful yet very humble women like yourself. How lucky am I? I guess I'm a very luckyyy man fr.  Whether it’s your sense of humor, your laughter or the way you get passionate about the randomest things, you’re just different Ama. I’m really enjoying the process of getting to know you and seeing all the ways you’re unique. You’re definitely the highlight of my LIFE right now ( I am dead serious) , and I’m not even trying to hide it. I am always looking at pictures and videos of you. I truly love you Ama. "
//     },
//     { kicker:"Page 5",  title:"My Simple plan", desc:"Get to know every version of you Josie, love you like there's no tomorrow, and eventually convince you that 'happily ever after' isn't just for the movies" },
//     { kicker:"Page 6",  title:"Real talk", desc:"You are beautiful💓.. coss Look at youu..." },
//     { kicker:"Page 7",  title:"Toronto", desc:"Toronto with you was easily a top-tier life highlight for me. I’ve decided I just want to do that on repeat forever. I can’t wait for the proper date nights, the trips (anywhere but Mexico, obviously), and the endless opportunities I’m going to have to annoy your ass. You stand out way too much for me to let you go anywhere.😅" },
//     { kicker:"Page 8",  title:"Where I Find You", desc:"Here we go! Not into the unknown, but into you.Every step I take bends in your direction,like longing that knows its way home.Even when words fall short and distance speaks loud,my heart keeps choosing you,softly, endlessly, without needing to be asked."},
//     { 
//   kicker: "Page 9", 
//   title: "You deserve all the effort my love", 
//   desc: "I’ve been thinking about us, and I realized that for you, I’d climb every mountain without hesitation. I’d even swim across an ocean and we both know I’d have to learn how to do that first, lol. Every flight, every mile, and every effort is worth it just to see that smile.\n\n'In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.' — Maya Angelou. \n\nToronto was just the beginning. I’m ready for the date nights, the non-Mexico trips, and the next 62 years of annoying you. Will you be my Valentine?" 
// },
//     { kicker:"Page 10", title:"My Forever Valentine 💌", desc:"I’m officially checking to see if you’ll be my Valentine. I’m trying to get started on that 'Simple Plan' I told you about. Consider this 1 out of 62... get used to me annoying you for the next six decades. 😉" },
//   ].map((s, i) => ({
//     ...s,
//     img: slideImages[i],
//     pos: slidePos[i] || DEFAULT_BG_POS
//   }));

//   const landing = document.getElementById("landing");
//   const carousel = document.getElementById("carousel");
//   const startBtn = document.getElementById("startBtn");
//   const previewBtn = document.getElementById("previewBtn");
//   const backBtn = document.getElementById("backToLandingBtn");
//   const slider = document.getElementById("slider");
//   const dots = document.getElementById("dots");

//   const modal = document.getElementById("modal");
//   const modalBackdrop = document.getElementById("modalBackdrop");
//   const yesBtn = document.getElementById("yesBtn");
//   const noBtn = document.getElementById("noBtn");
//   const modalTitle = document.getElementById("modalTitle");
//   const modalText = document.getElementById("modalText");
//   const modalFootnote = document.getElementById("modalFootnote");

//   if (!landing || !carousel || !startBtn || !previewBtn || !backBtn || !slider || !dots || !modal) {
//     console.error("Missing elements. Check IDs in HTML.");
//     return;
//   }

//   // ✅ HARD FIX: only one screen can be active at once
//   const screens = document.querySelectorAll(".screen");
//   function setActiveScreen(id){
//     screens.forEach(s => s.classList.remove("screen--active"));
//     const el = document.getElementById(id);
//     if (el) el.classList.add("screen--active");
//   }

//   // Fireworks
//   const modalCard = modal.querySelector(".modal-card");
//   const fx = document.createElement("div");
//   fx.className = "fx";
//   fx.innerHTML = `<canvas id="fxCanvas"></canvas>`;
//   if (modalCard) modalCard.appendChild(fx);
//   const fxCanvas = fx.querySelector("#fxCanvas");
//   const ctx = fxCanvas ? fxCanvas.getContext("2d") : null;

//   let current = 0;
//   let isModalOpen = false;
//   let fxRunning = false;
//   let particles = [];
//   let rafId = 0;
//   let burstTimer = 0;

//   // Build slides
//   const slideEls = slidesData.map((s, idx) => {
//     const el = document.createElement("article");
//     el.className = "slide" + (idx === 0 ? " active" : "");
//     el.style.backgroundImage = `url("${s.img}")`;

//     // ✅ ONLY EDIT REQUIRED: apply the position so faces stay visible
//     el.style.backgroundPosition = s.pos;

//     const isLast = idx === slidesData.length - 1;

//     el.innerHTML = `
//       <div class="overlay"></div>
//       <div class="content">
//         <div class="kicker">
//           <span class="pill">${s.kicker}</span>
//           <span>•</span>
//           <span>${idx + 1}/${slidesData.length}</span>
//         </div>

//         <h2 class="title">${s.title}</h2>
//         <p class="desc">${s.desc}</p>

//         <div class="footerRow">
//           <div class="progressText">${isLast ? "Last slide 🎉" : "Tip: swipe left/right or use arrows"}</div>
//           <div class="controls">
//             <button type="button" class="btn btn--ghost prevBtn">← Prev</button>
//             ${
//               isLast
//                 ? `<button type="button" class="btn btn--primary askBtn">Pop the question 💖</button>`
//                 : `<button type="button" class="btn btn--primary nextBtn">Next →</button>`
//             }
//           </div>
//         </div>
//       </div>
//     `;
//     slider.appendChild(el);
//     return el;
//   });

//   // Dots
//   const dotEls = slidesData.map((_, idx) => {
//     const b = document.createElement("button");
//     b.className = "dotBtn" + (idx === 0 ? " active" : "");
//     b.type = "button";
//     b.addEventListener("click", () => goTo(idx));
//     dots.appendChild(b);
//     return b;
//   });

//   function goTo(index){
//     const total = slideEls.length;
//     const nextIndex = (index + total) % total;

//     slideEls[current].classList.remove("active");
//     dotEls[current].classList.remove("active");

//     current = nextIndex;

//     slideEls[current].classList.add("active");
//     dotEls[current].classList.add("active");
//   }
//   const next = () => goTo(current + 1);
//   const prev = () => goTo(current - 1);

//   // Modal
//   function openModal(){
//     isModalOpen = true;
//     modal.classList.add("modal--open");
//     modal.setAttribute("aria-hidden", "false");
//     modalTitle.textContent = "Will you be my Valentine? ❤️";
//     modalText.textContent = `${herName}, will you be my Valentine?`;
//     modalFootnote.textContent = "";
//     resetNoButton();
//     stopFireworks();
//   }
//   function closeModal(){
//     isModalOpen = false;
//     modal.classList.remove("modal--open");
//     modal.setAttribute("aria-hidden", "true");
//     resetNoButton();
//     stopFireworks();
//   }

//   // // No runaway
//   // function resetNoButton(){
//   //   noBtn.classList.remove("no-runaway");
//   //   noBtn.style.left = "";
//   //   noBtn.style.top = "";
//   // }
//   // function moveNoButton(){
//   //   const card = modal.querySelector(".modal-card");
//   //   if (!card) return;

//   //   noBtn.classList.add("no-runaway");

//   //   const cardRect = card.getBoundingClientRect();
//   //   const btnRect = noBtn.getBoundingClientRect();

//   //   const pad = 14;
//   //   const minX = pad;
//   //   const minY = 100;
//   //   const maxX = Math.max(minX, cardRect.width - btnRect.width - pad);
//   //   const maxY = Math.max(minY, cardRect.height - btnRect.height - pad);

//   //   const x = minX + Math.random() * (maxX - minX);
//   //   const y = minY + Math.random() * (maxY - minY);

//   //   noBtn.style.left = `${x}px`;
//   //   noBtn.style.top = `${y}px`;
//   // }

//   // =========================
// // NO button – constantly evasive
// // =========================
// function resetNoButton(){
//   noBtn.classList.remove("no-runaway");
//   noBtn.style.left = "";
//   noBtn.style.top = "";
// }

// function moveNoButton(){
//   const card = modal.querySelector(".modal-card");
//   if (!card) return;

//   noBtn.classList.add("no-runaway");

//   const cardRect = card.getBoundingClientRect();
//   const btnRect = noBtn.getBoundingClientRect();

//   const pad = 16;
//   const minX = pad;
//   const minY = 90; // keep below title
//   const maxX = Math.max(minX, cardRect.width - btnRect.width - pad);
//   const maxY = Math.max(minY, cardRect.height - btnRect.height - pad);

//   const x = minX + Math.random() * (maxX - minX);
//   const y = minY + Math.random() * (maxY - minY);

//   noBtn.style.left = `${x}px`;
//   noBtn.style.top = `${y}px`;
// }


//   // Fireworks
//   function resizeCanvas(){
//     if (!fxCanvas) return;
//     fxCanvas.width = Math.floor(fxCanvas.clientWidth * devicePixelRatio);
//     fxCanvas.height = Math.floor(fxCanvas.clientHeight * devicePixelRatio);
//   }

//   function burst(){
//     if (!fxCanvas || !ctx) return;

//     const w = fxCanvas.width;
//     const h = fxCanvas.height;
//     const cx = Math.random() * w * 0.9 + w * 0.05;
//     const cy = Math.random() * h * 0.45 + h * 0.05;

//     for (let i = 0; i < 90; i++){
//       const a = Math.random() * Math.PI * 2;
//       const sp = (Math.random() * 4 + 2) * devicePixelRatio;
//       const life = Math.random() * 40 + 40;

//       particles.push({
//         x: cx, y: cy,
//         vx: Math.cos(a) * sp,
//         vy: Math.sin(a) * sp,
//         g: 0.07 * devicePixelRatio,
//         life, maxLife: life,
//         hue: Math.random() < 0.6 ? 330 : 175
//       });
//     }
//   }

//   function draw(){
//     if (!fxCanvas || !ctx) return;
//     ctx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
//     particles = particles.filter(p => p.life > 0);

//     for (const p of particles){
//       p.life -= 1;
//       p.vy += p.g;
//       p.x += p.vx;
//       p.y += p.vy;

//       const alpha = Math.max(0, p.life / p.maxLife);
//       ctx.beginPath();
//       ctx.arc(p.x, p.y, 2.2 * devicePixelRatio, 0, Math.PI * 2);
//       ctx.fillStyle = `hsla(${p.hue}, 95%, 65%, ${alpha})`;
//       ctx.fill();
//     }
//   }

//   function startFireworks(){
//     if (fxRunning) return;
//     fxRunning = true;
//     fx.classList.add("fx--show");
//     resizeCanvas();
//     burst();
//     burstTimer = setInterval(burst, 450);

//     const loop = () => {
//       draw();
//       rafId = requestAnimationFrame(loop);
//     };
//     loop();
//   }

//   function stopFireworks(){
//     fxRunning = false;
//     fx.classList.remove("fx--show");
//     particles = [];
//     if (burstTimer) clearInterval(burstTimer);
//     if (rafId) cancelAnimationFrame(rafId);
//   }

//   window.addEventListener("resize", () => { if (fxRunning) resizeCanvas(); });

//   // Events
//   startBtn.addEventListener("click", () => {
//     setActiveScreen("carousel");
//     goTo(0);
//   });

//   previewBtn.addEventListener("click", () => {
//     setActiveScreen("carousel");
//     goTo(0);
//   });

//   backBtn.addEventListener("click", () => {
//     setActiveScreen("landing");
//     closeModal();
//   });

//   // Buttons
//   slider.addEventListener("pointerup", (e) => {
//     const t = e.target;
//     if (!(t instanceof Element)) return;

//     if (t.closest(".nextBtn")) next();
//     if (t.closest(".prevBtn")) prev();
//     if (t.closest(".askBtn")) openModal();
//   });

//   modalBackdrop.addEventListener("click", closeModal);

//   yesBtn.addEventListener("click", () => {
//     modalFootnote.textContent = "Yessss! 😭💖 WE FINALLY MADE ITTTTTT.. YAAY. SEE YOU SOON MY LOVE!!";
//     startFireworks();
//   });

//   noBtn.addEventListener("mouseenter", moveNoButton);
//   noBtn.addEventListener("click", () => {
//     moveNoButton();
//     modalFootnote.textContent = `Oh ${herName} NOOO 😭 ...try again 😅`;
//     setTimeout(() => {
//       modalTitle.textContent = "Please reconsider 🥺";
//       modalText.textContent = `${herName}, will you be my Valentine? ❤️`;
//     }, 650);
//   });

//   window.addEventListener("keydown", (e) => {
//     if (isModalOpen) {
//       if (e.key === "Escape") closeModal();
//       return;
//     }
//     if (!carousel.classList.contains("screen--active")) return;
//     if (e.key === "ArrowRight" || e.key === " ") next();
//     if (e.key === "ArrowLeft") prev();
//   });

//   // Swipe (touch/pen only)
//   let startX = 0;
//   let isDown = false;

//   slider.addEventListener("pointerdown", (e) => {
//     if (isModalOpen) return;

//     if (e.target instanceof Element) {
//       if (e.target.closest("button") || e.target.closest(".controls") || e.target.closest(".content")) {
//         return;
//       }
//     }

//     if (e.pointerType === "mouse") return;

//     isDown = true;
//     startX = e.clientX;
//   });

//   slider.addEventListener("pointerup", (e) => {
//     if (!isDown) return;
//     isDown = false;

//     const dx = e.clientX - startX;
//     if (dx > 50) prev();
//     else if (dx < -50) next();
//   });

//   slider.addEventListener("pointercancel", () => { isDown = false; });

//   // Preload images
//   slidesData.forEach(s => { const img = new Image(); img.src = s.img; });

//   setActiveScreen("landing");
// })();

(() => {
  const herName = "Ohemaa"; // change this

  // Default crop position so faces show more (overridden by slidePos if provided)
  const DEFAULT_BG_POS = "center 35%";

  const slideImages = [
    "assets/slide1.jpg",
    "assets/slide2.jpg",
    "assets/slide3.jpg",
    "assets/slide4.jpg",
    "assets/slide5.jpg",
    "assets/slide6.jpg",
    "assets/slide7.jpeg",
    "assets/slide8.jpg",
    "assets/slide9.jpg",
    "assets/slide10.jpeg",
  ];

  const slidePos = [
    "center 50%", "center 42%", "center 50%", "center 68%", "center 25%",
    "center 80%", "center 82%", null, null, null
  ];

  const slidesData = [
    { kicker:"Page 1",  title:`${herName} Ama Adjeiwaa😘`, desc:"This is me reaching out, to show you how deeply I care. Not with certainty,but with intention. If this finds you,know it was written with a smile meant only for you.💗💝" },
    { kicker:"Page 2",  title:"Captivated", desc:"The first time I saw you, I was already captured❤️ . You were funny, pleasant, and had this sense of humor that I couldn't ignore, not to mention how beautiful you are. But honestly? I was completely out of words when I finally saw you in Toronto. I just kept asking myself, 'Where have you been all my life?'" },
    {
      kicker:"Page 3",
      title:"This is intentional because I really wanna do LIFE with you. My heart has settled❤️ ",
      desc:"I’m not usually one for making big plans early on, but with you, it feels different. I JUST WANT YOU ALL TO MY SELF NOWWW!. I keep catching myself thinking, 'Oh, she’d love this,' whenever I pass a cool gallery or a beautiful restaurant in Downtown. I want to be the one who introduces you to your new favorite song and the one who listens to you vent after a long Monday. I want us to do multiple parts of  The story of FA, as a matter of fact we need a night set aside for gists like that😂 .  I have plans for us that involve zero pressure and a lot of laughter, maybe a low-stakes arcade night or just a long walk where we lose track of time. You’ve sparked a lot of curiosity in me Ama Adjeiwaa, and I’m really excited to see how all these ideas in my head play out with you by my side ♾️."
    },
    {
      kicker:"Page 4",
      title:"You stand out 💕",
      desc:"I just wanted to tell you that you stand out to me in the best way. There’s a lot of 'same-ness' out there, but you have this unique rhythm to the way you live your life that I find fascinating. I think your parents did an excellent job, you rarely encounter beautiful yet very humble women like yourself. How lucky am I? I guess I'm a very luckyyy man fr.  Whether it’s your sense of humor, your laughter or the way you get passionate about the randomest things, you’re just different Ama. I’m really enjoying the process of getting to know you and seeing all the ways you’re unique. You’re definitely the highlight of my LIFE right now ( I am dead serious) , and I’m not even trying to hide it. I am always looking at pictures and videos of you. I truly love you Ama. "
    },
    { kicker:"Page 5",  title:"My Simple plan", desc:"Get to know every version of you Josie, love you like there's no tomorrow, and eventually convince you that 'happily ever after' isn't just for the movies" },
    { kicker:"Page 6",  title:"Real talk", desc:"You are beautiful💓.. coss Look at youu..." },
    { kicker:"Page 7",  title:"Toronto", desc:"Toronto with you was easily a top-tier life highlight for me. I’ve decided I just want to do that on repeat forever. I can’t wait for the proper date nights, the trips (anywhere but Mexico, obviously), and the endless opportunities I’m going to have to annoy your ass. You stand out way too much for me to let you go anywhere.😅" },
    { kicker:"Page 8",  title:"Where I Find You", desc:"Here we go! Not into the unknown, but into you.Every step I take bends in your direction,like longing that knows its way home.Even when words fall short and distance speaks loud,my heart keeps choosing you,softly, endlessly, without needing to be asked."},
    {
      kicker:"Page 9",
      title:"You deserve all the effort my love",
      desc:"I’ve been thinking about us, and I realized that for you, I’d climb every mountain without hesitation. I’d even swim across an ocean and we both know I’d have to learn how to do that first, lol. Every flight, every mile, and every effort is worth it just to see that smile.\n\n'In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.' — Maya Angelou. \n\nToronto was just the beginning. I’m ready for the date nights, the non-Mexico trips, and the next 62 years of annoying you. Will you be my Valentine?"
    },
    { kicker:"Page 10", title:"My Forever Valentine 💌", desc:"I’m officially checking to see if you’ll be my Valentine. I’m trying to get started on that 'Simple Plan' I told you about. Consider this 1 out of 62... get used to me annoying you for the next six decades. 😉" },
  ].map((s, i) => ({
    ...s,
    img: slideImages[i],
    pos: slidePos[i] || DEFAULT_BG_POS
  }));

  const landing = document.getElementById("landing");
  const carousel = document.getElementById("carousel");
  const startBtn = document.getElementById("startBtn");
  const previewBtn = document.getElementById("previewBtn");
  const backBtn = document.getElementById("backToLandingBtn");
  const slider = document.getElementById("slider");
  const dots = document.getElementById("dots");

  const modal = document.getElementById("modal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const modalFootnote = document.getElementById("modalFootnote");

  if (!landing || !carousel || !startBtn || !previewBtn || !backBtn || !slider || !dots || !modal) {
    console.error("Missing elements. Check IDs in HTML.");
    return;
  }

  // Only one screen active at once
  const screens = document.querySelectorAll(".screen");
  function setActiveScreen(id){
    screens.forEach(s => s.classList.remove("screen--active"));
    const el = document.getElementById(id);
    if (el) el.classList.add("screen--active");
  }

  // Fireworks
  const modalCard = modal.querySelector(".modal-card");
  const fx = document.createElement("div");
  fx.className = "fx";
  fx.innerHTML = `<canvas id="fxCanvas"></canvas>`;
  if (modalCard) modalCard.appendChild(fx);
  const fxCanvas = fx.querySelector("#fxCanvas");
  const ctx = fxCanvas ? fxCanvas.getContext("2d") : null;

  let current = 0;
  let isModalOpen = false;
  let fxRunning = false;
  let particles = [];
  let rafId = 0;
  let burstTimer = 0;

  function goTo(index){
    const total = slideEls.length;
    const nextIndex = (index + total) % total;

    slideEls[current].classList.remove("active");
    dotEls[current].classList.remove("active");

    current = nextIndex;

    slideEls[current].classList.add("active");
    dotEls[current].classList.add("active");
  }
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // Modal
  function openModal(){
    isModalOpen = true;
    modal.classList.add("modal--open");
    modal.setAttribute("aria-hidden", "false");
    modalTitle.textContent = "Will you be my Valentine? ❤️";
    modalText.textContent = `${herName}, will you be my Valentine?`;
    modalFootnote.textContent = "";
    resetNoButton();
    stopFireworks();
  }
  function closeModal(){
    isModalOpen = false;
    modal.classList.remove("modal--open");
    modal.setAttribute("aria-hidden", "true");
    resetNoButton();
    stopFireworks();
  }

  // NO button – constantly evasive (hover OR click attempt)
  function resetNoButton(){
    noBtn.classList.remove("no-runaway");
    noBtn.style.left = "";
    noBtn.style.top = "";
  }

  function moveNoButton(){
    const card = modal.querySelector(".modal-card");
    if (!card) return;

    noBtn.classList.add("no-runaway");

    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const pad = 16;
    const minX = pad;
    const minY = 90; // below title
    const maxX = Math.max(minX, cardRect.width - btnRect.width - pad);
    const maxY = Math.max(minY, cardRect.height - btnRect.height - pad);

    const x = minX + Math.random() * (maxX - minX);
    const y = minY + Math.random() * (maxY - minY);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }

  // Fireworks
  function resizeCanvas(){
    if (!fxCanvas) return;
    fxCanvas.width = Math.floor(fxCanvas.clientWidth * devicePixelRatio);
    fxCanvas.height = Math.floor(fxCanvas.clientHeight * devicePixelRatio);
  }

  function burst(){
    if (!fxCanvas || !ctx) return;

    const w = fxCanvas.width;
    const h = fxCanvas.height;
    const cx = Math.random() * w * 0.9 + w * 0.05;
    const cy = Math.random() * h * 0.45 + h * 0.05;

    for (let i = 0; i < 90; i++){
      const a = Math.random() * Math.PI * 2;
      const sp = (Math.random() * 4 + 2) * devicePixelRatio;
      const life = Math.random() * 40 + 40;

      particles.push({
        x: cx, y: cy,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp,
        g: 0.07 * devicePixelRatio,
        life, maxLife: life,
        hue: Math.random() < 0.6 ? 330 : 175
      });
    }
  }

  function draw(){
    if (!fxCanvas || !ctx) return;
    ctx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
    particles = particles.filter(p => p.life > 0);

    for (const p of particles){
      p.life -= 1;
      p.vy += p.g;
      p.x += p.vx;
      p.y += p.vy;

      const alpha = Math.max(0, p.life / p.maxLife);
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.2 * devicePixelRatio, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 95%, 65%, ${alpha})`;
      ctx.fill();
    }
  }

  function startFireworks(){
    if (fxRunning) return;
    fxRunning = true;
    fx.classList.add("fx--show");
    resizeCanvas();
    burst();
    burstTimer = setInterval(burst, 450);

    const loop = () => {
      draw();
      rafId = requestAnimationFrame(loop);
    };
    loop();
  }

  function stopFireworks(){
    fxRunning = false;
    fx.classList.remove("fx--show");
    particles = [];
    if (burstTimer) clearInterval(burstTimer);
    if (rafId) cancelAnimationFrame(rafId);
  }

  window.addEventListener("resize", () => { if (fxRunning) resizeCanvas(); });

  // Build slides (✅ FIX: direct click handlers on the actual buttons)
  const slideEls = slidesData.map((s, idx) => {
    const el = document.createElement("article");
    el.className = "slide" + (idx === 0 ? " active" : "");
    el.style.backgroundImage = `url("${s.img}")`;
    el.style.backgroundPosition = s.pos;

    const isLast = idx === slidesData.length - 1;

    el.innerHTML = `
      <div class="overlay"></div>
      <div class="content">
        <div class="kicker">
          <span class="pill">${s.kicker}</span>
          <span>•</span>
          <span>${idx + 1}/${slidesData.length}</span>
        </div>

        <h2 class="title">${s.title}</h2>
        <p class="desc">${s.desc}</p>

        <div class="footerRow">
          <div class="progressText">${isLast ? "Last slide 🎉" : "Tip: swipe left/right or use arrows"}</div>
          <div class="controls">
            <button type="button" class="btn btn--ghost prevBtn">← Prev</button>
            ${
              isLast
                ? `<button type="button" class="btn btn--primary askBtn">Pop the question 💖</button>`
                : `<button type="button" class="btn btn--primary nextBtn">Next →</button>`
            }
          </div>
        </div>
      </div>
    `;
    slider.appendChild(el);

    // ✅ Direct bindings = reliable on all resolutions/devices
    const prevBtn = el.querySelector(".prevBtn");
    const nextBtn = el.querySelector(".nextBtn");
    const askBtn  = el.querySelector(".askBtn");

    if (prevBtn) prevBtn.addEventListener("click", (ev) => { ev.preventDefault(); prev(); });
    if (nextBtn) nextBtn.addEventListener("click", (ev) => { ev.preventDefault(); next(); });
    if (askBtn)  askBtn.addEventListener("click",  (ev) => { ev.preventDefault(); openModal(); });

    return el;
  });

  // Dots
  const dotEls = slidesData.map((_, idx) => {
    const b = document.createElement("button");
    b.className = "dotBtn" + (idx === 0 ? " active" : "");
    b.type = "button";
    b.addEventListener("click", () => goTo(idx));
    dots.appendChild(b);
    return b;
  });

  // Landing / nav
  startBtn.addEventListener("click", () => {
    setActiveScreen("carousel");
    goTo(0);
  });

  previewBtn.addEventListener("click", () => {
    setActiveScreen("carousel");
    goTo(0);
  });

  backBtn.addEventListener("click", () => {
    setActiveScreen("landing");
    closeModal();
  });

  // Modal events
  modalBackdrop.addEventListener("click", closeModal);

  yesBtn.addEventListener("click", () => {
    modalFootnote.textContent = "Yessss! 😭💖 WE FINALLY MADE ITTTTTT.. YAAY. SEE YOU SOON MY LOVE!!";
    startFireworks();
  });

  // ✅ Constantly evasive NO (hover OR click attempt)
  ["mouseenter", "mousedown", "pointerdown", "touchstart"].forEach(evt => {
    noBtn.addEventListener(evt, (e) => {
      e.preventDefault();
      moveNoButton();
      modalFootnote.textContent = `Nice try 😌💨.. THE NO OPTION WILL VANISH WAII.. YOU LOVE ME OO Hwɛ,😂😂😂`;
    }, { passive: false });
  });

  window.addEventListener("keydown", (e) => {
    if (isModalOpen) {
      if (e.key === "Escape") closeModal();
      return;
    }
    if (!carousel.classList.contains("screen--active")) return;
    if (e.key === "ArrowRight" || e.key === " ") next();
    if (e.key === "ArrowLeft") prev();
  });

  // Swipe (touch/pen only) — doesn’t interfere with desktop clicks
  let startX = 0;
  let isDown = false;

  slider.addEventListener("pointerdown", (e) => {
    if (isModalOpen) return;

    if (e.target instanceof Element) {
      if (e.target.closest("button") || e.target.closest(".controls") || e.target.closest(".content")) {
        return;
      }
    }

    if (e.pointerType === "mouse") return;

    isDown = true;
    startX = e.clientX;
  });

  slider.addEventListener("pointerup", (e) => {
    if (!isDown) return;
    isDown = false;

    const dx = e.clientX - startX;
    if (dx > 50) prev();
    else if (dx < -50) next();
  });

  slider.addEventListener("pointercancel", () => { isDown = false; });

  // Preload images
  slidesData.forEach(s => { const img = new Image(); img.src = s.img; });

  setActiveScreen("landing");
})();
