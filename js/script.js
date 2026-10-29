/* ==========================================================================
   1. قائمة الـ 14 تاسك (هنا نعدل اسم ووصف كل تاسك بسهولة تامة)
   ========================================================================== */
const tasksData = [
    // --- التاسك 1 (السطر 6 إلى 11) ---
{
        folder: "pro1",
        files: ["index.html", "index1.HTML", "index2.HTML"],
        title: "HTML5 Fundamentals (3 Sub-Tasks)",
        category: "HTML5 Core",
        description: "Three foundational exercises covering basic tags, multimedia (video/audio), semantic structure, and a full HTML CV page."
    },
// --- التاسك 2 (السطر 13 إلى 18) ---
    {
        folder: "pro2",
        title: "External CSS Linking & Typography Styling",
        category: "HTML & CSS Basics",
        description: "Foundational exercise demonstrating how to link an external CSS stylesheet to an HTML document and apply basic text color rules."
    },
// --- التاسك 3 (السطر 20 إلى 25) ---
    {
        folder: "pro3",
        title: "Flexbox Centering & Background Images",
        category: "CSS Layout",
        description: "Task focusing on CSS Flexbox for perfect vertical and horizontal centering, alongside background image sizing and repeating properties."
    },
// --- التاسك 4 (السطر 27 إلى السطر 32) ---
    {
        folder: "pro4",
        title: "Responsive Hero Section & CSS Overlays",
        category: "UI Design & Responsive",
        description: "A high-quality landing page header featuring a full-screen background image with a transparent overlay, flexbox navigation, hover animations, and mobile-responsive media queries."
    },
// --- التاسك 5 (السطر 34 إلى 39) ---
    {
        folder: "pro5",
        title: "Google Search Page Clone",
        category: "UI Clone & Flexbox",
        description: "A precise UI clone of the Google homepage. Highlights include CSS Flexbox centering, customized search bar styling with focus shadows, and button hover effects."
    },
// --- التاسك 6 (السطر 41 إلى 46) ---
    {
        folder: "pro6",
        title: "Ramadan Landing Page (Flexbox Split)",
        category: "Flexbox & Layout",
        description: "A clean landing page demonstrating Flexbox alignment. Features a split-screen layout with structured typography, a navigation bar, styling interactive elements, and responsive image scaling."
    },
// --- التاسك 7 (السطر 48 إلى 53) ---
    {
        folder: "pro7",
        title: "Meet Our Team (Responsive CSS Grid)",
        category: "CSS Grid & UI Cards",
        description: "Responsive team showcase section built using CSS Grid. Features avatar profiling, hover animations, interactive follow buttons, and mobile-friendly breakpoints."
    },
    // --- التاسك 8 (السطر 55 إلى 60) ---
// --- التاسك 8 (السطر 55 إلى 60) ---
    {
        folder: "pro8",
        title: "Country Flags Drawing (Pure CSS)",
        category: "CSS Artwork & Layout",
        description: "Creative pure-CSS flag designs (Syria, France, Belgium, Italy) using CSS Grid layout, Flexbox direction alignments, and CSS root variables."
    },
// --- التاسك 9 (السطر 62 إلى 67) ---
    {
        folder: "pro9",
        title: "Responsive Grid & Bootstrap 5 Setup",
        category: "Bootstrap 5",
        description: "Introduction to Bootstrap 5 responsive grid layout (containers, rows, and columns) with custom CSS class overrides and breakpoint testing."
    },
// --- التاسك 10 (السطر 69 إلى 74) ---
    {
        folder: "pro10",
        title: "Contact Us Page & Interactive Form",
        category: "UI Design & Forms",
        description: "A stylish Contact Us section integrating FontAwesome icons, split contact details, a custom-bordered form card, and smooth hover interactions."
    },
    // --- التاسك 11 (السطر 76 إلى 81) ---
// --- التاسك 11 (السطر 76 إلى 81) ---
    {
        folder: "pro11",
        files: ["index.html", "index1.html", "index2.html", "index3.html"],
        title: "JavaScript DOM Manipulation & Events",
        category: "JavaScript Basics",
        description: "Interactive DOM scripting exercises demonstrating innerHTML modification, image source toggling (Light Bulb On/Off), and dynamic element visibility control."
    },
// --- التاسك 12 (السطر 83 إلى 88) ---
    {
        folder: "pro12",
        title: "Interactive Math & DOM Controller App",
        category: "JavaScript Logic",
        description: "An interactive utility application performing dynamic math operations (sum, multiplication, modulus, random numbers) alongside DOM class and color toggling."
    },
// --- التاسك 13 (السطر 90 إلى 95) ---
    {
        folder: "pro13",
        title: "Klassy Cafe - Full Responsive Restaurant Template",
        category: "Complete Landing Page",
        description: "A comprehensive restaurant landing page featuring responsive navigation with a mobile hamburger toggle, hero showcase, chefs presentation grid, and an interactive table reservation form with validation."
    },
// --- التاسك 14 (السطر 97 إلى 102) ---
    {
        folder: "pro14",
        title: "Advanced JavaScript Problem Solving & Algorithms",
        category: "JavaScript Algorithms",
        description: "A collection of algorithmic challenges solved in JavaScript, covering football points calculations, array cube summations, Fibonacci sequences, binary-to-integer conversion, string manipulation, and number filtering."
    },
];

/* ==========================================================================
   2. توليد شرائح التاسكات الـ 14 وتفعيل المعاينة الحية عند تقريب الماوس
   ========================================================================== */
const tasksTrack = document.getElementById("tasksTrack");

function renderTasks() {
    tasksTrack.innerHTML = tasksData.map((task) => {
        const mainFile = task.files ? task.files[0] : "index.html";
        const projectUrl = encodeURI(`front_end/${task.folder}/${mainFile}`);

        // إذا كان التاسك فيه أكثر من ملف، بيعمل أزرار صغيرة للتبديل بينهم بالمعاينة والفتح
        const subFilesButtons = task.files ? `
            <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:10px;">
                ${task.files.map((file, idx) => `
                    <span class="sub-file-btn" data-file-url="${encodeURI(`front_end/${task.folder}/${file}`)}" 
                          style="font-size:0.72rem; padding:3px 8px; border-radius:6px; border:1px solid var(--accent-orange); background:${idx === 0 ? 'var(--accent-orange)' : 'transparent'}; color:${idx === 0 ? '#fff' : 'var(--accent-orange)'}; cursor:pointer;">
                        Page ${idx + 1}
                    </span>
                `).join("")}
            </div>
        ` : "";

        return `
            <a href="${projectUrl}" target="_blank" class="task-slide" data-url="${projectUrl}">
                <div class="task-preview-box">
                    <div class="preview-browser-bar">
                        <span class="bar-path">front_end / ${task.folder}</span>
                        <span>Live Preview</span>
                    </div>
                    <div class="task-placeholder-cover">
                        <span class="placeholder-folder-num">${task.folder}</span>
                        <span class="placeholder-hint">Hover to Preview &bull; Click to Open</span>
                    </div>
                    <iframe class="task-live-iframe" title="${task.title}" loading="lazy"></iframe>
                </div>

                <div class="task-body">
                    <div class="task-meta">
                        <span class="task-badge">${task.folder}</span>
                        <span class="task-category">${task.category}</span>
                    </div>
                    <h3 class="task-title">${task.title}</h3>
                    ${subFilesButtons}
                    <p class="task-desc">${task.description}</p>
                    <div class="task-footer">
                        <span>Launch Full Project</span>
                        <span>&#8599;</span>
                    </div>
                </div>
            </a>
        `;
    }).join("");

    const slides = document.querySelectorAll(".task-slide");
    slides.forEach((slide) => {
        const iframe = slide.querySelector(".task-live-iframe");
        const barPath = slide.querySelector(".bar-path");

        // تشغيل المعاينة عند تقريب الماوس على الشريحة
        slide.addEventListener("mouseenter", () => {
            const targetUrl = slide.getAttribute("data-url");
            if (iframe && !iframe.getAttribute("src")) {
                iframe.setAttribute("src", targetUrl);
            }
        });

        // التبديل بين المشاريع الثلاثة عند تمرير الماوس أو النقر على أزرار Page 1, 2, 3
        const subBtns = slide.querySelectorAll(".sub-file-btn");
        subBtns.forEach((btn) => {
            btn.addEventListener("mouseenter", () => {
                const newUrl = btn.getAttribute("data-file-url");
                slide.setAttribute("href", newUrl);
                slide.setAttribute("data-url", newUrl);
                if (iframe) iframe.setAttribute("src", newUrl);
                if (barPath) barPath.textContent = decodeURI(newUrl);
                subBtns.forEach(b => { b.style.background = "transparent"; b.style.color = "var(--accent-orange)"; });
                btn.style.background = "var(--accent-orange)";
                btn.style.color = "#fff";
            });
        });
    });
}

renderTasks();

/* ==========================================================================
   3. التحكم بتحريك الشرائح (يمين/يسار) والتبديل بين Slides و Grid
   ========================================================================== */
const tasksViewport = document.getElementById("tasksViewport");
const prevSlideBtn = document.getElementById("prevSlide");
const nextSlideBtn = document.getElementById("nextSlide");
const slideViewBtn = document.getElementById("slideViewBtn");
const gridViewBtn = document.getElementById("gridViewBtn");
const sliderArrows = document.getElementById("sliderArrows");

prevSlideBtn.addEventListener("click", () => {
    tasksViewport.scrollBy({ left: -360, behavior: "smooth" });
});

nextSlideBtn.addEventListener("click", () => {
    tasksViewport.scrollBy({ left: 360, behavior: "smooth" });
});

slideViewBtn.addEventListener("click", () => {
    tasksViewport.classList.remove("grid-mode");
    slideViewBtn.classList.add("active");
    gridViewBtn.classList.remove("active");
    sliderArrows.style.display = "flex";
});

gridViewBtn.addEventListener("click", () => {
    tasksViewport.classList.add("grid-mode");
    gridViewBtn.classList.add("active");
    slideViewBtn.classList.remove("active");
    sliderArrows.style.display = "none";
});

/* ==========================================================================
   4. زر تبديل الوضع الليلي والنهاري (مع حفظ الخيار)
   ========================================================================== */
const themeToggle = document.getElementById("themeToggle");
const rootHtml = document.documentElement;

const savedTheme = localStorage.getItem("khaled_portfolio_theme") || "dark";
rootHtml.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", () => {
    const currentTheme = rootHtml.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    rootHtml.setAttribute("data-theme", nextTheme);
    localStorage.setItem("khaled_portfolio_theme", nextTheme);
});

// تحديث السنة تلقائياً بالفوتر
document.getElementById("currentYear").textContent = new Date().getFullYear();