# Student Deadline Conflict Detector

## Problem Statement
Students may have multiple assignments, examinations, laboratory submissions, and projects due on the same day. A simple task list does not clearly reveal workload conflicts.

## Objective
To detect academic deadline collisions and highlight days with multiple tasks or unusually high estimated workload.

## Features
- Add academic deadlines
- Record subject and priority
- Estimate required study hours
- Group tasks by date
- Detect multiple deadlines on one day
- Detect high-workload days
- Display workload summary

## Technologies
- HTML5
- CSS3
- JavaScript

## Conflict Rules
A date is highlighted as a conflict when:
- Two or more deadlines occur on the same date, OR
- Estimated workload is six or more hours.

## Project Structure
```text
student-deadline-conflict-detector/
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

## How to Run
Open `index.html` in a browser.

## Future Enhancements
- Calendar interface
- LocalStorage
- Automatic priority scoring
- Study-plan generation
- Notification reminders
