/* =============================
   TASK MANAGER - FULL PROJECT JS
   Validation: Regex + JS + red/green messages
   No bootstrap validation classes
============================= */

(function () {

    // LocalStorage key
    const STORAGE_KEY = "tasks_final_validation";

    /* ================================
          Utility Functions
    ================================ */
    function getTasks() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch (e) {
            return [];
        }
    }

    function saveTasks(arr) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    }

    function uid() {
        return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    }

    function escapeHtml(str = "") {
        return str.replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function escapeClass(str = "") {
        return str.replace(/\s+/g, '');
    }

    /* ================================
          FORM HANDLER CLASS
    ================================ */
    class CustomerFormHandler {

        constructor(formEl, previewEl, msgEl) {
            this.form = formEl;
            this.preview = previewEl;
            this.msg = msgEl;
            this.editId = null;

            this.init();
        }

        init() {

            // Submit event
            this.form.addEventListener("submit", e => this.handleSubmit(e));

            // Real-time validation
            ["title", "description", "dueDate", "priority", "status"].forEach(name => {
                const field = this.form.querySelector(`[name='${name}']`);
                field.addEventListener("input", () => this.validateField(field));
                field.addEventListener("blur", () => this.validateField(field));
            });

            // Clear button
            document.getElementById("clearBtn").addEventListener("click", () => this.clearForm());

            // If editing from view.html
            this.loadEdit();

            // Preview list
            this.renderPreview();
        }

        /* =============================
              Show message above form
        ============================== */
        showMessage(type, text) {
            if (type === "error") {
                this.msg.innerHTML = `<div class='text-danger fw-bold'>${text}</div>`;
            } else {
                this.msg.innerHTML = `<div class='text-success fw-bold'>${text}</div>`;
            }
            setTimeout(() => this.msg.innerHTML = "", 2500);
        }

        /* =============================
              Field Validation
              (Regex + JS custom rules)
        ============================== */
        validateField(field) {
            const name = field.name;
            const value = field.value.trim();
            const errorBox = document.getElementById("error-" + name);
            const successBox = document.getElementById("success-" + name);

            let error = "";

            // Clear previous messages
            errorBox.textContent = "";
            successBox.textContent = "";

            // HTML5 required / pattern
            if (!field.checkValidity()) {
                error = field.title || "Invalid input";
            }

            // Custom JS Rules (from PDF)
            if (name === "title" && value.length < 10) {
                error = "Title must be at least 10 characters";
            }

            if (name === "dueDate") {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const picked = new Date(value);
                if (picked < today) {
                    error = "Due date cannot be in the past";
                }
            }

            if (error) {
                errorBox.textContent = error;
                return false;
            } else {
                successBox.textContent = "Looks good ✔";
                return true;
            }
        }

        validateForm() {
            const names = ["title", "description", "dueDate", "priority", "status"];
            let valid = true;

            names.forEach(name => {
                const field = this.form.querySelector(`[name='${name}']`);
                if (!this.validateField(field)) valid = false;
            });

            return valid;
        }

        /* =============================
              Handle Submit
        ============================== */
        handleSubmit(e) {
            e.preventDefault();

            if (!this.validateForm()) {
                this.showMessage("error", "Fix all validation errors!");
                return;
            }

            const data = new FormData(this.form);

            const task = {
                id: this.editId || uid(),
                title: data.get("title").trim(),
                description: data.get("description").trim(),
                dueDate: data.get("dueDate"),
                priority: data.get("priority"),
                status: data.get("status"),
                createdAt: new Date().toISOString()
            };

            const tasks = getTasks();
            const index = tasks.findIndex(t => t.id === task.id);

            if (index >= 0) tasks[index] = task;
            else tasks.unshift(task);

            saveTasks(tasks);

            this.showMessage("success", this.editId ? "Task Updated!" : "Task Added!");

            this.clearForm();
            this.editId = null;

            this.renderPreview();
        }

        clearForm() {
            this.form.reset();

            // Clear messages
            ["title", "description", "dueDate", "priority", "status"].forEach(name => {
                document.getElementById("error-" + name).textContent = "";
                document.getElementById("success-" + name).textContent = "";
            });

            localStorage.removeItem("edit_task_id");
            document.getElementById("submitBtn").textContent = "Add Task";
        }

        loadEdit() {
            const id = localStorage.getItem("edit_task_id");
            if (!id) return;

            const tasks = getTasks();
            const task = tasks.find(t => t.id === id);
            if (!task) return;

            this.editId = id;

            this.form.title.value = task.title;
            this.form.description.value = task.description;
            this.form.dueDate.value = task.dueDate;
            this.form.priority.value = task.priority;
            this.form.status.value = task.status;

            document.getElementById("submitBtn").textContent = "Update Task";

            localStorage.removeItem("edit_task_id");
        }

        /* =============================
              Preview (latest 4)
        ============================== */
        renderPreview() {
            if (!this.preview) return;

            const tasks = getTasks();
            this.preview.innerHTML = "";

            if (tasks.length === 0) {
                this.preview.innerHTML = `<li class='list-group-item text-muted'>No tasks yet</li>`;
                return;
            }

            tasks.slice(0, 4).forEach(task => {
                this.preview.innerHTML += `
                <li class="list-group-item d-flex justify-content-between">
                    <div>
                        <strong>${escapeHtml(task.title)}</strong>
                        <div class="small text-muted">${task.dueDate} • ${task.status}</div>
                    </div>
                    <span class="preview-badge badge-priority-${escapeClass(task.priority)}">${task.priority}</span>
                </li>
            `;
            });
        }
    }

    /* ================================
          SUBMISSION VIEWER (view.html)
    ================================ */
    class SubmissionViewer {
        constructor(tbody, searchInput, noData) {
            this.tbody = tbody;
            this.search = searchInput;
            this.noData = noData;

            this.init();
        }

        init() {
            this.renderTable();

            if (this.search) {
                this.search.addEventListener("input", () => this.renderTable(this.search.value));
            }

            this.tbody.addEventListener("click", e => this.handleActions(e));
        }

        renderTable(filterText = "") {
            const q = filterText.trim().toLowerCase();
            const tasks = getTasks();

            const filtered = tasks.filter(t =>
                t.title.toLowerCase().includes(q) ||
                t.status.toLowerCase().includes(q)
            );

            this.tbody.innerHTML = "";

            if (filtered.length === 0) {
                this.noData.hidden = false;
                document.getElementById("taskTable").hidden = true;
                return;
            }

            this.noData.hidden = true;
            document.getElementById("taskTable").hidden = false;

            filtered.forEach(t => {
                this.tbody.innerHTML += `
                <tr>
                    <td>${escapeHtml(t.title)}</td>
                    <td>${escapeHtml(t.description)}</td>
                    <td>${t.dueDate}</td>
                    <td><span class="preview-badge badge-priority-${escapeClass(t.priority)}">${t.priority}</span></td>
                    <td>${t.status}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" data-action="edit" data-id="${t.id}">Edit</button>
                        <button class="btn btn-sm btn-danger" data-action="delete" data-id="${t.id}">Delete</button>
                    </td>
                </tr>
            `;
            });
        }

        handleActions(e) {
            const btn = e.target.closest("button[data-action]");
            if (!btn) return;

            const action = btn.dataset.action;
            const id = btn.dataset.id;

            if (action === "delete") {
                if (!confirm("Delete this task?")) return;
                let tasks = getTasks();
                tasks = tasks.filter(t => t.id !== id);
                saveTasks(tasks);
                this.renderTable(this.search.value);
            }

            if (action === "edit") {
                localStorage.setItem("edit_task_id", id);
                window.location = "index.html";
            }
        }
    }

    /* ================================
               INITIALIZE 
    ================================ */
    document.addEventListener("DOMContentLoaded", () => {

        // index.html
        const form = document.getElementById("taskForm");
        if (form) {
            new CustomerFormHandler(
                form,
                document.getElementById("previewList"),
                document.getElementById("formMessage")
            );
        }

        // view.html
        const tbody = document.getElementById("taskBody");
        if (tbody) {
            const viewer = new SubmissionViewer(
                tbody,
                document.getElementById("searchInput"),
                document.getElementById("noData")
            );
        }
    });

})();
