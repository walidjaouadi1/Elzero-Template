//  Skills Section
skillsSection = document.querySelector(".our-skills")
spans = document.querySelectorAll(".the-progress span")
    // Stats
nums = document.querySelectorAll(".box .number")
statsSection = document.querySelector(".stats")
console.log(nums);
let started = false
    // 
window.onscroll = function() {
    // skills
    if (window.scrollY > skillsSection.offsetTop - 200) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width
        })
    }
    // stats
    function startcount(el) {
        let goal = el.dataset.goal
        let count = setInterval(() => {
            el.textContent++;
            if (el.textContent == goal) {
                clearInterval(count)
            }
        }, 2000 / goal)
    }
    if (window.scrollY >= (statsSection.offsetTop - 400)) {
        if (!started) {
            nums.forEach((num) => { startcount(num) });
        }
        started = true
    }
}