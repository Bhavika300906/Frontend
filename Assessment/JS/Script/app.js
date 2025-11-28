// Script/app.js
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

class CustomerFormHandler {
    constructor(formSelector, listContainerSelector) {
        this.form = document.querySelector(formSelector);
        this.taskListContainer = document.querySelector(listContainerSelector);
        this.tasksCollectionKey = 'task_manager_data';
        this.initListeners();
        this.loadTasks();
    }

    initListeners() {
        // Event listener for form submission
        this.form.addEventListener('submit', this.handleSubmit.bind(this));

        // Real-time validation on input and blur
        this.form.querySelectorAll('.form-control, .form-select').forEach(input => {
            input.addEventListener('input', this.handleValidation.bind(this));
            input.addEventListener('blur', this.handleValidation.bind(this));
            // Special case for select/date/textarea on change
            if (input.tagName === 'SELECT' || input.type === 'date' || input.tagName === 'TEXTAREA') {
                input.addEventListener('change', this.handleValidation.bind(this));
            }
        });

        // Event Delegation for task list actions (Delete/Edit)
        this.taskListContainer.addEventListener('click', this.handleTaskActions.bind(this));
    }

    /**
     * Handles real-time validation for a single input field.
     */
    handleValidation(event) {
        const input = event.target;
        this.validateInput(input);
    }

    /**
     * Validates a single input element and updates its UI state.
     */
    validateInput(input) {
        const inputName = input.name;
        let isValid = input.checkValidity();
        let errorMessage = input.validationMessage;

        // --- Custom Assessment Validation Logic (Task Title >= 10 chars) ---
        if (inputName === 'taskTitle') {
            const minLength = parseInt(input.getAttribute('data-minlength'), 10);
            if (input.value.length < minLength) {
                isValid = false;
                errorMessage = `Task Title must be at least ${minLength} characters.`;
            }
        }

        // --- Required Field Check (Assessment Requirement) ---
        if (input.hasAttribute('required') && input.value.trim() === '') {
            isValid = false;
            errorMessage = 'This field is required.';
        }

        const errorElement = this.form.querySelector(`.error-message[data-for="${inputName}"]`);

        // Bootstrap validation classes
        input.classList.toggle('is-invalid', !isValid);
        input.classList.toggle('is-valid', isValid);

        if (errorElement) {
            errorElement.textContent = isValid ? '' : errorMessage;
        }

        return isValid;
    }

    /**
     * Manually validates all fields in the form.
     */
    validateForm() {
        let isFormValid = true;
        const inputFields = this.form.querySelectorAll('.form-control, .form-select');

        inputFields.forEach(input => {
            // Check validity of all fields
            if (!this.validateInput(input)) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }

    /**
     * Handles the form submission event.
     */
    handleSubmit(event) {
        event.preventDefault();

        if (!this.validateForm()) {
            this.showMessage('Validation failed. Please correct the errors.', 'danger');
            return;
        }

        // 1. Collect form data
        const formData = new FormData(this.form);
        const taskData = Object.fromEntries(formData.entries());

        // 2. Save data
        this.saveToLocalStorage(taskData);

        // 3. Update UI and reset form
        this.showMessage('Task saved successfully!', 'success');
        this.clearForm();
        this.loadTasks(); // Reload the list to show the new task
    }

    /**
     * Resets the form after submission.
     */
    clearForm() {
        this.form.reset();
        // Clear validation styles
        this.form.querySelectorAll('.form-control, .form-select').forEach(input => {
            input.classList.remove('is-valid', 'is-invalid');
            const errorElement = this.form.querySelector(`.error-message[data-for="${input.name}"]`);
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
    }

    /**
     * Saves the data as an array in localStorage.
     * @param {Object} data The task object to save.
     */
    saveToLocalStorage(data) {
        try {
            // Give the task a unique ID
            data.id = crypto.randomUUID();
            const existingTasks = this.getTasksFromLocalStorage();
            existingTasks.push(data);
            localStorage.setItem(this.tasksCollectionKey, JSON.stringify(existingTasks));
        } catch (e) {
            console.error('Error saving to localStorage:', e);
            this.showMessage('Could not save data. Local storage error.', 'danger');
        }
    }

    /**
     * Retrieves the array of tasks from localStorage.
     * @returns {Array<Object>} The array of tasks.
     */
    getTasksFromLocalStorage() {
        const tasksJSON = localStorage.getItem(this.tasksCollectionKey);
        return tasksJSON ? JSON.parse(tasksJSON) : [];
    }

    /**
     * Handles Edit/Delete actions in the task list using event delegation.
     */
    handleTaskActions(event) {
        const target = event.target;
        const taskCard = target.closest('[data-task-id]');
        if (!taskCard) return;

        const taskId = taskCard.dataset.taskId;

        if (target.classList.contains('delete-btn')) {
            this.deleteTask(taskId);
        }
        // NOTE: Edit functionality placeholder is left in the HTML as per assessment
    }

    /**
     * Deletes a task from localStorage and updates the UI.
     * @param {string} taskId The ID of the task to delete.
     */
    deleteTask(taskId) {
        let tasks = this.getTasksFromLocalStorage();
        const initialLength = tasks.length;

        tasks = tasks.filter(task => task.id !== taskId);

        if (tasks.length < initialLength) {
            localStorage.setItem(this.tasksCollectionKey, JSON.stringify(tasks));
            this.showMessage('Task deleted successfully.', 'success');
            this.loadTasks(); // Refresh UI
        }
    }

    /**
     * Loads tasks from localStorage and dynamically renders the list.
     */
    loadTasks() {
        const tasks = this.getTasksFromLocalStorage();
        this.taskListContainer.innerHTML = ''; // Clear existing list

        if (tasks.length === 0) {
            this.taskListContainer.innerHTML = `
                <div class="alert alert-info text-center" role="alert">
                    <i class="bi bi-info-circle me-2"></i> No tasks found. Start by adding a new task!
                </div>
            `;
            return;
        }

        tasks.forEach(task => {
            const taskCard = this.createTaskCard(task);
            this.taskListContainer.appendChild(taskCard);
        });
    }

    /**
     * Creates the HTML structure for a single task item.
     * @param {Object} task The task data object.
     * @returns {HTMLElement} The created task card element.
     */
    createTaskCard(task) {
        const card = document.createElement('div');
        card.className = 'card shadow-sm mb-3';
        card.dataset.taskId = task.id;

        // Determine Bootstrap context color based on status
        const statusColor = task.status === 'Done' ? 'success' :
            task.status === 'In Progress' ? 'warning' :
                'danger';

        card.innerHTML = `
            <div class="card-body d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center p-3">
                <div class="flex-grow-1 min-w-0 mb-3 mb-sm-0 me-3">
                    <h5 class="card-title text-truncate fw-bold mb-1">${task.taskTitle}</h5>
                    <p class="card-text text-muted small mb-2">${task.description.substring(0, 80)}...</p>
                    <div class="d-flex flex-wrap gap-2 small">
                        <span class="badge text-bg-${statusColor}">${task.status}</span>
                        <span class="badge text-bg-primary">Priority: ${task.priority}</span>
                        <span class="badge text-bg-secondary">Due: ${task.dueDate}</span>
                    </div>
                </div>
                <div class="d-flex gap-2">
                    <!-- Edit Button (Placeholder) -->
                    <button class="btn btn-outline-primary btn-sm rounded-circle edit-btn" title="Edit Task">
                        <i class="bi bi-pencil pointer-events-none"></i>
                    </button>
                    <!-- Delete Button -->
                    <button class="btn btn-outline-danger btn-sm rounded-circle delete-btn" title="Delete Task">
                        <i class="bi bi-trash pointer-events-none"></i>
                    </button>
                </div>
            </div>
        `;
        return card;
    }

    /**
     * Reusable UI message box for success/error.
     * Method required by assessment: showMessage()
     */
    showMessage(message, type) {
        const box = document.getElementById('message-box');
        const alertClass = `alert-${type}`;
        const title = type === 'success' ? 'Success' : 'Error';
        const icon = type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill';

        const toast = document.createElement('div');
        toast.className = `alert ${alertClass} toast-custom mb-0`;
        toast.setAttribute('role', 'alert');
        toast.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="bi ${icon} me-2 fs-5"></i>
                <div>
                    <h6 class="mb-0 fw-bold">${title}</h6>
                    <small>${message}</small>
                </div>
            </div>
        `;

        // Add to box and set opacity for transition
        box.appendChild(toast);

        // Fade out and remove after 4 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                toast.remove();
            }, 300); // Wait for transition
        }, 4000);
    }
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check for required environment variables (for canvas/firestore)
    if (firebaseConfig) {
        console.log("Firebase config found. Initializing Auth/Firestore (though data will be stored in localStorage per requirement).");
        // The actual Firebase initialization and sign-in logic is omitted
    } else {
        console.log("Running in stand-alone mode. LocalStorage is the primary persistence method.");
    }

    // Create an instance of the Form Handler
    const handler = new CustomerFormHandler('#task-form', '#task-list-container');
});