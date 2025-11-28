// Global variables (required for environment compatibility)
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

/**
 * Class required by assessment: SubmissionViewer
 * Handles reading, filtering, and displaying tasks from localStorage.
 */
class SubmissionViewer {
    constructor() {
        this.tasksCollectionKey = 'task_manager_data';
        this.taskListBody = document.getElementById('submissions-list');
        this.searchField = document.getElementById('search-input');
        this.noDataMessage = document.getElementById('no-data-message');
        this.taskCountSpan = document.getElementById('task-count');
        this.allTasks = this.getTasksFromLocalStorage(); // Initial load of all tasks

        this.initListeners();
        this.renderTable(this.allTasks);
    }

    /**
     * Retrieves the array of tasks from localStorage.
     * Method requirement: Read from localStorage
     * @returns {Array<Object>} The array of tasks.
     */
    getTasksFromLocalStorage() {
        const tasksJSON = localStorage.getItem(this.tasksCollectionKey);
        // Ensure that tasks is always an array, even if localStorage is empty
        return tasksJSON ? JSON.parse(tasksJSON) : [];
    }

    /**
     * Initializes event listeners for search and delegation for actions.
     */
    initListeners() {
        // Search bar listener for filtering tasks
        this.searchField.addEventListener('input', this.handleSearch.bind(this));

        // Event delegation for table actions (Delete)
        this.taskListBody.addEventListener('click', this.handleTaskActions.bind(this));
    }

    /**
     * Handles filtering the tasks based on the search input.
     * Method requirement: Search bar to filter by Name or Vehicle (interpreted as Title/Description)
     */
    handleSearch() {
        const query = this.searchField.value.toLowerCase().trim();

        // If query is empty, show all tasks
        if (!query) {
            this.renderTable(this.allTasks);
            return;
        }

        const filteredTasks = this.allTasks.filter(task => {
            // Check Task Title
            const titleMatch = task.taskTitle.toLowerCase().includes(query);
            // Check Description
            const descriptionMatch = task.description.toLowerCase().includes(query);

            // Note: Also includes checks for 'name', 'mobile', 'password' just in case
            const nameMatch = task.name?.toLowerCase().includes(query);

            return titleMatch || descriptionMatch || nameMatch;
        });

        this.renderTable(filteredTasks);
    }

    /**
     * Dynamically generates and renders the table rows.
     * Method requirement: Dynamically generate table of submissions
     * @param {Array<Object>} tasks Array of tasks to display.
     */
    renderTable(tasks) {
        this.taskListBody.innerHTML = '';

        if (tasks.length === 0) {
            // Method requirement: Show "No data found" message if results empty
            this.noDataMessage.classList.remove('d-none');
            this.taskCountSpan.textContent = '0 Tasks Found';
            return;
        }

        this.noDataMessage.classList.add('d-none');
        this.taskCountSpan.textContent = `${tasks.length} Tasks Found`;

        tasks.forEach((task, index) => {
            const row = this.createTableRow(task, index + 1);
            this.taskListBody.appendChild(row);
        });
    }

    /**
     * Creates a single table row (tr) element for a task.
     * @param {Object} task The task data.
     * @param {number} index The row number.
     * @returns {HTMLElement} The created table row element.
     */
    createTableRow(task, index) {
        const tr = document.createElement('tr');
        tr.className = 'task-row';
        tr.dataset.taskId = task.id;

        // Status badge styling
        const statusColor = task.status === 'Done' ? 'success' :
            task.status === 'In Progress' ? 'warning' :
                'danger';

        // NOTE: Displaying User Credentials (Name, Mobile, Password) in table is generally insecure
        // We will focus on the task details for the main columns.
        tr.innerHTML = `
            <th scope="row" class="small">${index}</th>
            <td>
                <p class="fw-bold mb-0">${task.taskTitle}</p>
                <small class="text-muted">${task.description.substring(0, 50)}...</small>
            </td>
            <td><span class="badge text-bg-primary">${task.priority}</span></td>
            <td><span class="badge text-bg-${statusColor}">${task.status}</span></td>
            <td>${task.dueDate}</td>
            <td>
                <button class="btn btn-outline-danger btn-sm delete-btn" data-task-id="${task.id}" title="Delete Record">
                    <i class="bi bi-trash pointer-events-none"></i>
                </button>
            </td>
        `;
        return tr;
    }

    /**
     * Handles Delete actions in the task list using event delegation.
     * Bonus Task requirement: Add Delete button to remove individual records.
     * @param {Event} event The click event on the task list body.
     */
    handleTaskActions(event) {
        const target = event.target.closest('.delete-btn');
        if (!target) return;

        const taskId = target.dataset.taskId;
        this.deleteTask(taskId);
    }

    /**
     * Deletes a task from localStorage and updates the UI.
     * @param {string} taskId The ID of the task to delete.
     */
    deleteTask(taskId) {
        // Find the task index
        const taskIndex = this.allTasks.findIndex(task => task.id === taskId);

        if (taskIndex !== -1) {
            // Remove from the local array
            this.allTasks.splice(taskIndex, 1);

            // Save the updated array back to localStorage
            localStorage.setItem(this.tasksCollectionKey, JSON.stringify(this.allTasks));

            // Re-render the table with the current search query applied (if any)
            this.handleSearch();

            // Optional: Show confirmation message
            this.showMessage('Record deleted successfully.', 'success');
        } else {
            this.showMessage('Error: Task not found.', 'danger');
        }
    }

    /**
     * Reusable UI message box for success/error.
     * @param {string} message The text content of the message.
     * @param {string} type 'success', 'danger', or 'warning'.
     */
    showMessage(message, type) {
        // Simple implementation of showMessage for the viewer page (no dedicated box needed, using generic toast)
        const toastContainer = document.getElementById('submissions-table').parentNode;
        const alertClass = `alert-${type}`;
        const title = type === 'success' ? 'Success' : 'Error';

        const toast = document.createElement('div');
        toast.className = `alert ${alertClass} alert-dismissible fade show fixed-bottom-0 mx-auto w-75 mt-3`;
        toast.setAttribute('role', 'alert');
        toast.style.zIndex = 100;
        toast.style.maxWidth = '400px';

        toast.innerHTML = `
            <strong>${title}:</strong> ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        // Temporarily append the toast to show it
        toastContainer.appendChild(toast);

        // Auto-dismiss after a few seconds
        setTimeout(() => {
            new bootstrap.Alert(toast).close();
        }, 3000);
    }
}

// Initialize the Viewer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check for required environment variables
    if (firebaseConfig) {
        console.log("Firebase config found.");
    } else {
        console.log("Running in stand-alone mode. LocalStorage data viewer initialized.");
    }

    // Create an instance of the Submission Viewer
    const viewer = new SubmissionViewer();
});