document.addEventListener('DOMContentLoaded', () => {

    // ── Contact ──
    document.getElementById('email').href = `mailto:${data.contact.email}`
    document.getElementById('email').textContent = data.contact.email
    document.getElementById('linkedin').href = data.contact.linkedin
    document.getElementById('linkedin').textContent = data.contact.linkedinLabel
    document.getElementById('github').href = data.contact.github
    document.getElementById('github').textContent = data.contact.githubLabel

    // ── Career Statement ──
    document.getElementById('career-statement').textContent = data.careerStatement

    // ── Experience ──
    const expSection = document.getElementById('experience-list')
    data.experience.forEach(item => {
        expSection.innerHTML += `
        <div class="experience-item">
            <div class="experience-header">
                <h3>${item.title}</h3>
                <div class="experience-right">
                    <div class="experience-company">${item.company}</div>
                    <div class="experience-date">${item.date}</div>
                    <div class="experience-location">${item.location}</div>
                </div>
            </div>
            <ul>
                ${item.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
        </div>`
    })

    // ── Education ──
    const eduSection = document.getElementById('education-list')
    data.education.forEach(item => {
        eduSection.innerHTML += `
        <div class="education-item">
            <div class="education-header">
                <h3>${item.title}</h3>
                <div class="education-right">
                    <div class="education-school">${item.school}</div>
                    <div class="education-date">${item.date}</div>
                    <div class="education-location">${item.location}</div>
                </div>
            </div>
            ${item.detail ? `<div class="education-detail">${item.detail}</div>` : ''}
            ${item.desc ? `<div class="education-desc">${item.desc}</div>` : ''}
        </div>`
    })

    // ── Projects ──
    const projSection = document.getElementById('projects-list')
    data.projects.forEach(item => {
        projSection.innerHTML += `
        <div class="project-item">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <div class="project-tech"><strong>Tech:</strong> ${item.tech}</div>
        </div>`
    })

    // ── Skills ──
    const skillsSection = document.getElementById('skills-list')
    data.skills.forEach(item => {
        skillsSection.innerHTML += `
        <div class="skill-category">${item.category}</div>
        <div class="skill-list">${item.list}</div>`
    })
})
