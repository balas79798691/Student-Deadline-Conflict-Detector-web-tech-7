let deadlines = [
    {task:"DBMS Assignment",subject:"DBMS",date:"2026-10-07",priority:"High",hours:4},
    {task:"Cloud Computing Record",subject:"Cloud",date:"2026-10-07",priority:"Medium",hours:2},
    {task:"TOC Preparation",subject:"TOC",date:"2026-10-10",priority:"High",hours:5}
];

const form = document.getElementById("deadlineForm");

function analyze() {
    const grouped = {};

    deadlines.forEach(d => {
        if (!grouped[d.date]) grouped[d.date] = [];
        grouped[d.date].push(d);
    });

    const dates = Object.keys(grouped).sort();
    const conflicts = dates.filter(date => grouped[date].length >= 2).length;

    document.getElementById("total").textContent = deadlines.length;
    document.getElementById("conflicts").textContent = conflicts;
    document.getElementById("workload").textContent =
        deadlines.reduce((sum, d) => sum + Number(d.hours), 0);

    const calendar = document.getElementById("calendar");

    calendar.innerHTML = dates.map(date => {
        const tasks = grouped[date];
        const totalHours = tasks.reduce((sum,t) => sum + Number(t.hours), 0);
        const overloaded = tasks.length >= 2 || totalHours >= 6;

        return `
        <article class="day ${overloaded ? "warning" : "safe"}">
            <h3>${formatDate(date)}</h3>
            <p><strong>${tasks.length}</strong> deadline(s) ·
               <strong>${totalHours}</strong> estimated hour(s)</p>
            ${tasks.map(t => `
                <div class="task">
                    <strong>${escapeHTML(t.task)}</strong>
                    — ${escapeHTML(t.subject)}
                    — ${escapeHTML(t.priority)}
                    — ${t.hours} hour(s)
                </div>
            `).join("")}
            <p><strong>${overloaded ? "⚠ Workload conflict detected" : "✓ Manageable workload"}</strong></p>
        </article>`;
    }).join("") || "<p>No deadlines added.</p>";
}

function formatDate(date) {
    return new Date(date + "T00:00:00").toLocaleDateString(
        undefined, {weekday:"long", year:"numeric", month:"long", day:"numeric"}
    );
}

function escapeHTML(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
}

form.addEventListener("submit", e => {
    e.preventDefault();
    deadlines.push({
        task: document.getElementById("task").value,
        subject: document.getElementById("subject").value,
        date: document.getElementById("date").value,
        priority: document.getElementById("priority").value,
        hours: document.getElementById("hours").value
    });
    form.reset();
    analyze();
});

analyze();
