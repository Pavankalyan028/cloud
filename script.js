// Mock data for chefs
const chefs = [
    { name: "Chef Mario", cuisine: "Italian", experience: "10 years" },
    { name: "Chef Priya", cuisine: "Indian", experience: "8 years" },
    { name: "Chef Carlos", cuisine: "Mexican", experience: "6 years" },
    { name: "Chef Sakura", cuisine: "Japanese", experience: "12 years" }
  ];
  
  // Populate chefs section
  const chefList = document.getElementById("chef-list");
  chefs.forEach(chef => {
    const chefCard = document.createElement("div");
    chefCard.classList.add("chef-card");
    chefCard.innerHTML = `
      <h3>${chef.name}</h3>
      <p>Cuisine: ${chef.cuisine}</p>
      <p>Experience: ${chef.experience}</p>
    `;
    chefList.appendChild(chefCard);
  });
  
  // Booking form submission
  const bookingForm = document.getElementById("booking-form");
  bookingForm.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(bookingForm);
    const bookingDetails = Object.fromEntries(formData.entries());
    alert(`Booking Successful! Details:\n${JSON.stringify(bookingDetails, null, 2)}`);
    bookingForm.reset();
  });
  
  // Scroll to booking section
  function scrollToBooking() {
    document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
  }
  