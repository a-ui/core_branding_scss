'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Set indeterminate state of some checkboxes
    const accordions = document.querySelectorAll(".m-accordion__header");

    for (let index = 0; index < accordions.length; index++) {
        const accordionEl = accordions[index];

        accordionEl.onclick = () => {
            if (accordionEl.getAttribute("aria-expanded") == "true") {
                accordionEl.setAttribute("aria-expanded", "false");
            } else {
                accordionEl.setAttribute("aria-expanded", "true");
            }
        }
    }

    const checkboxes = document.querySelectorAll("#checkbox-indeterminate, #table-checkbox1");

    for (let index = 0; index < checkboxes.length; index++) {
        checkboxes[index].indeterminate = true;
    }

    // Check/uncheck checkbox when clicking on table row
    const tableRows = document.querySelectorAll(".a-table tr.is-clickable");

    for (let index = 0; index < tableRows.length; index++) {
        const tableRow = tableRows[index];
        const checkbox = tableRow.querySelector("input[type='checkbox']");

        tableRow.onclick = (event) => {
            event.preventDefault();

            tableRow.classList.toggle('is-selected');

            if (checkbox) {
                checkbox.checked = !checkbox.checked;
            }
        }
    }

    const switches = document.querySelectorAll(".a-switch");

    for (let index = 0; index < switches.length; index++) {
        const switchEl = switches[index];

        switchEl.onclick = () => {
            if (switchEl.getAttribute("aria-checked") == "true") {
                switchEl.setAttribute("aria-checked", "false");
            } else {
                switchEl.setAttribute("aria-checked", "true");
            }
        }
    }

    const toggles = document.querySelectorAll(".a-toggle__button");

    for (let index = 0; index < toggles.length; index++) {
        const toggleEl = toggles[index];

        toggleEl.onclick = () => {
            if (toggleEl.getAttribute("aria-expanded") == "true") {
                toggleEl.setAttribute("aria-expanded", "false");
            } else {
                toggleEl.setAttribute("aria-expanded", "true");
            }
        }
    }

    const tags = document.querySelectorAll("button.m-tag");

    for (let index = 0; index < tags.length; index++) {
        const tagEl = tags[index];

        tagEl.onclick = () => {
            if (tagEl.getAttribute("aria-pressed") == "true") {
                tagEl.setAttribute("aria-pressed", "false");
            } else {
                tagEl.setAttribute("aria-pressed", "true");
            }
        }
    }
}, false);
