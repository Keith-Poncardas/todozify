// Helper function to get elements by ID and label with customizable max length
const getElements = (ids, maxLengths = {}) => {
  return ids.reduce((acc, id) => {
    const element = document.getElementById(id);
    const label =
      document.querySelector(`label[for="${id}"]`) || element?.labels?.[0];
    const maxLength = maxLengths[id] || 5; // Default max length is 5 if not specified
    if (element) acc[id] = { element, label, maxLength };
    return acc;
  }, {});
};

// Define customizable max lengths for each field
const maxLengths = {
  author: 25,
  title: 50,
  comments: 100
};

// Get form elements and buttons
const formElements = getElements(["author", "title", "comments"], maxLengths);
const buttons = getElements(["cancel", "post"]); // Changed 'update' to 'post'

// Handle input event logic
const handleInput = (event) => {
  const { id, value } = event.target;
  const field = formElements[id];

  // Check if any field exceeds its max length
  const hasInvalidFields = Object.values(formElements).some(
    ({ element, maxLength }) => element.value.length > maxLength
  );

  if (field) {
    if (value.length > field.maxLength) {
      // Add invalid class
      field.label?.classList.add("text-danger");
      field.element.classList.add("is-invalid");
    } else {
      // Remove invalid class
      field.label?.classList.remove("text-danger");
      field.element.classList.remove("is-invalid");
    }
  }

  // Update button states based on all fields
  if (buttons.post?.element) {  // Changed from 'update' to 'post'
    buttons.post.element.disabled = hasInvalidFields;
  }

};

// Attach event listeners to input fields
Object.values(formElements).forEach(({ element }) => {
  element.addEventListener("input", handleInput);
});